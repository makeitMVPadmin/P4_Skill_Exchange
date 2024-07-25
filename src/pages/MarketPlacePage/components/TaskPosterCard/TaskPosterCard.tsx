import Tag from "@/src/components/Tag/Tag";

import Email from "/icons/email-icon.svg"
import LinkedIn from "/icons/linkedin-icon.svg"

import "./TaskPosterCard.scss";

import { TaskPosterProps } from "@/src/types";

function TaskPosterCard({ createdDate } : TaskPosterProps) {
  const date = new Date(createdDate).toLocaleDateString();

  return (
    <div className='task__poster'>
      <div className="task__poster-bio">
        <div className="task__poster-bio__top">
          <figure className="task__poster-avatar">
            <img className="task__poster-avatar__media" src="https://i.ebayimg.com/images/g/c3cAAOSwLKZdg-c-/s-l1600.webp" alt="" />
          </figure>
          <div className="task__poster-bio__info">
            <h2>Traci Levine</h2>
            <p>CEO & Founder @MakeitMVP</p>
          </div>
        </div>
        <div className="task__poster-bio__bottom">
          <h3 className="contact__title">Contact Info</h3>
          <ul className="contact__list">
            <li className="contact__list-item">
              <a href="mailto:michellelo@gmail.com">
                <img src={Email} alt="Email Logo" />
              </a>
            </li>
            <li className="contact__list-item">
              <a href="mailto:michellelo@gmail.com">
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
            <span>{ date }</span>
          </li>
          <li className="task__info-list__item">
            <span>Expertise Level</span>
            <span>05</span>
          </li>
        </ul>
        <div className="task__poster-skills">
          <h3 className="task__poster-skills__title">
            Skills & Tools
          </h3>
          <div className="task__poster-skills__list">
            <Tag text="UX Design" />
            <Tag text="React" />
            <Tag text="NodeJS" />
            <Tag text="Web Development" />
            <Tag text="Content" />
          </div>
        </div>

        <div className="task__poster-duration">
          <h3 className="task__poster-duration__title">Project Duration</h3>
          <p className="task__poster-duration__text">6 weeks</p>
        </div>
      </div>
    </div>
  )
}

export default TaskPosterCard