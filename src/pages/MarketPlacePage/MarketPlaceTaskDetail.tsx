import { useParams } from "react-router-dom";
import { useState } from 'react';
import projectData from "src/data/dummy_data_extended.json";
import HeartIcon from "/icons/heart-icon.svg";
import ProjectCardModal from "@/src/components/Modals/ProjectCardModal/ProjectCardModal";

import Tag from "@/src/components/Tag/Tag";
import Button from "@/src/components/SeButton/SeButton";
import TaskPosterCard from "@/src/pages/MarketPlacePage/components/TaskPosterCard/TaskPosterCard";
import { JobDetail } from "@/src/types";

import "./MarketPlaceTaskDetail.scss";

function MarketplaceTaskDetail() {
  const { id } = useParams();
  const jobs = projectData.jobs || [];
  const jobDetail: JobDetail | undefined = jobs.find((job) => job.id.toString() === id);

  const [isProjectCardModalOpen, setIsProjectCardModalOpen] = useState<boolean>(false);

  if (!jobDetail) {
    return <div>Job not found</div>;
  }

  return (
    <div className="task__detail">
      <div className="task__detail-header">
        <div className="task__detail-header__info">
          <>
            <h1 className="task__title">{ jobDetail.name }</h1>
            <p className="task__description">{ jobDetail.job_description }</p>
          </>
          
          <div className="task__tags">
            <Tag text={jobDetail.category} /> 
            {
              jobDetail.job_tags.map((tag, index) => (
                <Tag key={index} text={tag} />
              ))
            } 
          </div>
        </div>
        <div className="task__detail-header__buttons">
          <div className="task__detail-header__favorite">
            <img src={HeartIcon} alt="header__favorite-icon" />
          </div>
          <Button 
            text="apply now" 
            onClick={() => setIsProjectCardModalOpen(true)}
            colorScheme="#FFD22F"
          />
          <ProjectCardModal
            isProjectCardModalOpen={isProjectCardModalOpen}
            onClose={() => setIsProjectCardModalOpen(false)}
            taskTitle={jobDetail.name}
            onViewMoreProjects={() => {}}
            jobId={id}
          >
            <h1 className="pcmodal__maintitle">Application for {jobDetail.name}</h1>
            <h2 className="pcmodal__title">Questions</h2>
            <form className="pcmodal__form">
              <label className="pcmodal__form--label" htmlFor="yearsofexperience">
                How many years of coding experience do you have?
              </label>
              <input
                className="pcmodal__form--input"
                placeholder="Enter your years of experience"
                type="text"
                name="yearsofexperience"
              />
              <Button 
                text="apply now" 
                onClick={() => {}}
                colorScheme="#FFD22F"
              />
            </form>
          </ProjectCardModal>
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
  );
}

export default MarketplaceTaskDetail;
