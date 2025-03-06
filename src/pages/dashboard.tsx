import { useState } from "react";
import axios from "axios";

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

  // Handle login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (adminId === ADMIN_CREDENTIALS.id && adminPassword === ADMIN_CREDENTIALS.password) {
      console.log("✅ Login successful!");
      setIsAuthenticated(true);
      setError("");
      fetchContacts();
    } else {
      setError("❌ Invalid Admin ID or Password.");
    }
  };

  // Fetch contact details
  const fetchContacts = async () => {
    setLoading(true);
    setError("");

    try {
      console.log("🔄 Fetching contacts...");
      const response = await axios.get("https://xtmx-career-backend-3.onrender.com/submissions");

      console.log(" API Response:", response.data);

      if (!response.data || !Array.isArray(response.data.submissions)) {
        setError("⚠️ Invalid data format received.");
        setContacts([]);
      } else if (response.data.submissions.length === 0) {
        setError("⚠️ No contact submissions found.");
        setContacts([]);
      } else {
        console.log(" Contacts fetched:", response.data.submissions);
        setContacts(response.data.submissions);
      }
    } catch (err) {
      console.error(" Error fetching contacts:", err);
      setError("❌ Failed to fetch contact details.");
    } finally {
      setLoading(false);
    }
  };

  // Logout
  const handleLogout = () => {
    console.log("🚪 Logging out...");
    setIsAuthenticated(false);
    setAdminId("");
    setAdminPassword("");
    setContacts([]);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-purple-700 via-blue-500 to-green-400 p-6">
      {!isAuthenticated ? (
        <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-lg shadow-xl w-full max-w-sm">
          <h2 className="text-3xl font-bold text-center text-white">🔐 Admin Login</h2>
          {error && <p className="text-red-400 text-center">{error}</p>}
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="text"
              placeholder="Admin ID"
              value={adminId}
              onChange={(e) => setAdminId(e.target.value)}
              className="w-full p-3 bg-white bg-opacity-20 text-white rounded-md outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              className="w-full p-3 bg-white bg-opacity-20 text-white rounded-md outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <button
              type="submit"
              className="w-full p-3 bg-yellow-500 text-white rounded-md font-semibold hover:bg-yellow-400 transition"
            >
              Login 🚀
            </button>
          </form>
        </div>
      ) : (
        <div className="w-full max-w-5xl p-6 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-xl">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold text-white">📂 Contact Submissions</h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white rounded-md font-semibold hover:bg-red-500 transition"
            >
              Logout 🚪
            </button>
          </div>

          {loading ? (
            <p className="text-center text-white text-lg">⏳ Loading...</p>
          ) : error ? (
            <p className="text-red-400 text-center">{error}</p>
          ) : Array.isArray(contacts) && contacts.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-700 bg-white bg-opacity-10">
                <thead>
                  <tr className="bg-gradient-to-r from-pink-600 to-purple-500 text-white">
                    <th className="border border-gray-700 px-4 py-3">👤 Name</th>
                    <th className="border border-gray-700 px-4 py-3">📧 Email</th>
                    <th className="border border-gray-700 px-4 py-3">💬 Message</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((contact, index) => (
                    <tr key={index} className="bg-gray-800 hover:bg-gray-700 text-white">
                      <td className="border border-gray-700 px-4 py-3">{contact.name}</td>
                      <td className="border border-gray-700 px-4 py-3">{contact.email}</td>
                      <td className="border border-gray-700 px-4 py-3">{contact.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-center text-white text-lg">⚠️ No contact submissions yet.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
