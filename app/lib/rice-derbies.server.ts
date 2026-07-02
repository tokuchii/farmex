import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "~/lib/firebase.server";

export type RiceDerbiesRecord = {
  id: string;
  title: string;
  descriptions: string[];
  images: string[];
  youtubeLinks: string[];
  active: boolean;
  createdAt: string;
};

export type RiceDerbiesInput = {
  title: string;
  descriptions: string[];
  images: string[];
  youtubeLinks: string[];
};

export function normalizeStringList(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value
      .filter((item): item is string => typeof item === "string")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  if (typeof value === "string" && value.trim()) {
    return [value.trim()];
  }

  return [];
}

export function parseStringListFromJson(raw: FormDataEntryValue | null): string[] {
  if (raw === null || raw === "") {
    return [];
  }

  if (typeof raw !== "string") {
    throw new Error("Invalid list data.");
  }

  const parsed = JSON.parse(raw) as unknown;
  return normalizeStringList(parsed);
}

export async function getRiceDerbies(): Promise<RiceDerbiesRecord[]> {
  const derbiesRef = collection(db, "riceDerbies");
  const derbiesQuery = query(derbiesRef, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(derbiesQuery);

  return snapshot.docs.map((derbiesDoc) => {
    const data = derbiesDoc.data();

    return {
      id: derbiesDoc.id,
      title: typeof data.title === "string" ? data.title : "",
      descriptions: normalizeStringList(data.descriptions ?? data.description),
      images: Array.isArray(data.images)
        ? data.images.filter((url): url is string => typeof url === "string")
        : [],
      youtubeLinks: normalizeStringList(data.youtubeLinks ?? data.youtubeLink),
      active: data.active === true,
      createdAt: typeof data.createdAt === "string" ? data.createdAt : "",
    };
  });
}

export async function createRiceDerbies(input: RiceDerbiesInput) {
  const derbiesRef = collection(db, "riceDerbies");

  await addDoc(derbiesRef, {
    title: input.title,
    descriptions: input.descriptions,
    images: input.images,
    youtubeLinks: input.youtubeLinks,
    active: false,
    createdAt: new Date().toISOString(),
  });
}

export async function updateRiceDerbies(id: string, input: RiceDerbiesInput) {
  await updateDoc(doc(db, "riceDerbies", id), {
    title: input.title,
    descriptions: input.descriptions,
    images: input.images,
    youtubeLinks: input.youtubeLinks,
  });
}

export async function setRiceDerbiesActive(id: string, active: boolean) {
  await updateDoc(doc(db, "riceDerbies", id), { active });
}

export async function deleteRiceDerbies(id: string) {
  await deleteDoc(doc(db, "riceDerbies", id));
}
