import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import './ProfilePage.scss'
import ProfileCard from './components/ProfileCard/ProfileCard'
import BioCard from './components/BioCard/BioCard'
import SkillsCard from './components/SkillsCard/SkillsCard'
import ProjectsCard from './components/ProjectsCard/ProjectsCard'
import projectData from '../../data/dummy_data_extended.json'
import { getUserData, getAllUsers, createUser } from '@/src/utils/Firebase'
import { UserData } from '@/src/interfaces/types'

function ProfilePage() {
  const [userData, setUserData] = useState<UserData>(projectData.users[0])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  getAllUsers()
    .then(users => {
      console.log('All users:', users)
    })
    .catch(error => {
      console.error('Error:', error)
    })

  // const userID = '3RP7QXm2MYibnSQhfpaF'
  // getUserData(userID).then(data => console.log('Fetched user data:', data))

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await getUserData(userID)
  //       if (data) {
  //         console.log('Fetched user data:', data)
  //         setUserData(data as UserData)
  //       } else {
  //         setError('User not found')
  //         toast.error('User not found')
  //       }
  //     } catch (err) {
  //       setError('Failed to fetch user data')
  //       toast.error('Failed to fetch user data')
  //     } finally {
  //       setLoading(false)
  //     }
  //   }

  //   fetchData()
  // }, [])

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
      <ToastContainer />
    </div>
  )
}

export default ProfilePage
