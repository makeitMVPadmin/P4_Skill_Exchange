import Tag from "@/src/components/Tag/Tag";
import "./TaskPosterCard.scss";

import { TaskPosterProps } from "@/src/types";

function TaskPosterCard({ createdDate, jobOwner } : TaskPosterProps) {
  const date = new Date(createdDate).toLocaleDateString();

  return (
    <div className='task__poster'>
      <div className="task__poster-bio">
        <div className="task__poster-bio__top">
          <figure className="task__poster-avatar">
            <img className="task__poster-avatar__media" src="https://i.ebayimg.com/images/g/c3cAAOSwLKZdg-c-/s-l1600.webp" alt="" />
          </figure>
          <div className="task__poster-bio__info">
            <h2>Name of task poster</h2>
            <p>Their Skill of Domain</p>
          </div>
        </div>
        <div className="task__poster-bio__bottom">
          <h3 className="contact__title">Contact Info</h3>
          <ul className="contact__list">
            <li className="contact__list-item">
              <a href="mailto:michellelo@gmail.com">Email</a>
            </li>
            <li className="contact__list-item">
              <a href="mailto:michellelo@gmail.com">LinkedIn</a>
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
          <Tag text="UX Design" />
          <Tag text="React" />
          <Tag text="NodeJS" />
        </div>
      </div>
    </div>
  )
}

export default TaskPosterCard