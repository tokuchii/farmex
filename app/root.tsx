import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
} from "react-router";
import type { LinksFunction } from "react-router";
import { data } from "react-router";

import styles from "./tailwind.css?url";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import React, { useEffect } from "react";


export const links: LinksFunction = () => [
  { rel: "preload", as: "style", href: styles },
  { rel: "stylesheet", href: styles },
  { rel: "preload", as: "image", href: "/group30.png" },
  { rel: "icon", href: "/group30.png" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  { rel: "preload", as: "style", href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" },
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" },
  { rel: "preload", as: "image", href: "/bgnews.png" },
  { rel: "preload", as: "image", href: "/newbgevents.png" },
  { rel: "preload", as: "image", href: "/productbg1.png" },
];

export async function loader() {
  return data({
    firebaseConfig: {
      apiKey: process.env.VITE_FIREBASE_API_KEY || "",
      authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN || "",
      projectId: process.env.VITE_FIREBASE_PROJECT_ID || "",
      storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET || "",
      messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
      appId: process.env.VITE_FIREBASE_APP_ID || "",
    },
  });
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const { firebaseConfig } = useLoaderData<typeof loader>();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location]);

  useEffect(() => {
    import("~/lib/firebase").then(({ initFirebase }) => {
      initFirebase(firebaseConfig);
    });
  }, [firebaseConfig]);

  return (
    <>
      {!location.pathname.startsWith("/admin") && <Navbar /> }
      <Outlet />
      { !location.pathname.startsWith("/admin") && <Footer /> }
    </>
  );
}
