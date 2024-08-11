import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import HeartIcon from '/icons/heart-icon.svg'
import ProjectCardModal from '@/src/components/Modals/ProjectCardModal/ProjectCardModal'
import { getJobDetailsByJobId } from '@/src/utils/Firebase'
import Tag from '@/src/components/Tag/Tag'
import TaskPosterCard from '@/src/pages/MarketPlacePage/components/TaskPosterCard/TaskPosterCard'
import './MarketPlaceTaskDetail.scss'
import { Job } from '@/src/interfaces/types'

function MarketplaceTaskDetail() {
  const { id } = useParams()
  const [jobDetail, setJobDetail] = useState<Job | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [isProjectCardModalOpen, setIsProjectCardModalOpen] =
    useState<boolean>(false)

  // Fetch job details from Firebase when component mounts or ID changes
  useEffect(() => {
    const fetchJobDetails = async () => {
      setLoading(true)
      setError(null)
      try {
        const jobData = await getJobDetailsByJobId(id) // Fetch job details from Firebase
        setJobDetail(jobData)
      } catch (error) {
        setError('Failed to fetch job details.')
      } finally {
        setLoading(false)
      }
    }

    fetchJobDetails()
  }, [id])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }
  if (!jobDetail) {
    return <div>Job not found</div>
  }
  return (
    <div className="task__container">
      <Link className="task__link" to="/">
        {' '}
        &#8592; Back{' '}
      </Link>
      <div className="task__detail">
        <div className="task__detail-header">
          <div className="task__detail-header__info">
            <div className="task__info">
              <h1 className="task__info--title">{jobDetail.title}</h1>
              <div className="task__info--icon">
                <img
                  src={HeartIcon}
                  alt="header__info-icon"
                  className="task__info--icon-favourite"
                />
              </div>
            </div>
            <p className="task__description">{jobDetail.description}</p>
            <div className="task__actions">
              <div className="task__actions--tags">
                {jobDetail.categories?.map((category, index) => (
                  <Tag key={index} text={category} />
                ))}
              </div>{' '}
              <div className="task__actions--buttons">
                <button onClick={() => setIsProjectCardModalOpen(true)}>
                  Apply Now
                </button>
                {isProjectCardModalOpen && (
                  <ProjectCardModal
                    isProjectCardModalOpen={isProjectCardModalOpen}
                    onClose={() => setIsProjectCardModalOpen(false)}
                    taskTitle={jobDetail.title}
                    onViewMoreProjects={() => {}}
                    questions={jobDetail.questions}
                    userId={jobDetail.usedID}
                    jobId={jobDetail.id}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="task__detail-bottom">
          <article className="task__content">
            <div className="task__content-header">
              <h3 className="task__content-title">About the Project</h3>
              <p className="task__content">
                The Innovative Tech Solution is designed to address a specific
                technological need or challenge in the market. It involves the
                development of a cutting-edge application, platform, or system
                that leverages modern technologies to provide effective
                solutions. The project aims to enhance user experience, improve
                operational efficiency, and drive innovation in its target
                domain.
              </p>
            </div>
            <div className="task__content-bottom">
              <h5>Responsibilities</h5>
              <ul className="task__content-list">
                <li>
                  Identify and address a critical problem or gap in the market
                  through innovative technology.
                </li>
                <li>
                  Develop a user-friendly solution that provides significant
                  value and improves the overall user experience.
                </li>
                <li>
                  Utilize the latest advancements in technology to ensure high
                  performance, scalability, and security.
                </li>
                <li>
                  Position the solution effectively in the market to gain a
                  competitive edge and attract target users or customers.
                </li>
              </ul>
            </div>
          </article>
          <TaskPosterCard
            createdDate={jobDetail.createdAt}
            jobDetails={jobDetail}
          />
        </div>
      </div>
    </div>
  )
}

export default MarketplaceTaskDetail
