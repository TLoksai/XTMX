import React, { useEffect, useState } from "react";

const Loading: React.FC = () => {
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
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900 text-white">
      <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-blue-500"></div>
      <p className="mt-4 text-lg font-semibold">
        {isOffline ? "Reconnecting..." : "Loading..."}
      </p>
    </div>
  );
};

export default Loading;
