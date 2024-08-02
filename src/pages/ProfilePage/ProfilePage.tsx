import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import './ProfilePage.scss'
import ProfileCard from './components/ProfileCard/ProfileCard'
import BioCard from './components/BioCard/BioCard'
import SkillsCard from './components/SkillsCard/SkillsCard'
import ProjectsCard from './components/ProjectsCard/ProjectsCard'
import { getUserData, getAllProjectsByUserID } from '@/src/utils/Firebase'
import { UserData, ProjectDetails } from '@/src/interfaces/types'
import EditProfileModal from './components/EditProfileModal/EditProfileModal'

function ProfilePage() {
  const [profileTab, setProfileTab] = useState('profile')
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false)
  const [userData, setUserData] = useState<UserData>({})
  const [projects, setProjects] = useState<ProjectDetails[]>([])

  const userID = 'UID99993230'

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user data
        const data = await getUserData(userID)
        if (data !== undefined && data !== null) {
          setUserData(data as UserData)
        } else {
          toast.error('User not found')
        }

        // Fetch projects
        const userProjects = await getAllProjectsByUserID(userID)
        if (userProjects.length > 0) {
          setProjects(userProjects as ProjectDetails[])
        } else {
          console.error('No projects found for user.')
        }
      } catch (err) {
        console.error('Error fetching user data:', err)
        toast.error(`Failed to fetch user data: ${(err as Error).message}`)
      }
    }
    fetchData()
  }, [userID])

  const handleOpenEditProfileModal = () => {
    setIsEditProfileModalOpen(true)
  }

  const handleCloseEditProfileModal = () => {
    setIsEditProfileModalOpen(false)
  }
  const handleDataUpdate = (
    updatedUserData: UserData,
    updatedProjects: ProjectDetails[]
  ) => {
    setUserData(updatedUserData)
    setProjects(updatedProjects)
  }

  return (
    <div className="profile">
      <div className="profile__main">
        <div className="profile__content">
          <div className="profile__firstwrap">
            <div className="profile__profile-card">
              <ProfileCard
                userData={userData}
                onEdit={handleOpenEditProfileModal}
              />
            </div>
          </div>
          <div className="profile__folder">
            <div className="profile__tabs">
              <button
                className={`profile__tab ${
                  profileTab === 'profile' ? 'profile__tab--active' : ''
                }`}
                onClick={() => setProfileTab('profile')}
              >
                About Me
              </button>
              <button
                className={`profile__tab ${
                  profileTab === 'projects' ? 'profile__tab--active' : ''
                }`}
                onClick={() => setProfileTab('projects')}
              >
                My Applications
              </button>
              <button
                className={`profile__tab ${
                  profileTab === 'settings' ? 'profile__tab--active' : ''
                }`}
                onClick={() => setProfileTab('settings')}
              >
                My Request
              </button>
            </div>
            <div className="profile__folder-content">
              <div className="profile__folder-inner">
                <div className="profile__bio-card">
                  {userData && <BioCard bio={userData.bio} />}
                </div>
                <div className="profile__skills-card">
                  {userData && <SkillsCard skills={userData.skills ?? []} />}
                </div>
              </div>
              <div className="profile__projects">
                <ProjectsCard projects={projects} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      {isEditProfileModalOpen && (
        <EditProfileModal
          isOpen={isEditProfileModalOpen}
          onClose={handleCloseEditProfileModal}
          userData={userData}
          projects={projects}
          onDataUpdate={handleDataUpdate}
        />
      )}
    </div>
  )
}

export default ProfilePage
