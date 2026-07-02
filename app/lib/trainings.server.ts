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

export type TrainingSessionRecord = {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  time: string;
  location: string;
  createdAt: string;
};

export type TrainingSessionInput = {
  title: string;
  startDate: string;
  endDate: string;
  time: string;
  location: string;
};

export type TrainingGalleryRecord = {
  id: string;
  collectionName: string;
  images: string[];
  createdAt: string;
};

export type TrainingGalleryInput = {
  collectionName: string;
  images: string[];
};

export type TrainingHeroRecord = {
  id: string;
  title: string;
  descriptions: string[];
  createdAt: string;
};

export type TrainingHeroInput = {
  title: string;
  descriptions: string[];
};

export type TechnicalConsultantRecord = {
  id: string;
  title: string;
  description: string;
  images: string[];
  createdAt: string;
};

export type TechnicalConsultantInput = {
  title: string;
  description: string;
  images: string[];
};

export type MachineRentalRecord = {
  id: string;
  title: string;
  descriptions: string[];
  createdAt: string;
};

export type MachineRentalInput = {
  title: string;
  descriptions: string[];
};

export type MachineRentalGalleryRecord = {
  id: string;
  collectionName: string;
  images: string[];
  createdAt: string;
};

export type MachineRentalGalleryInput = {
  collectionName: string;
  images: string[];
};

export async function getTrainingSessions(): Promise<TrainingSessionRecord[]> {
  const ref = collection(db, "trainingSessions");
  const q = query(ref, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((item) => {
    const data = item.data();
    const legacyDate = typeof data.date === "string" ? data.date : "";

    return {
      id: item.id,
      title: typeof data.title === "string" ? data.title : "",
      startDate:
        typeof data.startDate === "string"
          ? data.startDate
          : legacyDate,
      endDate:
        typeof data.endDate === "string"
          ? data.endDate
          : legacyDate,
      time: typeof data.time === "string" ? data.time : "",
      location: typeof data.location === "string" ? data.location : "",
      createdAt: typeof data.createdAt === "string" ? data.createdAt : "",
    };
  });
}

export async function createTrainingSession(input: TrainingSessionInput) {
  await addDoc(collection(db, "trainingSessions"), {
    ...input,
    createdAt: new Date().toISOString(),
  });
}

export async function updateTrainingSession(id: string, input: TrainingSessionInput) {
  await updateDoc(doc(db, "trainingSessions", id), input);
}

export async function deleteTrainingSession(id: string) {
  await deleteDoc(doc(db, "trainingSessions", id));
}

export async function getTrainingGalleries(): Promise<TrainingGalleryRecord[]> {
  const ref = collection(db, "trainingGalleries");
  const q = query(ref, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((item) => {
    const data = item.data();
    return {
      id: item.id,
      collectionName: typeof data.collectionName === "string" ? data.collectionName : "",
      images: Array.isArray(data.images)
        ? data.images.filter((url): url is string => typeof url === "string")
        : [],
      createdAt: typeof data.createdAt === "string" ? data.createdAt : "",
    };
  });
}

export async function createTrainingGallery(input: TrainingGalleryInput) {
  await addDoc(collection(db, "trainingGalleries"), {
    ...input,
    createdAt: new Date().toISOString(),
  });
}

export async function updateTrainingGallery(id: string, input: TrainingGalleryInput) {
  await updateDoc(doc(db, "trainingGalleries", id), input);
}

export async function deleteTrainingGallery(id: string) {
  await deleteDoc(doc(db, "trainingGalleries", id));
}

export async function getTrainingHeroes(): Promise<TrainingHeroRecord[]> {
  const ref = collection(db, "trainingHeroes");
  const q = query(ref, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((item) => {
    const data = item.data();
    const descriptionsRaw = data.descriptions ?? data.description;
    const descriptions = Array.isArray(descriptionsRaw)
      ? descriptionsRaw.filter((value): value is string => typeof value === "string")
      : typeof descriptionsRaw === "string" && descriptionsRaw.trim()
        ? [descriptionsRaw.trim()]
        : [];

    return {
      id: item.id,
      title: typeof data.title === "string" ? data.title : "",
      descriptions,
      createdAt: typeof data.createdAt === "string" ? data.createdAt : "",
    };
  });
}

export async function createTrainingHero(input: TrainingHeroInput) {
  await addDoc(collection(db, "trainingHeroes"), {
    ...input,
    createdAt: new Date().toISOString(),
  });
}

export async function updateTrainingHero(id: string, input: TrainingHeroInput) {
  await updateDoc(doc(db, "trainingHeroes", id), input);
}

export async function deleteTrainingHero(id: string) {
  await deleteDoc(doc(db, "trainingHeroes", id));
}

export async function getTechnicalConsultants(): Promise<TechnicalConsultantRecord[]> {
  const ref = collection(db, "technicalConsultants");
  const q = query(ref, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((item) => {
    const data = item.data();
    return {
      id: item.id,
      title: typeof data.title === "string" ? data.title : "",
      description: typeof data.description === "string" ? data.description : "",
      images: Array.isArray(data.images)
        ? data.images.filter((url): url is string => typeof url === "string")
        : [],
      createdAt: typeof data.createdAt === "string" ? data.createdAt : "",
    };
  });
}

export async function createTechnicalConsultant(input: TechnicalConsultantInput) {
  await addDoc(collection(db, "technicalConsultants"), {
    ...input,
    createdAt: new Date().toISOString(),
  });
}

export async function updateTechnicalConsultant(id: string, input: TechnicalConsultantInput) {
  await updateDoc(doc(db, "technicalConsultants", id), input);
}

export async function deleteTechnicalConsultant(id: string) {
  await deleteDoc(doc(db, "technicalConsultants", id));
}

export async function getMachineRentals(): Promise<MachineRentalRecord[]> {
  const ref = collection(db, "machineRentals");
  const q = query(ref, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((item) => {
    const data = item.data();
    const descriptionsRaw = data.descriptions ?? data.description;
    const descriptions = Array.isArray(descriptionsRaw)
      ? descriptionsRaw.filter((value): value is string => typeof value === "string")
      : typeof descriptionsRaw === "string" && descriptionsRaw.trim()
        ? [descriptionsRaw.trim()]
        : [];

    return {
      id: item.id,
      title: typeof data.title === "string" ? data.title : "",
      descriptions,
      createdAt: typeof data.createdAt === "string" ? data.createdAt : "",
    };
  });
}

export async function createMachineRental(input: MachineRentalInput) {
  await addDoc(collection(db, "machineRentals"), {
    ...input,
    createdAt: new Date().toISOString(),
  });
}

export async function updateMachineRental(id: string, input: MachineRentalInput) {
  await updateDoc(doc(db, "machineRentals", id), input);
}

export async function deleteMachineRental(id: string) {
  await deleteDoc(doc(db, "machineRentals", id));
}

export async function getMachineRentalGalleries(): Promise<MachineRentalGalleryRecord[]> {
  const ref = collection(db, "machineRentalGalleries");
  const q = query(ref, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((item) => {
    const data = item.data();
    return {
      id: item.id,
      collectionName: typeof data.collectionName === "string" ? data.collectionName : "",
      images: Array.isArray(data.images)
        ? data.images.filter((url): url is string => typeof url === "string")
        : [],
      createdAt: typeof data.createdAt === "string" ? data.createdAt : "",
    };
  });
}

export async function createMachineRentalGallery(input: MachineRentalGalleryInput) {
  await addDoc(collection(db, "machineRentalGalleries"), {
    ...input,
    createdAt: new Date().toISOString(),
  });
}

export async function updateMachineRentalGallery(id: string, input: MachineRentalGalleryInput) {
  await updateDoc(doc(db, "machineRentalGalleries", id), input);
}

export async function deleteMachineRentalGallery(id: string) {
  await deleteDoc(doc(db, "machineRentalGalleries", id));
}
