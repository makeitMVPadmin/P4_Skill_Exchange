import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


import projectData from "src/data/dummy_data_extended.json";
import { slugify } from "@/src/utils/string-utils";

import Tag from "@/src/components/Tag/Tag";
import "./MarketPlaceTaskDetail.scss";

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
        
      </div>
    </div>
  )
}

export default MarketplaceTaskDetail