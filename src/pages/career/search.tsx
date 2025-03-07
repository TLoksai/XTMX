import React, { useState } from "react";

const API_BASE_URL = "https://xtmx-career-backend-3.onrender.com";

interface Job {
  id: string;
  title: string;
  location: string;
  description: string;
}

const jobs: Job[] = [
  {
    id: "6596338",
    title: "React Developer (Frontend-Focused with Full-Stack Awareness)",
    location: "India - Bengaluru",
    description:
      "Role: React Developer (1.5 - 3 years experience) We seek a React Developer with strong frontend skills and knowledge of REST APIs, SQL databases, and backend concepts.",
  },
  {
    id: "6652109",
    title: "Backend Engineer with LLM Experience",
    location: "India - Bengaluru",
    description:
      "Backend Engineer (1+ Years, Onsite – Mangalore/Bangalore) Looking for a Backend Engineer with Python, REST APIs, SQL databases, and Git experience.",
  },
];

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("India - Bengaluru");
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.id.toString().includes(searchTerm)
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!resumeFile) {
      alert("Please upload a resume");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("role", jobs.find((job) => job.id === selectedJobId)?.title || "Unknown");
    formData.append("resume", resumeFile);

    try {
      const response = await fetch(`${API_BASE_URL}/upload/`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit application");
      }

      const data = await response.json();
      alert("Application submitted successfully!");
      setName("");
      setPhone("");
      setEmail("");
      setResumeFile(null);
    } catch (error) {
      alert("Error submitting application. Please try again.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-[#080412] text-white">
      <section className="bg-[#080412] text-white">
        <div
          className="relative bg-fixed bg-center bg-cover h-[750px] md:h-[550px] sm:h-[450px] flex items-center -mt-8"
          style={{ backgroundImage: "url('/images/career.png')" }}
        >
          <h1 className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl md:text-5xl font-bold text-center">
            Begin your xTransMatrix journey
          </h1>
        </div>
      </section>

      <div className="p-6 bg-black text-white min-h-screen px-8 md:px-20 lg:px-40">
        <div className="text-center p-4 mb-6 border border-red-600 rounded-md bg-gray-800">
          <h1 className="text-xl font-bold text-red-500">
            ALERT: BE AWARE OF FRAUDULENT JOB OFFERS
          </h1>
          <p className="text-sm text-gray-200 mt-2">
            We have been informed of several scams targeting the public, involving fraudsters pretending to be from xTransMatrix. Please verify the identity of anyone reaching out to you.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            type="text"
            placeholder="Enter keyword or job ID"
            className="border p-2 w-full md:w-1/2 bg-gray-800 text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="border p-2 bg-gray-800 text-white"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option>India - Bengaluru</option>
            <option>India - Mangalore</option>
          </select>
        </div>

        <ul>
          {filteredJobs.map((job) => (
            <li key={job.id} className="border-b p-4 bg-gray-900 rounded-lg mb-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-white">{job.title}</h3>
                  <p className="text-sm text-gray-400">
                    {job.location} | Job ID {job.id}
                  </p>
                </div>
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded"
                  onClick={() => setSelectedJobId(selectedJobId === job.id ? null : job.id)}
                >
                  {selectedJobId === job.id ? "Close" : "Apply Now"}
                </button>
              </div>

              {selectedJobId === job.id && (
                <div className="mt-6 p-4 border rounded shadow-lg bg-gray-800 text-white">
                  <form className="mt-4" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Your Name" className="border p-2 w-full mb-2 bg-gray-900 text-white" value={name} onChange={(e) => setName(e.target.value)} required />
                    <input type="text" placeholder="Phone Number" className="border p-2 w-full mb-2 bg-gray-900 text-white" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    <input type="email" placeholder="Your Email" className="border p-2 w-full mb-2 bg-gray-900 text-white" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="file" className="border p-2 w-full mb-2 bg-gray-900 text-white" onChange={(e) => setResumeFile(e.target.files?.[0] || null)} required />
                    <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded" disabled={loading}>{loading ? "Submitting..." : "Submit Application"}</button>
                  </form>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;