import { useState } from 'react'
import './ProfileCard.scss'
import EditProfileModal from '../EditProfileModal/EditProfileModal'
import EditButton from '../EditButton/EditButton'
import { UserData } from '@/src/interfaces/types'

interface ProfileCardProps {
  userData: UserData
  onSaveChanges: (updatedData: UserData) => void
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  userData,
  onSaveChanges
}) => {
  const {
    profilephoto_link,
    first_name,
    last_name,
    user_profile,
    title,
    email
  } = userData

  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const handleSaveChanges = (updatedData: UserData) => {
    onSaveChanges(updatedData)
    closeModal()
  }

  return (
    <div className="profile-card">
      <div className="profile-card__content">
        {/* <div className="profile-card__details"> */}
        <img
          src={profilephoto_link || 'https://via.placeholder.com/150'}
          alt={`${first_name} ${last_name}`}
          className="profile-card__picture"
        />
        <div className="profile__edit-button">
          <EditButton onClick={openModal} />
        </div>

        <h2 className="profile-card__name">{`${first_name} ${last_name}`}</h2>
        <h3 className="profile-card__tagline">{user_profile}</h3>
        <p className="profile-card__title">{title}</p>
        <p className="profile-card__email">{email}</p>
        <ul className="profile-card__social-links">
          <li>
            <a
              className="profile-card__social-link"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className="profile-card__social-link"
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
        {/* </div> */}
      </div>
      <EditProfileModal
        isOpen={isModalOpen}
        onClose={closeModal}
        userData={userData}
        onSave={handleSaveChanges}
      />
    </div>
  )
}

export default ProfileCard
