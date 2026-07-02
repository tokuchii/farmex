import { useEffect, useState, useRef } from "react";
import { collection, onSnapshot, type Unsubscribe } from "firebase/firestore";
import { db } from "~/lib/firebase";

type ViewMode = "today" | "week" | "month" | "year";

function startOfDay(date: Date): Date {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

function startOfWeek(date: Date): Date {
  const d = startOfDay(date);
  d.setDate(d.getDate() - d.getDay());
  return d;
}

type ChartPoint = { label: string; visitors: number };

function toPHTime(iso: string): Date {
  const d = new Date(iso);
  return new Date(d.getTime() + 8 * 60 * 60 * 1000);
}

function formatPHHour(hour: number): string {
  if (hour === 0) return "12 AM";
  if (hour === 12) return "12 PM";
  return hour < 12 ? `${hour} AM` : `${hour - 12} PM`;
}

function buildTodayData(createdAts: string[]): ChartPoint[] {
  const hours = Array.from({ length: 24 }, (_, i) => ({
    label: formatPHHour(i),
    visitors: 0,
  }));
  createdAts.forEach((iso) => {
    const d = toPHTime(iso);
    if (!isNaN(d.getTime())) {
      const h = d.getHours();
      hours[h].visitors++;
    }
  });
  return hours;
}

function buildWeekData(createdAts: string[]): ChartPoint[] {
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const days = dayNames.map((name) => ({ label: name, visitors: 0 }));
  createdAts.forEach((iso) => {
    const d = new Date(iso);
    if (!isNaN(d.getTime())) days[d.getDay()].visitors++;
  });
  return days;
}

function buildMonthData(createdAts: string[]): ChartPoint[] {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const data = months.map((label) => ({ label, visitors: 0 }));
  createdAts.forEach((iso) => {
    const d = new Date(iso);
    if (!isNaN(d.getTime()) && d.getFullYear() === new Date().getFullYear()) {
      data[d.getMonth()].visitors++;
    }
  });
  return data;
}

function buildYearData(createdAts: string[]): ChartPoint[] {
  const currentYear = new Date().getFullYear();
  const yearMap = new Map<number, number>();
  for (let y = 2024; y <= currentYear; y++) {
    yearMap.set(y, 0);
  }
  createdAts.forEach((iso) => {
    const d = new Date(iso);
    if (!isNaN(d.getTime())) {
      const y = d.getFullYear();
      if (y >= 2024 && y <= currentYear) {
        yearMap.set(y, (yearMap.get(y) || 0) + 1);
      }
    }
  });
  return Array.from(yearMap.entries()).map(([y, count]) => ({
    label: String(y),
    visitors: count,
  }));
}

function filterBySince(createdAts: string[], since: Date): string[] {
  const sinceISO = since.toISOString();
  return createdAts.filter((iso) => iso >= sinceISO);
}

export function useVisitorChart(view: ViewMode) {
  const [allCreatedAts, setAllCreatedAts] = useState<string[]>([]);
  const unsubRef = useRef<Unsubscribe | null>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | null = null;

    function subscribe() {
      if (!db) return;
      unsubRef.current = onSnapshot(
        collection(db, "visitorSessions"),
        (snapshot) => {
          const dates = snapshot.docs
            .map((doc) => doc.data().createdAt as string)
            .filter((v): v is string => typeof v === "string" && v.length > 0);
          setAllCreatedAts(dates);
        },
        (error) => {
          console.error("Visitor snapshot error:", error);
        }
      );
    }

    if (db) {
      subscribe();
    } else {
      timer = setInterval(() => {
        if (db) {
          if (timer) clearInterval(timer);
          subscribe();
        }
      }, 100);
    }

    return () => {
      if (timer) clearInterval(timer);
      unsubRef.current?.();
    };
  }, []);

  let filtered = allCreatedAts;
  if (view === "today") {
    filtered = filterBySince(allCreatedAts, startOfDay(new Date()));
  } else if (view === "week") {
    filtered = filterBySince(allCreatedAts, startOfWeek(new Date()));
  }

  const chartData =
    view === "today"
      ? buildTodayData(filtered)
      : view === "week"
      ? buildWeekData(filtered)
      : view === "month"
      ? buildMonthData(filtered)
      : buildYearData(filtered);

  return { chartData, filteredCount: filtered.length, totalCount: allCreatedAts.length };
}
