import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";

import styles from "./tailwind.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import React, { useEffect } from "react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "icon", href: "/group30.png" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <link rel="preload" as="image" href="/bgnews.png" />
        <link rel="preload" as="image" href="/newbgevents.png" />
        <link rel="preload" as="image" href="/productbg1.png" />
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
  const location = useLocation();

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
