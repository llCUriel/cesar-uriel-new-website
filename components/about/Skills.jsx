import React from "react";

const skillsContent = [
  {
    name: "React.Js",
    skillPercent: "70",
  },
  {
    name: "Java",
    skillPercent: "100",
  },
  {
    name: "Spring Framework",
    skillPercent: "90",
  },
  {
    name: "Python",
    skillPercent: "90",
  },
  {
    name: "Flask & Django",
    skillPercent: "80",
  },
  {
    name: "Amazon Web Services",
    skillPercent: "95",
  },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="progress_inner" key={i}>
          <span className="label">{val.name}</span>
          <div className="background">
            <div className="bar">
              <div
                className="bar_in"
                style={{ width: val.skillPercent + "%" }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
