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
  console.log(job);

  return (
    <Link to={`/marketplace/${job.id}`}>
      <div className="job-card">
        <div className="job-card__subparent">
          <div className="job-card__content">
            <section className="job-card__title--parent">
              <div className="job-card__title">{job.title}</div>
              <div className="job-card__heart">
                <svg width="24" height="21" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path id="Vector" d="M8.25314 13.8833L14.2646 7.54444C14.5204 7.29167 14.7214 7 14.9041 6.68889C15.8908 4.95833 15.635 2.74167 14.2646 1.30278C13.4789 0.466667 12.4191 0 11.3045 0C9.55044 0 8.45413 1.08889 7.99733 1.71111C7.54053 1.08889 6.44423 0 4.69013 0C3.57555 0 2.51578 0.466667 1.73009 1.30278C0.377977 2.74167 0.1039 4.95833 1.09058 6.68889C1.2733 7 1.47429 7.29167 1.73009 7.54444L7.74153 13.8833C7.8877 14.0389 8.10696 14.0389 8.25314 13.8833ZM11.3045 0.777778C12.2364 0.777778 13.0952 1.16667 13.753 1.84722C14.8675 3.03333 15.0868 4.86111 14.2828 6.28056C14.1367 6.53333 13.9539 6.78611 13.753 7L7.99733 13.0667L2.2417 7C2.04072 6.78611 1.858 6.55278 1.71182 6.28056C0.907861 4.84167 1.10885 3.01389 2.2417 1.84722C2.89949 1.16667 3.77654 0.777778 4.69013 0.777778C6.0057 0.777778 7.10201 1.53611 7.68671 2.58611C7.83288 2.83889 8.18005 2.83889 8.32622 2.58611C8.89265 1.53611 9.98896 0.777778 11.3045 0.777778Z" stroke="grey"/>
                </svg>
              </div>
            </section>
            <img className="job-card__image" src={job.thumbnail} alt={job.title} />
            <p className="job-card__description">{job.description}</p>
          </div>
          <div className="job-card__categories">
            {job.categories?.map((category: string) => (
              <span key={category} className="job-card__category">{category}</span>
            ))}
          </div>
        </div>
        <article className="job-card__skills--container">
          <h3 className="job-card__skills--title">SKILLS & TOOLS</h3>
          <div className="job-card__skills">
            {jobSkills.map((skill: string) => (
              <span key={skill} className="job-card__skill">{skill}</span>
            ))}
          </div>
        </article>
      </div>
    </Link>
  )
}

export default JobCard
