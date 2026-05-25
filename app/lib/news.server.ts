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

export type NewsRecords = {
    id: string;
    title: string;
    author: string;
    organization: string;
    position: string;
    notes: string;
    location: string;
    publishedAt: string;
    summary: string;
    images: string[];
    createdAt: string;
};

export type NewsInput = {
    title: string;
    author?: string;
    organization?: string;
    position?: string;
    notes?: string;
    location?: string;
    publishedAt?: string;
    summary?: string;
    images?: string[];
};

export async function getNews(): Promise<NewsRecords[]> {
    const newsRef = collection(db, "news");
    const newsQuery = query(newsRef, orderBy("createdAt", "desc"));
    const snapshot = await getDocs(newsQuery);
    return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    })) as NewsRecords[];
}

export async function createNews(input: NewsInput) {
    const newRecord = {
        ...input,
        createdAt: new Date().toISOString(),
    };
    const docRef = await addDoc(collection(db, "news"), newRecord);
    return { id: docRef.id, ...newRecord } as NewsRecords;
}

export async function updateNews(id: string, input: NewsInput) {
    const docRef = doc(db, "news", id);
    await updateDoc(docRef, {
        ...input,
    });
}

export async function deleteNews(id: string) {
    const docRef = doc(db, "news", id);
    await deleteDoc(docRef);
}
