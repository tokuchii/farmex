import {
    addDoc,
    collection,
    getDocs,
    orderBy,
    query,
    where,
    limit,
} from "firebase/firestore";
import { db } from "~/lib/firebase.server";

export type VisitorsSessionRecord = {
    id: string;
    visitorUniqueID: string;
    ipAddress: string;
    userAgent: string;
    view: boolean;
    createdAt: string;
};

export type VisitorsSessionInput = {
    visitorUniqueID: string;
    ipAddress: string;
    userAgent: string;
    view: boolean;
};

export async function getVisitorSessions(): Promise<VisitorsSessionRecord[]> {
    const ref = collection(db, "visitorSessions");
    const q = query(ref, orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);

    return snapshot.docs.map((item) => {
        const data = item.data();

        return {
            id: item.id,
            visitorUniqueID: data.visitorUniqueID,
            ipAddress: data.ipAddress,
            userAgent: data.userAgent,
            view: data.view,
            createdAt: data.createdAt,
        };
    });
}

export async function createVisitorsSession(input: VisitorsSessionInput) {
    const existing = await getDocs(
        query(
            collection(db, "visitorSessions"),
            where("visitorUniqueID", "==", input.visitorUniqueID),
            limit(1)
        )
    );

    if (!existing.empty) {
        return;
    }

    await addDoc(collection(db, "visitorSessions"), {
        ...input,
        createdAt: new Date().toISOString(),
    });
}