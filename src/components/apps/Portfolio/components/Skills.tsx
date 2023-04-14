import { experience } from "@/data";
import { cn } from "@/utils";
import { useState } from "react";
import s from "./Skills.module.scss";
const Skills = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleArrowClick = (index: any) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className={s.section} id="skills">
      <h1 className={s.section_title}>Skills</h1>
      <span className={s.section_subtitle}>My Technical Skills</span>
      <div className={s.skills_container}>
        {experience.map((exp, index) => (
          <div className={s.skills_content} key={index}>
            <div
              className={s.skills_header}
              onClick={() => handleArrowClick(index)}
            >
              <i className={`uil ${exp.icon} ${s.skills_icon}`}></i>

              <div>
                <h3 className={s.skills_title}>{exp.title}</h3>
                <span className={s.skills_subtitle}>{exp.subtitle}</span>
              </div>

              <i
                className={`uil uil-angle-${
                  expandedIndex === index ? "up" : "down"
                } ${s.skills_arrow}`}
              ></i>
            </div>
          </div>
        ))}
      </div>

      {expandedIndex !== null &&
        experience[expandedIndex!]?.skills.map((skill, index) => (
          <div className={s.skills_data} key={index}>
            <div
              className={s.skills_titles}
              style={{ width: `${skill.percentage}%` }}
            >
              {skill.icon.startsWith("uil") || skill.icon.startsWith("fa") ? (
                <span className={s.single_skill_icon}>
                  <i className={skill.icon}></i>
                </span>
              ) : skill.icon.endsWith(".svg") || skill.icon.endsWith(".png") ? (
                <img
                  src={skill.icon}
                  className={cn(s.single_skill_icon, s["external-logo"])}
                />
              ) : (
                <span className={cn(s.single_skill_icon, s["external-logo"])}>
                  {skill.icon}
                </span>
              )}

              <h3 className={s.skills_name}>{skill.skill}</h3>
            </div>
            <div
              className={s.skills_bar}
              style={{ width: `${skill.percentage}%` }}
            ></div>
          </div>
        ))}
    </section>
  );
};

export default Skills;
