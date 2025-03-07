import { useState, useEffect } from "react";
import axios from "axios";

const ContactSubmissions = () => {
  const [contacts, setContacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get("https://xtmx-career-backend-3.onrender.com/submissions");
      if (!response.data || !Array.isArray(response.data)) {
        setError("⚠️ Invalid data format received.");
        setContacts([]);
      } else {
        setContacts(response.data);
      }
    } catch (err) {
      setError("❌ Failed to fetch contact details.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadExcel = () => {
    window.open("https://xtmx-career-backend-3.onrender.com/contacts-excel", "_blank");
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = contacts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(contacts.length / itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl md:text-2xl font-bold text-white">📧 Contact Submissions</h2>
        <button
          onClick={handleDownloadExcel}
          className="px-3 md:px-4 py-2 bg-green-600 text-white rounded-md font-semibold hover:bg-green-500 transition text-sm md:text-base"
        >
          📥 Download Contacts
        </button>
      </div>

      {loading ? (
        <p className="text-center text-white text-lg">⏳ Loading...</p>
      ) : error ? (
        <p className="text-red-400 text-center">{error}</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-700 bg-gray-800 text-white text-sm md:text-base">
            <thead>
              <tr className="bg-gray-700 text-white text-xs md:text-sm">
                <th className="border border-gray-600 px-2 md:px-4 py-2 md:py-3">👤 Name</th>
                <th className="border border-gray-600 px-2 md:px-4 py-2 md:py-3">📧 Email</th>
                <th className="border border-gray-600 px-2 md:px-4 py-2 md:py-3">💬 Message</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((contact, index) => (
                <tr key={index} className="bg-gray-800 hover:bg-gray-700 text-white">
                  <td className="border border-gray-600 px-2 md:px-4 py-2 md:py-3">{contact.name}</td>
                  <td className="border border-gray-600 px-2 md:px-4 py-2 md:py-3">{contact.email}</td>
                  <td className="border border-gray-600 px-2 md:px-4 py-2 md:py-3">{contact.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="flex justify-center mt-4 space-x-2">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md font-semibold ${currentPage === 1 ? "bg-gray-600 text-gray-400 cursor-not-allowed" : "bg-yellow-500 text-white hover:bg-yellow-400"}`}
        >
          ⬅️ Previous
        </button>
        <span className="px-4 py-2 text-white font-semibold">Page {currentPage} of {totalPages}</span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-md font-semibold ${currentPage === totalPages ? "bg-gray-600 text-gray-400 cursor-not-allowed" : "bg-yellow-500 text-white hover:bg-yellow-400"}`}
        >
          Next ➡️
        </button>
      </div>
    </div>
  );
};

export default ContactSubmissions;