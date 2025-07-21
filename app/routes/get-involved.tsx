import { useEffect, useState } from "react";

export function meta() {
  return [
    { title: "FarmEx - Revolutionary Agricultural Technology" },
    { name: "description", content: "Transform your farming operations with FarmEx's cutting-edge agricultural technology solutions. Increase yields, reduce costs, and farm smarter." },
  ];
}

export default function GetInvolved() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="relative w-full h-auto overflow-hidden">
        {isClient && (
          <video
            src="/rice.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <img src="/welcome.png" alt="Welcome" className="max-w-4xl w-full h-auto" />
        </div>
      </div>
      {/* Main Content */}
      <main className="p-8 relative z-20">
        <h1 className="text-2xl font-bold mb-4">About Us</h1>
        <p>This is the About Us page. Add your content here.</p>
      </main>
    </div>
  );
}
