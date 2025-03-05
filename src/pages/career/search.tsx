import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Client } from "filestack-js";

const filestackClient = new Client("AADdJbQt2TkSh8eXwq4Boz");

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
  const [phone, setPhone] = useState(""); // Added phone field
  const [email, setEmail] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.id.toString().includes(searchTerm)
  );

  const handleFileUpload = async () => {
    if (resumeFile) {
      try {
        const result = await filestackClient.upload(resumeFile);
        return result.url;
      } catch (error) {
        console.error("Error uploading file:", error);
        alert("Failed to upload resume. Please try again.");
        return null;
      }
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!resumeFile) {
      alert("Please upload a resume");
      return;
    }

    setLoading(true);

    try {
      const resumeURL = await handleFileUpload();
      if (resumeURL) {
        const selectedJob = jobs.find((job) => job.id === selectedJobId);

        // Send job application
        await emailjs.send(
          "service_pn4ti6c",
          "template_gnlijd2",
          {
            name,
            phone, // Send phone number in email
            email,
            resume_url: resumeURL,
            job_title: selectedJob?.title || "Unknown Job",
          },
          "2btEXxVRTaaq9YcDO"
        );

        // Auto-reply to applicant
        await emailjs.send(
          "service_pn4ti6c",
          "template_ag315q8",
          {
            name,
            email,
            job_title: selectedJob?.title || "Unknown Job",
          },
          "2btEXxVRTaaq9YcDO"
        );

        alert("Application submitted! You will receive a confirmation email.");
        setName("");
        setPhone(""); // Reset phone field
        setEmail("");
        setResumeFile(null);
      }
    } catch (error) {
      alert("Error submitting application. Please try again.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-[#080412] text-white">
      {/* Hero Section */}
      <section className="bg-[#080412] text-white">
        <div
          className="relative bg-fixed bg-center bg-cover h-[750px] md:h-[550px] sm:h-[450px] flex items-center -mt-8"
          style={{ backgroundImage: "url('/images/career.png')" }}
        >
          <img
            src="/images/about-us(Cultures)/learnmore/thework/over.png"
            alt="Overlay Image"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-110"
          />
          <h1 className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl md:text-5xl font-bold text-center">
            Begin your xTransMatrix journey
          </h1>
        </div>
      </section>

      {/* Alert Message - Moved inside job container for alignment */}
      <div className="p-6 bg-black text-white min-h-screen px-8 md:px-20 lg:px-40">
        <div className="text-center p-4 mb-6 border border-red-600 rounded-md bg-gray-800">
          <h1 className="text-xl font-bold text-red-500">
            ALERT: BE AWARE OF FRAUDULENT JOB OFFERS
          </h1>
          <p className="text-sm text-gray-200 mt-2">
          We have been informed of several scams targeting the public, involving fraudsters pretending to be from xTransMatrix or claiming an affiliation with xTransMatrix. To protect yourself, please note that xTransMatrix recruiters will only contact you through official channels. We strongly advise you to verify the identity of anyone reaching out to you and exercise caution before engaging in any communication that does not follow these official channels.
          </p>
        </div>

        {/* Search Bar */}
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

        {/* Job Listings */}
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
