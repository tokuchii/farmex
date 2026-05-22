import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "~/lib/firebase.server";

export type RiceDerbiesRecord = {
    id: string;
    title: string;
    description: string;
    images: string[];
    youtubeLink: string;
    createdAt: string;
}

export type RiceDerbiesInput = {
    title: string;
    description: string;
    images: string[];
    youtubeLink: string;
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
            description: typeof data.description === "string" ? data.description : "",
            images: Array.isArray(data.images)
              ? data.images.filter((url): url is string => typeof url === "string")
              : [],
            youtubeLink: typeof data.youtubeLink === "string" ? data.youtubeLink : "",
            createdAt: typeof data.createdAt === "string" ? data.createdAt : "",
        };
    });
}

export async function createRiceDerbies(input: RiceDerbiesInput) {
    const derbiesRef = collection(db, "riceDerbies");

    await addDoc(derbiesRef, {
        title: input.title,
        description: input.description,
        images: input.images,
        youtubeLink: input.youtubeLink,
        createdAt: new Date().toISOString(),
    });
}

export async function deleteRiceDerbies(id: string) {
    await deleteDoc(doc(db, "riceDerbies", id));
}