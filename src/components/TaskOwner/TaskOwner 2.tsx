import "./TaskOwner.scss";
import { TaskPosterProps } from "@/src/types";
import Email from "../../../public/icons/email-icon.svg"
import LinkedIn from "../../../public/icons/linkedin-icon.svg"

function TaskOwner({ createdDate, jobOwner } : TaskPosterProps) {
  const date = new Date(createdDate).toLocaleDateString();

  return (
    <div className='task__poster'>
      <div className="task__poster-bio">
        <div className="task__poster-bio__top">
          <figure className="task__poster-avatar">
            <img className="task__poster-avatar__media" src="" alt="Task Owner profile image" />
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
              <a href="mailto:michellelo@gmail.com">  <img src={Email} alt="Email Logo" /></a>
            </li>
            <li className="contact__list-item">
              <a href="https://www.linkedin.com/in/michelle--lo/" target="_blank"> <img src={LinkedIn} alt="Email Logo" /></a>
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
        <div>
     <span 
        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
     > React 
     </span>
    </div>
    <div>
     <span 
        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
     >JavaScript
     </span>
    </div>
          <div>
     <span 
        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
     > Python
     </span>
    </div>
        </div>
      </div>
    </div>
  )
}

export default TaskOwner;