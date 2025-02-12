import React, { useEffect, useState } from "react";
import { Loader2, RefreshCw } from "lucide-react"; // Using lucide-react for icons

const Loader: React.FC = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white">
      {/* Spinning Icon */}
      <div className="relative">
        <Loader2 className="h-24 w-24 animate-spin text-white" />
        <div className="absolute inset-0 flex items-center justify-center">
          <RefreshCw className="h-12 w-12 text-purple-400 animate-pulse" />
        </div>
      </div>

      {/* Loading Text */}
      <p className="mt-6 text-2xl md:text-3xl font-semibold animate-bounce">
        {isOffline ? "Reconnecting..." : "Loading..."}
      </p>
    </div>
  );
};

export default Loader;
