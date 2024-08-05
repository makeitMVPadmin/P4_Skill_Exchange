import { useState } from "react";
import JobCard from "../../components/JobCard/JobCard";
import CategoryDropdown from "../../components/CategoryDropdown/CategoryDropdown";
import projectData from "../../data/dummy_data_extended.json";
interface Job {
  id: number
  name: string
  category: string
  job_tags: string[]
  job_description: string
  jobSkills: string[]
}

const MarketPlace = () => {


  return (
    <div className="mx-auto p-4 w-full">
       Go to "SkillShare Page" to start
    </div>
  )
}

export default MarketPlace
