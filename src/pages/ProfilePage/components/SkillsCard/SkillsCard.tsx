import "./SkillsCard.scss";
import { Skill } from "@/src/interfaces/types";

interface SkillsCardProps {
  skills: Skill[];
}

const SkillsCard: React.FC<SkillsCardProps> = ({ skills }) => {
  return (
    <div className="skills-card">
      <h2 className="skills-card__title">Skills</h2>
      <ul className="skills-card__list">
        {skills.map((skill, index) => (
          <li key={index} className="skills-card__skill">
            {skill.skill_name} - {skill.years_experience} years
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsCard;
