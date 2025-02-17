// src/pages/NotFound.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-xl font-medium mt-4 text-white">Oops! Page not found.</p>
        <p className="mt-2 text-gray-400">The page you are looking for does not exist.</p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-2 text-black bg-yellow-400 rounded hover:bg-yellow-500 transition-all"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
