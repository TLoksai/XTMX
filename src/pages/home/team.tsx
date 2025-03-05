import React from "react";

const teamMembers = [
  { name: "Vikas Uppal", title: "Strategy, Sales & Consulting", image: "/images/team/vikas.png" },
  { name: "Anupam K", title: "Delivery & Ops Excellence", image: "/images/team/anupam1.png" },
  { name: "Prasanna Patel", title: "Sales, Finance & Admin", image: "/images/team/prasanna.png" },
  { name: "Dr K Johsil", title: "Partnership", image: "/images/team/joshil.png" },
  { name: "Dr Akshay SP", title: "AI risk & governance Head", image: "/images/team/akshay.png" },
  { name: "Akhilesh Kunhi Raman", title: "AI Strategy and Governance", image: "/images/team/akhilesh.png" },
  { name: "Jeevan SP", title: "AI & Data solutions architect", image: "/images/team/jeevan.png" },
  { name: "Shashank L k", title: "Head of Technology", image: "/images/team/shashank6.png" },
];

const TeamSection: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center text-center py-16 px-4 md:px-12">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"

        style={{ backgroundImage: `url('/images/Liquid Gradient Abstract Background.png')` }}
      ></div>

      {/* Content */}
      <div className="relative z-10" >
  <button
    className=" px-9 py-2 border border-[#35A7E4] text-white rounded-full text-lg font-semibold hover:bg-purple-500 transition"
    style={{ backgroundColor: "rgba(98, 83, 161, 0.3)" }} // 30% opacity
  >
    Team
  </button>


        <br/><br/><h1 className="text-4xl font-extrabold mt-4">
          Meet our Catalyst <span className="text-purple-400">Team</span>
        </h1>
        <br/>
        

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-12 place-items-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="relative w-[220px] h-[300px]">
              {/* Outer Frame */}
              <div className="absolute top-0 left-0 right-0 bottom-0 border-[6px] border-white"></div>

              {/* Image */}
              <div className="absolute -top-3 inset-x-2 flex justify-center">
                <img src={member.image} alt={member.name} className="w-full object-cover rounded-t-lg" style={{ height: "70%" }} />
              </div>

              {/* Name & Title */}
              <div className="absolute bottom-0 w-full bg-white py-3 px-2 text-black text-center font-semibold">
                <h2 className="text-md">{member.name}</h2>
                <p className="text-xs">{member.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button (Links to another page) 
        <div className="mt-12">
          <a
            href="/team" // Change this to your actual team page route
            className="px-6 py-4 bg-purple-500 text-white rounded-full text-lg font-semibold hover:bg-purple-600 transition"
          >
            View More
          </a>
        </div>
        */}
      </div>
    </section>
  );
};

export default TeamSection;