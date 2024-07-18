import { useState } from "react";
import "./index.scss";

import SearchCard from "@/src/components/Search/Search";
import CreateProjectCard from "./components/CreateProjectCard/CreateProjectCard";

function SkillShare() {
  const [tabStatus, setTabStatus] = useState("seeker")

  const onSearch = (event) => {
    
  }

  return (
    <div className="c_skillshare">
      <div className="c_skillshare-header">
        <div className="c_skillshare-header__buttons">
          <button 
            className={tabStatus == "provider" ? 'provider-active' : ''}
            onClick={() => setTabStatus("provider")}
          >
            As a Skill Provider
          </button>
          <button 
            className={tabStatus == "seeker" ? 'seeker-active' : ''}
            onClick={() => setTabStatus("seeker")}
           >
            As a Talent Seeker
            
           </button>
        </div>
      </div>
      <div className="c_skillshare-search">
        <SearchCard name="search" handleSearchChange={onSearch} />
      </div>
      <div className="c_skillshare-projects">
        <div className="c_skillshare-projects__title">
          <h2>My Projects</h2>
        </div>
        <div className="c_skillshare-projects-cards">
          { tabStatus == "seeker" &&  
            <CreateProjectCard />
          }
        </div>
      </div>
    </div>
  )
}

export default SkillShare