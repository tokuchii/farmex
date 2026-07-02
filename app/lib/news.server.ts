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
    author: string;
    organization: string;
    position: string;
    notes: string;
    location: string;
    publishedAt: string;
    summary: string;
    images: string[];
};

export async function getNews(): Promise<NewsRecords[]> {
    const newsRef = collection(db, "news");
    const newsQuery = query(newsRef, orderBy("createdAt", "desc"));
    const snapshot = await getDocs(newsQuery);

    return snapshot.docs.map((newsDoc) => {
        const data = newsDoc.data();
        return {
            id: newsDoc.id,
            title: typeof data.title === "string" ? data.title : "",
            author: typeof data.author === "string" ? data.author : "",
            organization: typeof data.organization === "string" ? data.organization : "",
            position: typeof data.position === "string" ? data.position : "",
            notes: typeof data.notes === "string" ? data.notes : "",
            location: typeof data.location === "string" ? data.location : "",
            publishedAt: typeof data.publishedAt === "string" ? data.publishedAt : "",
            summary: typeof data.summary === "string" ? data.summary : "",
            images: Array.isArray(data.images)
                ? data.images.filter((url): url is string => typeof url === "string")
                : [],
            createdAt: typeof data.createdAt === "string" ? data.createdAt : "",
        };
    });
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
