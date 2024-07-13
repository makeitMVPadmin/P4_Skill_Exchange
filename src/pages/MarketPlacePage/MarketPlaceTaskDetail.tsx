import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import projectData from "public/data/dummy_data_extended.json";
import { slugify } from "@/src/utils/string-utils";


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
    <div>
      <h1>{jobDetail?.name}</h1>
    </div>
  )
}

export default MarketplaceTaskDetail