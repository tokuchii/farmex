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

export type TestimonialRecord = {
  id: string;
  name: string;
  content: string;
  date: string;
  location: string;
  position: string;
  variety: string;
  image: string;
  createdAt: string;
};

export type TestimonialInput = {
  name: string;
  content: string;
  date: string;
  location: string;
  position: string;
  variety: string;
  image: string;
};

export async function getTestimonials(): Promise<TestimonialRecord[]> {
  const testimonialsRef = collection(db, "testimonials");
  const testimonialsQuery = query(testimonialsRef, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(testimonialsQuery);

  return snapshot.docs.map((testimonialDoc) => {
    const data = testimonialDoc.data();
    return {
      id: testimonialDoc.id,
      name: typeof data.name === "string" ? data.name : "",
      content: typeof data.content === "string" ? data.content : "",
      date: typeof data.date === "string" ? data.date : "",
      location: typeof data.location === "string" ? data.location : "",
      position: typeof data.position === "string" ? data.position : "",
      variety: typeof data.variety === "string" ? data.variety : "",
      image: typeof data.image === "string" ? data.image : "",
      createdAt: typeof data.createdAt === "string" ? data.createdAt : "",
    };
  });
}

export async function createTestimonial(input: TestimonialInput) {
  const testimonialsRef = collection(db, "testimonials");
  await addDoc(testimonialsRef, {
    ...input,
    createdAt: new Date().toISOString(),
  });
}

export async function updateTestimonial(id: string, input: TestimonialInput) {
  await updateDoc(doc(db, "testimonials", id), input);
}

export async function deleteTestimonial(id: string) {
  await deleteDoc(doc(db, "testimonials", id));
}
