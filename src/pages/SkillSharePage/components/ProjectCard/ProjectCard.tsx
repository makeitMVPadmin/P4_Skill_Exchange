import { useState } from 'react'
import { setJobToInProgress, deleteJobById } from '@/src/utils/Firebase'
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
  onDelete: (jobId: string) => void
}
6
const ProjectCard: React.FC<ProjectCardProps> = ({ project, onDelete }) => {
  const [status, setStatus] = useState(
    project.status !== undefined ? project.status.toString() : '0'
  )

  const handleStatusChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newStatus = event.target.value

    try {
      if (newStatus === '1' && status !== '1') {
        await setJobToInProgress(project.id)
        setStatus('1')
      } else if (newStatus === 'delete') {
        const jobTitle = await deleteJobById(project.id)
        console.log(`Job "${jobTitle}" deleted`)
        onDelete(project.id)
      } else {
        setStatus(newStatus)
      }
    } catch (error) {
      console.error('Error updating status or deleting job:', error)
    }
  }

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
            <option value="delete">Delete</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
