import { useEffect, useState } from "react";
import axios from "axios";

interface CareerSubmission {
  id: string;
  name: string;
  phone: string;
  email: string;
  role: string;
  applied_at?: string; 
}

const CareerSubmissions = () => {
  const [submissions, setSubmissions] = useState<CareerSubmission[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  useEffect(() => {
    const fetchSubmissions = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://xtmx-career-backend-3.onrender.com/resumes");
        if (Array.isArray(response.data)) {
          setSubmissions(response.data);
        } else {
          setError("Invalid API response.");
        }
      } catch (error) {
        setError("Failed to fetch career submissions.");
      } finally {
        setLoading(false);
      }
    };
    fetchSubmissions();
  }, []);

  const handleDownload = async (resumeId: string, userName: string) => {
    console.log("Downloading resume:", resumeId);
    try {
      const response = await axios.get(
        `https://xtmx-career-backend-3.onrender.com/download/${resumeId}`,
        { responseType: "blob" }
      );

      if (!response.data) {
        alert("No data received from server.");
        return;
      }

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `resume_${userName}.pdf`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading the resume:", error);
      alert("Failed to download resume.");
    }
  };

  const handleDownloadExcel = () => {
    window.open("https://xtmx-career-backend-3.onrender.com/career/excel", "_blank");
  };

  // Pagination Logic
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const currentRecords = submissions.slice(firstIndex, lastIndex);
  const totalPages = Math.max(1, Math.ceil(submissions.length / recordsPerPage));

  return (
    <section className="p-4 text-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg sm:text-2xl font-semibold">📄 Career Submissions</h2>
        <button
          onClick={handleDownloadExcel}
          className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-md text-sm sm:text-base"
        >
          📥 Download Applications Sheet
        </button>
      </div>

      {loading ? (
        <p className="text-center">⏳ Loading...</p>
      ) : error ? (
        <p className="text-red-400 text-center">{error}</p>
      ) : submissions.length === 0 ? (
        <p className="text-center">No submissions found.</p>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-700 text-xs sm:text-base">
              <thead>
                <tr className="bg-gray-800">
                  <th className="border border-gray-700 px-2 sm:px-4 py-2">Name</th>
                  <th className="border border-gray-700 px-2 sm:px-4 py-2">Phone</th>
                  <th className="border border-gray-700 px-2 sm:px-4 py-2">Email</th>
                  <th className="border border-gray-700 px-2 sm:px-4 py-2">Role</th>
                  <th className="border border-gray-700 px-2 sm:px-4 py-2">Resume</th>
                  <th className="border border-gray-700 px-2 sm:px-4 py-2">Applied Date</th>
                </tr>
              </thead>
              <tbody>
                {currentRecords.map((submission) => (
                  <tr key={submission.id} className="bg-gray-800 hover:bg-gray-700">
                    <td className="border border-gray-700 px-2 sm:px-4 py-2 text-center">
                      {submission.name.slice(0, 10)}
                    </td>
                    <td className="border border-gray-700 px-2 sm:px-4 py-2 text-center">
                      {submission.phone.slice(0, 10)}
                    </td>
                    <td className="border border-gray-700 px-2 sm:px-4 py-2">{submission.email}</td>
                    <td className="border border-gray-700 px-2 sm:px-4 py-2">
                      {submission.role.match(/.{1,20}/g)?.map((line, index) => (
                        <span key={index} className="block">{line}</span>
                      ))}
                    </td>
                    <td className="border border-gray-700 px-2 sm:px-4 py-2">
                      <div className="flex flex-col sm:flex-row sm:gap-2 items-center">
                        <button
                          onClick={() => handleDownload(submission.id, submission.name)}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-2 sm:px-4 py-1 rounded text-xs sm:text-sm w-full sm:w-auto"
                        >
                          Download
                        </button>
                        <a
                          href={`https://xtmx-career-backend-3.onrender.com/resume/view/${submission.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-green-500 hover:bg-green-600 text-white px-2 sm:px-4 py-1 rounded text-xs sm:text-sm w-full sm:w-auto text-center"
                        >
                          View
                        </a>
                      </div>
                    </td>
                    <td className="border border-gray-700 px-2 sm:px-4 py-2 text-center">
                      {submission.applied_at
                        ? new Date(submission.applied_at).toLocaleDateString()
                        : "N/A"}
                      <br />
                      {submission.applied_at
                        ? new Date(submission.applied_at).toLocaleTimeString()
                        : ""}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center mt-4 gap-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-md text-white ${currentPage === 1 ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
            >
              ⬅️ Previous
            </button>
            <span className="text-white">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-md text-white ${currentPage === totalPages ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
            >
              Next ➡️
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default CareerSubmissions;
