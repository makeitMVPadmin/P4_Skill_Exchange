import './SkillsCard.scss'

interface Skill {
  skillName: string
  yearsExperience: number
}

interface SkillsCardProps {
  skills: Skill[]
}

const SkillsCard: React.FC<SkillsCardProps> = ({ skills }) => {
  return (
    <div className="skills-card">
      <h2 className="skills-card__title">Skills</h2>
      <ul className="skills-card__list">
        {skills.map((skill, index) => (
          <li key={index} className="skills-card__skill">
            <div className="skills-card__name">{skill.skillName}</div>
            <div className="skills-card__years">
              {skill.yearsExperience} years
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SkillsCard
