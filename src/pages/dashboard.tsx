import { useState } from "react";
import ContactSubmissions from "./ContactSubmissions";
import CareerSubmissions from "./CareerSubmissions";

const ADMIN_CREDENTIALS = {
  id: "xtmx",
  password: "xtmx@12345",
};

const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminId, setAdminId] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("contacts");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminId === ADMIN_CREDENTIALS.id && adminPassword === ADMIN_CREDENTIALS.password) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("❌ Invalid Admin ID or Password.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setAdminId("");
    setAdminPassword("");
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-8 bg-gray-900 md:bg-black">
      {!isAuthenticated ? (
        <div className="bg-gray-900 p-10 rounded-lg shadow-xl w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-white">🔐 Admin Login</h2>
          {error && <p className="text-red-400 text-center text-base">{error}</p>}
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="text"
              placeholder="Admin ID"
              value={adminId}
              onChange={(e) => setAdminId(e.target.value)}
              className="w-full p-4 bg-gray-800 text-white rounded-md outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              className="w-full p-4 bg-gray-800 text-white rounded-md outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <button type="submit" className="w-full p-4 bg-yellow-500 text-white rounded-md font-semibold hover:bg-yellow-400 transition">
              Login
            </button>
          </form>
        </div>
      ) : (
        <div className="w-full max-w-6xl p-6 md:p-10 bg-gray-900 rounded-lg shadow-xl">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h1 className="text-2xl md:text-4xl font-bold text-white">📂 Admin Dashboard</h1>
            <button onClick={handleLogout} className="px-4 py-2 bg-red-600 text-white rounded-md font-semibold hover:bg-red-500 transition text-base">
              Logout
            </button>
          </div>
          <div className="flex flex-wrap gap-4 mb-6">
            <button
              onClick={() => setActiveTab("contacts")}
              className={`px-5 py-3 rounded-md font-semibold text-lg ${
                activeTab === "contacts" ? "bg-yellow-500 text-white" : "bg-gray-700 text-gray-300"
              }`}
            >
              Contact Submissions 📧
            </button>
            <button
              onClick={() => setActiveTab("applications")}
              className={`px-5 py-3 rounded-md font-semibold text-lg ${
                activeTab === "applications" ? "bg-yellow-500 text-white" : "bg-gray-700 text-gray-300"
              }`}
            >
              Job Applications 📄
            </button>
          </div>

          {activeTab === "contacts" ? <ContactSubmissions /> : <CareerSubmissions />}
        </div>
      )}
    </div>
  );
};

export default Dashboard;