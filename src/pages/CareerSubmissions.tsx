import { useEffect, useState } from "react";
import axios from "axios";

interface CareerSubmission {
  user_id: string;  
  name: string;
  phone: string;
  email: string;
  resume_id: string;
}

const CareerSubmissions = () => {
  const [submissions, setSubmissions] = useState<CareerSubmission[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSubmissions = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://xtmx-career-backend-3.onrender.com/resumes/");
        setSubmissions(response.data);
      } catch (error) {
        setError("Failed to fetch career submissions.");
      } finally {
        setLoading(false);
      }
    };
    fetchSubmissions();
  }, []);

  const handleDownload = async (resumeId: string, userId: string) => {
    try {
      const response = await axios.get(
        `https://xtmx-career-backend-3.onrender.com/download/${resumeId}`, 
        { responseType: "blob" }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `resume_${userId}.pdf`); 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading the resume:", error);
      alert("Failed to download resume.");
    }
  };

  return (
    <section className="p-6 bg-gray-900 text-white">
      <h2 className="text-2xl font-semibold text-center mb-6">Career Submissions</h2>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-red-400 text-center">{error}</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-700">
            <thead>
              <tr className="bg-gray-800">
                <th className="border border-gray-700 px-4 py-2">Name</th>
                <th className="border border-gray-700 px-4 py-2">Phone</th>
                <th className="border border-gray-700 px-4 py-2">Email</th>
                <th className="border border-gray-700 px-4 py-2">Resume</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((submission) => (
                <tr key={submission.user_id} className="bg-gray-800 hover:bg-gray-700">
                  <td className="border border-gray-700 px-4 py-2">{submission.name}</td>
                  <td className="border border-gray-700 px-4 py-2">{submission.phone}</td>
                  <td className="border border-gray-700 px-4 py-2">{submission.email}</td>
                  <td className="border border-gray-700 px-4 py-2">
                    <button
                      onClick={() => handleDownload(submission.resume_id, submission.user_id)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded"
                    >
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default CareerSubmissions;
