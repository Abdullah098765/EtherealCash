import React from "react";
import TeamOneItem from "./TeamOneItem";

const TeamOne = () => {
  const team_members = [
    {
      src: "/img/team/1.png",
      name: "Abdullah Sabir",
      designation: "Founder & CEO",
      social: {
        linkedin: "https://www.linkedin.com/in/abdullah-sabir-031824252/",
        twitter: "https://x.com/abdullahsabir_X",
        facebook: "https://www.facebook.com/AbdullahSabirSV",
        instagram: "https://www.instagram.com/sabirali18.9",
      },
    },
    {
      src: "/img/team/2.png",
      name: "Muhammed Hanzala",
      designation: "CTO (Chief Technology Officer)",
      social: {
        linkedin: "https://www.linkedin.com/in/mhanzala980/",
        twitter: "",
        facebook: "",
        instagram: "",
      },
    },
    {
      src: "/img/team/3.jpeg",
      name: "Muhammed Mavia",
      designation: "Lead of App Development",
      social: {
        linkedin: "https://www.linkedin.com/in/muhammadmavia",
        twitter: "",
        facebook: "",
        instagram: "",
      },
    },
    {
      src: "/img/team/4.png",
      name: "Maaz Ahmed",
      designation: "Head of AI Development",
      social: {
        linkedin: "https://www.linkedin.com/in/maaz-ahmed-10b956174",
        twitter: "",
        facebook: "",
        instagram: "",
      },
    },
  ];

  return (
    <section className="team-area pt-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-title text-center mb-70">
              <span className="sub-title">OUr team</span>
              <h2 className="title">
                The Leadership <br /> <span>Team</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {team_members.map((member, index) => (
            <div key={index} className="col-xl-3 col-md-4 col-sm-6">
              <TeamOneItem item={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamOne;
