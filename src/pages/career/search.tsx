import React, { useState } from "react";

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
    description: "Role: React Developer (1.5 - 3 years experience)  We seek a React Developer with strong frontend skills and knowledge of REST APIs, SQL databases, and backend concepts. Candidates with experience in GCP deployments and any exposure to Salesforce are preferred. You'll build and optimize high-performance React applications, integrating with backend services. Strong JavaScript, React, and state management skills are required."

  },
  
  {
    id: "6652109",
    title: "Backend Engineer with LLM Experience",
    location: "India - Bengaluru",
    description: "Backend Engineer (1+ Years, Onsite – Mangalore/Bangalore) Looking for a Backend Engineer with Python, REST APIs, SQL databases, and Git experience. Work on AI & LLM technologies in a full-time onsite role with US time overlap. Competitive salary, growth opportunities, and an innovative team environment.",
  },
  
];

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("India - Bengaluru");
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.id.includes(searchTerm)
  );

  return (
    <div className="w-full bg-[#080412] text-white">
      {/* Hero Section */}
      <section className="bg-[#080412] text-white">
        {/* Hero Image with Parallax Effect */}
        <div
          className="relative bg-fixed bg-center bg-cover h-[750px] md:h-[550px] sm:h-[450px] flex items-center -mt-8"
          style={{
            backgroundImage: "url('/images/career.png')",
          }}
        >
          {/* Overlay Image */}
          <img
            src="/images/about-us(Cultures)/learnmore/thework/over.png"
            alt="Overlay Image"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-110"
          />

          {/* Heading */}
          <h1 className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl md:text-5xl font-bold text-center">
            Begin your xTransMatrix journey <br />
          </h1>
        </div>
      </section>
      
      <div className="p-6 bg-black text-white min-h-screen px-8 md:px-20 lg:px-40">
        <div className="text-center p-4 mb-6">
          <h1 className="text-xl font-bold text-white">ALERT: BE AWARE OF FRAUDULENT JOB OFFERS</h1>
          <p className="text-sm text-gray-200 mt-2">
            We have been informed of several scams targeting the public, involving fraudsters pretending to be from Capco or claiming an affiliation with Capco. To protect yourself, please note that Capco recruiters will only contact you through official channels. We strongly advise you to verify the identity of anyone reaching out to you and exercise caution before engaging in any communication that does not follow these official channels.
          </p>
        </div>
        <br/>
        <br/>

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

        <h2 className="text-xl font-bold mb-4">{filteredJobs.length} Job(s) Found</h2>
        <ul>
          {filteredJobs.map((job) => (
            <li key={job.id} className="border-b p-4 bg-gray-900 rounded-lg mb-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-white">{job.title}</h3>
                  <p className="text-sm text-gray-400">{job.location} | Job ID {job.id}</p>
                </div>
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded"
                  onClick={() => setSelectedJobId(job.id === selectedJobId ? null : job.id)}
                >
                  Apply Now
                </button>
              </div>

              {selectedJobId === job.id && (
                <div className="mt-6 p-4 border rounded shadow-lg bg-gray-800 text-white">
                  <h2 className="text-2xl font-bold">{job.title}</h2>
                  <p className="text-gray-400">{job.location}</p>
                  <p className="mt-4">{job.description}</p>

                  <h3 className="mt-6 text-lg font-bold">Application Form</h3>
                  <form className="mt-4">
                    <input type="text" placeholder="Your Name" className="border p-2 w-full mb-2 bg-gray-900 text-white" required />
                    <input type="email" placeholder="Your Email" className="border p-2 w-full mb-2 bg-gray-900 text-white" required />
                    <input type="file" className="border p-2 w-full mb-2 bg-gray-900 text-white" required />
                    <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
                      Submit Application
                    </button>
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
