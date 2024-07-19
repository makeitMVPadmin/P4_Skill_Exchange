import { useParams } from "react-router-dom";


import projectData from "src/data/dummy_data_extended.json";

import Tag from "@/src/components/Tag/Tag";
import TaskPosterCard from "./components/TaskPosterCard/TaskPosterCard";

import { JobDetail } from "@/src/types";

import "./MarketPlaceTaskDetail.scss";

function MarketplaceTaskDetail() {
  const { id } = useParams();
  const jobs = projectData.jobs || [];
  const jobDetail : JobDetail = jobs.find((job) => job.id.toString() === id);

  return (
    <div className="task__detail">
      <div className="task__detail-header">
        <div className="task__detail-header__info">
          <h1 className="task__title">{ jobDetail.name }</h1>
          <p className="task__description">{ jobDetail.job_description }</p>
          
        <div className="task__tags">
          <Tag text={jobDetail.category} /> 
          {
            jobDetail.job_tags.map((tag, index) => (
              <Tag key={index} text={tag} />
            ))
          } 
        </div>
        </div>
        <div className="task__detail-header__apply">
          <button className="apply__button">apply</button>
        </div>
      </div>
      <div className="task__detail-bottom">
        <article className="task__content">
          <div className="task__content-header">
            <h3 className="task__content-title">About the Task</h3>
            <p className="task__content">
              About the person or project: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
          <div className="task__content-bottom">
            <h5>Responsibilities of the task</h5>
            <ul className="task__content-list">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
              <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
              <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</li>
            </ul>
          </div>
        </article>
        <TaskPosterCard 
          createdDate={jobDetail.created_date}
          jobOwner={jobDetail.job_owner}
        />
      </div>
    </div>
  )
}

export default MarketplaceTaskDetail;