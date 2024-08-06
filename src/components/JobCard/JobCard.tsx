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
              {/* <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.9001 2.17023L12.5119 2.5815L12.1236 2.16907C10.7825 0.770431 8.97574 -0.00909317 7.09635 8.00528e-05C5.21696 0.00925328 3.41701 0.806382 2.08807 2.21805C0.759125 3.62972 0.00871101 5.54172 7.53614e-05 7.53811C-0.00856028 9.53449 0.725281 11.4537 2.04195 12.8783L2.43022 13.2908L12.5119 24L22.5935 13.2908L22.9818 12.8783C24.288 11.4515 25.0129 9.53585 24.9998 7.54567C24.9867 5.55549 24.2366 3.6508 22.9117 2.24357C21.5868 0.836348 19.7936 0.0397176 17.9201 0.0259929C16.0465 0.0122682 14.2432 0.782553 12.9001 2.17023Z" fill="#FF7070"/>
              </svg> */}
              <svg width="19" height="18" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.9001 2.17023L12.5119 2.5815L12.1236 2.16907C10.7825 0.770431 8.97574 -0.00909317 7.09635 8.00528e-05C5.21696 0.00925328 3.41701 0.806382 2.08807 2.21805C0.759125 3.62972 0.00871101 5.54172 7.53614e-05 7.53811C-0.00856028 9.53449 0.725281 11.4537 2.04195 12.8783L2.43022 13.2908L12.5119 24L22.5935 13.2908L22.9818 12.8783C24.288 11.4515 25.0129 9.53585 24.9998 7.54567C24.9867 5.55549 24.2366 3.6508 22.9117 2.24357C21.5868 0.836348 19.7936 0.0397176 17.9201 0.0259929C16.0465 0.0122682 14.2432 0.782553 12.9001 2.17023Z" fill="#8D8D8D"/>
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
