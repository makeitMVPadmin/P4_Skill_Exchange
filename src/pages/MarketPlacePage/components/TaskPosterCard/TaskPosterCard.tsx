import Tag from '@/src/components/Tag/Tag'
import { useState, useEffect } from 'react'
import Email from '/icons/email-icon.svg'
import LinkedIn from '/icons/linkedin-icon.svg'

import './TaskPosterCard.scss'

import { TaskPosterProps, UserData } from '@/src/interfaces/types'
import { getUserData } from '@/src/utils/Firebase'

function TaskPosterCard({ createdDate, jobDetails }: TaskPosterProps) {
  const date = new Date(createdDate).toLocaleDateString()
  const [userDetail, setUserDetail] = useState<UserData | null>(null)
  const [error, setError] = useState<string | null>(null) // Added error state

  const jobOwner = 'UID99993230'
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user data
        const data = await getUserData(jobOwner)
        if (data !== undefined && data !== null) {
          setUserDetail(data as UserData)
        } else {
          setError('User data not found.')
        }
      } catch (err) {
        console.error('Error fetching user data:', err)
      }
    }
    fetchData()
  }, [jobOwner])
  if (error) {
    return <div>{error}</div> // Display error if any
  }
  return (
    <div className="task__poster">
      <div className="task__poster-bio">
        <div className="task__poster-bio__top">
          <figure className="task__poster-avatar">
            <img
              className="task__poster-avatar__media"
              src={userDetail?.profilePhoto}
              alt={userDetail?.firstName}
            />
          </figure>
          <div className="task__poster-bio__info">
            <h2>
              {userDetail?.firstName} {userDetail?.lastName}
            </h2>
            <p>{userDetail?.expertise}</p>
          </div>
        </div>
        <div className="task__poster-bio__bottom">
          <h3 className="contact__title">Contact Info</h3>
          <ul className="contact__list">
            <li className="contact__list-item">
              <a href={`mailto:${userDetail?.email}`}>
                <img src={Email} alt="Email Logo" />
              </a>
            </li>
            <li className="contact__list-item">
              <a href={userDetail?.linkedin} target="_blank">
                <img src={LinkedIn} alt="Linkedin Logo" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="task__poster-task__info">
        <ul className="task__info-list">
          <li className="task__info-list__item">
            <span>Date Posted</span>
            <span>{date}</span>
          </li>
        </ul>
        <div className="task__poster-skills">
          <h3 className="task__poster-skills__title">Skills & Tools</h3>
          <div className="task__poster-skills__list">
            {userDetail?.skills.map((skill, index) => (
              <Tag key={index} text={skill.skillName} />
            ))}
          </div>
        </div>

        <div className="task__poster-duration">
          <h3 className="task__poster-duration__title">Project Duration</h3>
          <p className="task__poster-duration__text">
            {jobDetails.jobDuration}
          </p>
        </div>
      </div>
    </div>
  )
}

export default TaskPosterCard
