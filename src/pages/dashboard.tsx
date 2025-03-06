import { useState } from "react";
import axios from "axios";
import CareerSubmissions from "./CareerSubmissions";

const ADMIN_CREDENTIALS = {
  id: "xtmx",
  password: "xtmx@123",
};

const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminId, setAdminId] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [contacts, setContacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("contacts");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminId === ADMIN_CREDENTIALS.id && adminPassword === ADMIN_CREDENTIALS.password) {
      setIsAuthenticated(true);
      setError("");
      fetchContacts();
    } else {
      setError(" Invalid Admin ID or Password.");
    }
  };

  const fetchContacts = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get("https://xtmx-career-backend-3.onrender.com/submissions");
      if (!response.data || !Array.isArray(response.data.submissions)) {
        setError("⚠️ Invalid data format received.");
        setContacts([]);
      } else {
        setContacts(response.data.submissions);
      }
    } catch (err) {
      setError(" Failed to fetch contact details.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setAdminId("");
    setAdminPassword("");
    setContacts([]);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-black p-6">
      {!isAuthenticated ? (
        <div className="bg-gray-900 p-8 rounded-lg shadow-xl w-full max-w-sm">
          <h2 className="text-3xl font-bold text-center text-white">🔐 Admin Login</h2>
          {error && <p className="text-red-400 text-center">{error}</p>}
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="text"
              placeholder="Admin ID"
              value={adminId}
              onChange={(e) => setAdminId(e.target.value)}
              className="w-full p-3 bg-gray-800 text-white rounded-md outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              className="w-full p-3 bg-gray-800 text-white rounded-md outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <button
              type="submit"
              className="w-full p-3 bg-yellow-500 text-white rounded-md font-semibold hover:bg-yellow-400 transition"
            >
              Login 
            </button>
          </form>
        </div>
      ) : (
        <div className="w-full max-w-5xl p-6 bg-gray-900 rounded-lg shadow-xl">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
            <h1 className="text-2xl sm:text-4xl font-bold text-white">📂 Admin Dashboard</h1>
            <button
              onClick={handleLogout}
              className="mt-4 sm:mt-0 px-4 py-2 bg-red-600 text-white rounded-md font-semibold hover:bg-red-500 transition"
            >
              Logout 🚪
            </button>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-4 mb-4">
            <button onClick={() => setActiveTab("contacts")} className={`px-4 py-2 rounded-md font-semibold ${activeTab === "contacts" ? "bg-yellow-500 text-white" : "bg-gray-700 text-gray-300"}`}>
              Contact Submissions 📧
            </button>
            <button onClick={() => setActiveTab("applications")} className={`px-4 py-2 rounded-md font-semibold ${activeTab === "applications" ? "bg-yellow-500 text-white" : "bg-gray-700 text-gray-300"}`}>
              Career Applications 📄
            </button>
          </div>

          {activeTab === "contacts" ? (
            loading ? (
              <p className="text-center text-white text-lg">⏳ Loading...</p>
            ) : error ? (
              <p className="text-red-400 text-center">{error}</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-700 bg-gray-800 text-white">
                  <thead>
                    <tr className="bg-gray-700 text-white text-sm sm:text-base">
                      <th className="border border-gray-600 px-2 sm:px-4 py-2 sm:py-3">👤 Name</th>
                      <th className="border border-gray-600 px-2 sm:px-4 py-2 sm:py-3">📧 Email</th>
                      <th className="border border-gray-600 px-2 sm:px-4 py-2 sm:py-3">💬 Message</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.map((contact, index) => (
                      <tr key={index} className="bg-gray-800 hover:bg-gray-700 text-white text-sm sm:text-base">
                        <td className="border border-gray-600 px-2 sm:px-4 py-2 sm:py-3">{contact.name}</td>
                        <td className="border border-gray-600 px-2 sm:px-4 py-2 sm:py-3">{contact.email}</td>
                        <td className="border border-gray-600 px-2 sm:px-4 py-2 sm:py-3">{contact.message}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          ) : (
            <CareerSubmissions />
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
