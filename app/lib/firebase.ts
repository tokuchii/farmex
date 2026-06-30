import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";

let app: FirebaseApp | null = null;
let auth: Auth | null = null;
let db: Firestore | null = null;

export function initFirebase(config: {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}) {
  if (typeof window === "undefined") return;
  if (app) return;
  if (!config.apiKey) return;

  app = getApps().length > 0 ? getApps()[0]! : initializeApp(config);
  auth = getAuth(app);
  db = getFirestore(app);
}

export { app, auth, db };
export default app;
