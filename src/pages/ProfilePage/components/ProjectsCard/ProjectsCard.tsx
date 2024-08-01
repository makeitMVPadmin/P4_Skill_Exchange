import './ProjectsCard.scss'
import { ProjectDetails } from '@/src/interfaces/types'

const Project: React.FC<ProjectDetails> = ({
  title,

  thumbnail,
  url
}) => {
  return (
    <a href={url} target="_blank" className="projects__project">
      <div className="projects__project--thumbnail">
        <img className="projects__project--img" src={thumbnail} alt={title} />
      </div>
      <div className="projects__project--name">{title}</div>
    </a>
  )
}

interface ProjectsCardProps {
  projects: ProjectDetails[]
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({ projects }) => {
  return (
    <div className="projects">
      <h2 className="projects__title">Portfolio</h2>
      <div className="projects__list">
        {projects.map(project => (
          <Project
            key={project.id}
            id={project.id}
            userID={project.userID}
            title={project.title}
            thumbnail={project.thumbnail}
            description={project.description}
            url={project.url}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectsCard
