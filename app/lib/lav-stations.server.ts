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

export type LavStationRecord = {
  id: string;
  title: string;
  description: string;
  images: string[];
  youtubeLink: string;
  createdAt: string;
};

export type LavStationInput = {
  title: string;
  description: string;
  images: string[];
  youtubeLink: string;
};

export async function getLavStations(): Promise<LavStationRecord[]> {
  const stationsRef = collection(db, "lavStations");
  const stationsQuery = query(stationsRef, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(stationsQuery);

  return snapshot.docs.map((stationDoc) => {
    const data = stationDoc.data();
    return {
      id: stationDoc.id,
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

export async function createLavStation(input: LavStationInput) {
  const stationsRef = collection(db, "lavStations");

  await addDoc(stationsRef, {
    title: input.title,
    description: input.description,
    images: input.images,
    youtubeLink: input.youtubeLink,
    createdAt: new Date().toISOString(),
  });
}

export async function deleteLavStation(id: string) {
  await deleteDoc(doc(db, "lavStations", id));
}
