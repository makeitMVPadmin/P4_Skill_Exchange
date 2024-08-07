import './ProjectCard.scss'

interface Project {
  id: string
  title: string
  description: string
  jobSkills: string[]
  thumbnail: string
  jobDuration: number
  categories: string[]
  status: string
}

interface ProjectCardProps {
  project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card">
      <h3 className="project-card__title">{project.title}</h3>
      <div className="project-card__thumbnail">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="project-card__image"
        />
      </div>
      <div className="project-card__content">
        <p className="project-card__description">{project.description}</p>
        <div className="project-card__category">
          {project.categories.join(', ')}
        </div>
        <div className="project-card__skills">
          <strong>SKILLS & TOOLS</strong>
          <div className="project-card__skill-tags">
            {project.jobSkills.map((skill, index) => (
              <span key={index} className="project-card__skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="project-card__stage">
          <strong>PROJECT STAGE</strong>
          <div className={`project-card__stage-status ${project.status}`}>
            {project.status}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
