import { Link } from 'react-router-dom'
import './JobCard.scss'

interface Job {
  id: string
  usedId: string
  categories: string[]
  title: string
  header: string
  about: string
  description: string
  thumbnail: string
  assignedUser: string
  status: number
  createdAt: number
  updatedAt: number
  jobDuration: number
  jobSkills: string[]
  questions: number
}

interface JobCardProps {
  job: Job
}

const JobCard = ({ job }: JobCardProps) => {
  const jobSkills = Array.isArray(job.jobSkills) ? job.jobSkills : []

  return (
    <Link to={`/marketplace/${job.id}`}>
      <div className="job-card">
        <div className="job-card__content">
          <div className="job-card__title">{job.title}</div>
          <img className="job-card__image" src={job.thumbnail} alt={job.title} />
          <p className="job-card__description">{job.description}</p>
        </div>
        {/* <button className="job-card__apply-button">
          Apply
        </button> */}
        {/* the whole job card should have the apply button functionality */}
        <div className="job-card__categories">
          {job.categories?.map((category: string) => (
            <span
              key={category}
              className="job-card__category"
            >
              {category}
            </span>
          ))}
        </div>
        <article className="job-card__skills-container">
          <h3 className="job-card__skills-title">SKILLS & TOOLS</h3>
          <div className="job-card__skills">
            {jobSkills.map((skill: string) => (
              <span
                key={skill}
                className="job-card__skill"
              >
                {skill}
              </span>
            ))}
          </div>
        </article>
      </div>
    </Link>
  )
}

export default JobCard
