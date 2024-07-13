import { useState } from "react";
import "./SkillsCard.scss";

function SkillsCard() {
  const [skills, setSkills] = useState<string[]>([]);
  const [selectedSkill, setSelectedSkill] = useState("");

  const programmingLanguages = [
    "JavaScript",
    "React Native",
    "React.js",
    "Python",
    "Java",
    "C#",
    "Ruby",
    "Go",
  ];

  const addSkill = () => {
    if (selectedSkill && !skills.includes(selectedSkill)) {
      setSkills([...skills, selectedSkill]);
      setSelectedSkill("");
    }
  };

  return (
    <div className="skills-card">
      <h2 className="skills-card__title">Skills</h2>
      <div className="skills-card__input-area">
        <select
          value={selectedSkill}
          onChange={(e) => setSelectedSkill(e.target.value)}
          className="skills-card__input"
        >
          <option value="">Select a language</option>
          {programmingLanguages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
        <button onClick={addSkill} className="skills-card__button">
          Add
        </button>
      </div>
      <div className="skills-card__skills-list">
        {skills.map((skill) => (
          <div key={skill} className="skills-card__skill">
            {skill}
            <span
              onClick={() => setSkills(skills.filter((s) => s !== skill))}
              style={{ cursor: "pointer", marginLeft: "10px" }}
            >
              ❌
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsCard;
