import { useState } from "react";
import "./index.scss";
import CategoryDropdown from "@/src/components/CategoryDropdown/CategoryDropdown";
import SearchCard from "@/src/components/Search/Search";
import CreateProjectCard from "./components/CreateProjectCard/CreateProjectCard";
import projectData from '../../data/dummy_data_extended.json'
import JobCard from "@/src/components/JobCard/JobCard";

function SkillShare() {
  const [tabStatus, setTabStatus] = useState('provider')

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const onSelectCategory = (category: string) => {
    
    category !== "Show All" ? setSelectedCategory(category) : setSelectedCategory(null)
  }

  // Filter jobs based on selectedCategory
  const filteredJobs = selectedCategory
    ? projectData.jobs.filter((job: Job) => job.category === selectedCategory)
    : projectData.jobs

  return (
    <div className="c_skillshare">
      <div className="c_skillshare-header">
        <div className="c_skillshare-header__buttons">
          <button
            className={tabStatus == 'provider' ? 'provider-active' : ''}
            onClick={() => setTabStatus('provider')}
          >
            As a Skill Provider
          </button>
          <button
            className={tabStatus == 'seeker' ? 'seeker-active' : ''}
            onClick={() => setTabStatus('seeker')}
          >
            As a Talent Seeker
          </button>
        </div>
      </div>
      {/* <div className="c_skillshare-search">
        <SearchCard name="search" handleSearchChange={() => {}} />
      </div> */}
      <div className="col-span-1 ">
        <CategoryDropdown onSelectCategory={onSelectCategory} />
      </div>
      <div className="c_skillshare-projects">
        <div className="c_skillshare-projects__title"></div>
        <div className="c_skillshare-projects-cards">
          {tabStatus == 'seeker' && <CreateProjectCard />}
          <div className="bg-white  col-span-3">
            <h2 className="text-xl font-bold mb-2">Projects you might like</h2>
            <div className="w-full flex sm:items-center flex-wrap gap-5">
              {filteredJobs.map((job: Job) => (
                <JobCard key={job.id} job={job} flag={false} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillShare