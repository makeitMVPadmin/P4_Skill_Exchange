import { useState } from 'react'
import { setJobToInProgress } from '@/src/utils/Firebase'
import './ProjectCard.scss'

interface Project {
  id: string
  title: string
  description: string
  jobSkills: string[]
  thumbnail: string
  jobDuration: number
  categories: string[]
  status: number
}

interface ProjectCardProps {
  project: Project
}
6
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [status, setStatus] = useState(project.status)

  const handleStatusChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newStatus = parseInt(event.target.value)
    try {
      if (newStatus === 1) {
        await setJobToInProgress(project.id)
      }
      setStatus(newStatus)
    } catch (error) {
      console.error('Error updating status:', error)
    }
  }

  //   const handleStatusClick = () => {
  //     let newStatus
  //     if (status === 0) {
  //       newStatus = 1 // Move from Open to In Progress
  //     } else if (status === 1) {
  //       newStatus = 2 // Move from In Progress to Completed
  //     } else {
  //       newStatus = 0 // Reset to Open
  //     }
  //     updateStatus(newStatus)
  //   }

  const getStatusLabel = (status: number) => {
    switch (status) {
      case 0:
        return 'Open'
      case 1:
        return 'In Progress'
      case 2:
        return 'Completed'
      default:
        return 'Unknown'
    }
  }

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
          <select
            value={status}
            onChange={handleStatusChange}
            className={`project-card__stage-status status-${status}`}
          >
            <option value={0}>Open</option>
            <option value={1}>In Progress</option>
            <option value={2}>Completed</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
