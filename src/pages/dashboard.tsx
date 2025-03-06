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
    
    const enteredId = adminId.trim();
    const enteredPassword = adminPassword.trim();

    if (enteredId === ADMIN_CREDENTIALS.id && enteredPassword === ADMIN_CREDENTIALS.password) {
      console.log("✅ Login successful!");
      setIsAuthenticated(true);
      setError("");
      fetchContacts();
    } else {
      setError(" Invalid Admin ID or Password.");
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
      setError(" Failed to fetch contact details.");
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
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center p-6">
      {!isAuthenticated ? (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-sm">
          <h2 className="text-2xl font-bold text-center mb-4">Admin Login</h2>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="text"
              placeholder="Admin ID"
              value={adminId}
              onChange={(e) => setAdminId(e.target.value)}
              className="w-full p-3 bg-gray-700 text-white rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              className="w-full p-3 bg-gray-700 text-white rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="w-full p-3 bg-blue-600 rounded-md font-semibold hover:bg-blue-500 transition"
            >
              Login
            </button>
          </form>
        </div>
      ) : (
        <div className="w-full max-w-5xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold"> Contact Submissions</h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 rounded-md hover:bg-red-500 transition"
            >
              Logout
            </button>
          </div>

          {loading ? (
            <p className="text-center">⏳ Loading...</p>
          ) : error ? (
            <p className="text-red-500 text-center">{error}</p>
          ) : Array.isArray(contacts) && contacts.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-700">
                <thead>
                  <tr className="bg-[#2D2352]">
                    <th className="border border-gray-700 px-4 py-2">Name</th>
                    <th className="border border-gray-700 px-4 py-2">Email</th>
                    <th className="border border-gray-700 px-4 py-2">Message</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((contact, index) => (
                    <tr key={index} className="bg-gray-800 hover:bg-gray-700">
                      <td className="border border-gray-700 px-4 py-2">{contact.name}</td>
                      <td className="border border-gray-700 px-4 py-2">{contact.email}</td>
                      <td className="border border-gray-700 px-4 py-2">{contact.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-center">⚠️ No contact submissions yet.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
