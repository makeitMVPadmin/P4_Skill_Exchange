import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


import projectData from "src/data/dummy_data_extended.json";
import { slugify } from "@/src/utils/string-utils";

import Tag from "@/src/components/Tag/Tag";
import "./MarketPlaceTaskDetail.scss";
import TaskPosterCard from "./components/TaskPosterCard/TaskPosterCard";

function MarketplaceTaskDetail() {
  const { id } = useParams();
  const [jobs, setJobs] = useState([]);
  const [jobDetail, setJobDetail] = useState();

  useEffect(() => {
    setJobs(projectData.jobs)

    findJobDetail()
  })
  

  const findJobDetail = () => {
    jobs.map((job:any) => {
      const slug = slugify(job.name)
      if(slug == id) {
        setJobDetail(job)
      }
    })
  }

  return (
    <div className="task__detail">
      <div className="task__detail-top">
        <div className="task__detail-top__info">
          <h1 className="task__title">Task Name</h1>
          <p className="task__description">Brief description of the task and one line detail of what they require</p>
          
        <div className="task__tags">
          <Tag text={'UI Design'} />  
          <Tag text={'Visual Design'} />  
          <Tag text={'UX Design'} />  
        </div>
        </div>
        <div className="task__detail-top__apply">
          <button className="apply__button">apply</button>
        </div>
      </div>
      <div className="task__detail-bottom">
        <article className="task__content">
          <div className="task__content-top">
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
        <TaskPosterCard/>
      </div>
    </div>
  )
}

export default MarketplaceTaskDetail