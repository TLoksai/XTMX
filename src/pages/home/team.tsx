import React from "react";

const teamMembers = [
  {
    name: "Alleah Janette",
    title: "Chief Creative Officer",
    image: "/images/team/new.png",
  },
  {
    name: "Prasanna Patel",
    title: "Co-founder & Director",
    image: "/images/team/prasanna.png",
  },
  {
    name: "Vikas Uppal",
    title: "Co-founder & Director",
    image: "/images/team/vikas.png",
  },
  {
    name: "Akhilesh Kunhi Raman",
    title: "Operations & Design Head",
    image: "images/team/akhilesh.png",
  },
  {
    name: "Dr Akshay Prakash",
    title: "Head Of AI",
    image: "/images/team/akshay.png",
  },
  {
    name: "New Member",
    title: "Software Engineer",
    image: "/images/team/new.png",
  },
];

const TeamSection: React.FC = () => {
  return (
    <section
      className="relative flex flex-col items-center text-center py-16 bg-cover bg-center bg-no-repeat px-4 md:px-12"
      style={{ backgroundImage: `url('/src/images/Liquid Gradient Abstract Background.png')` }}
    >
      {/* Team Button */}
      <button className="px-6 py-2 border border-purple-500 text-white bg-transparent rounded-full text-lg font-semibold hover:bg-purple-500 transition">
        Team
      </button>

      {/* Heading */}
      <h1 className="text-4xl font-extrabold mt-4">
        Meet our <span className="text-purple-400">Team</span>
      </h1>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-12 place-items-center">
        {teamMembers.map((member, index) => (
          <div key={index} className="relative w-[220px] h-[300px]">
            {/* Outer Frame */}
            <div className="absolute top-0 left-0 right-0 bottom-0 border-[6px] border-white"></div>

            {/* Image inside */}
            <div className="absolute -top-8 inset-x-2 flex justify-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-full object-cover rounded-t-lg"
                style={{ height: "70%" }} 
              />
            </div>

            {/* Text inside white banner */}
            <div className="absolute bottom-0 w-full bg-white py-3 px-2 text-black text-center font-semibold">
              <h2 className="text-md">{member.name}</h2>
              <p className="text-xs">{member.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
