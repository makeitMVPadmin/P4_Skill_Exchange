import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import './ProfilePage.scss'
import ProfileCard from './components/ProfileCard/ProfileCard'
import BioCard from './components/BioCard/BioCard'
import SkillsCard from './components/SkillsCard/SkillsCard'
import ProjectsCard from './components/ProjectsCard/ProjectsCard'
// import projectData from '../../data/dummy_data_extended.json'
import { getUserData } from '@/src/utils/Firebase'
import { UserData } from '@/src/interfaces/types'

function ProfilePage() {
  const [userData, setUserData] = useState<UserData>({})
  const [loading, setLoading] = useState(true)

  const userID = 'UID99993230'

  // getUserData(userID).then(data => console.log('Fetched user data:', data))

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserData(userID)
        if (data !== undefined && data !== null) {
          console.log('Fetched user data:', data)
          setUserData(data as UserData)
        } else {
          console.log('User not found')
          toast.error('User not found')
        }
      } catch (err) {
        console.log('Error fetching user data:', err)
        toast.error(`Failed to fetch user data: ${err.message}`)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [userID])

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
              {/* <div className="profile__bio-card">
                {userData && <BioCard bio={userData.bio} />}
              </div> */}
              <div className="profile__skills-card">
                {userData && <SkillsCard skills={userData.interests ?? []} />}
              </div>
            </div>
            {/* <div className="profile__projects">
              <ProjectsCard projects={projects} />
            </div> */}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default ProfilePage
