import { useState } from 'react'
import './ProfilePage.scss'
import ProfileCard from './components/ProfileCard/ProfileCard'
import BioCard from './components/BioCard/BioCard'
import SkillsCard from './components/SkillsCard/SkillsCard'
import ProjectsCard from './components/ProjectsCard/ProjectsCard'
import projectData from '../../data/dummy_data_extended.json'
import { UserData } from '@/src/interfaces/types'

function ProfilePage() {
  const [userData, setUserData] = useState<UserData>(projectData.users[0])

  const handleSaveChanges = (updatedData: UserData) => {
    setUserData(updatedData)
  }

  return (
    <div className="profile ">
      <div className="profile__main">
        <div className="profile__content">
          <div className="profile__firstwrap">
            {/* <div className="profile__first-innerwrap"> */}
            <div className="profile__profile-card">
              <ProfileCard
                userData={userData}
                onSaveChanges={handleSaveChanges}
              />
            </div>

            {/* </div> */}
          </div>
          <div className="profile__secondwrap">
            <div className="profile__second-inner">
              <div className="profile__bio-card">
                <BioCard bio={userData.bio} />
              </div>
              <div className="profile__skills-card">
                <SkillsCard skills={userData.own_skills} />
              </div>
            </div>
            <div className="profile__projects">
              <ProjectsCard projects={userData.projects || []} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
