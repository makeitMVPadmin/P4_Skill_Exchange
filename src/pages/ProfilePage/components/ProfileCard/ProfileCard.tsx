import { useState } from 'react'
import './ProfileCard.scss'
import EditProfileModal from '../EditProfileModal/EditProfileModal'
import EditButton from '../EditButton/EditButton'
import EmailLogo from '@/src/assets/Icons/email.png'
import GithubLogo from '@/src/assets/Icons/github.png'
import LinkedInLogo from '@/src/assets/Icons/linkedin.png'
import PortfolioLogo from '@/src/assets/Icons/portfolio.png'
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
    profilePhoto,
    firstName,
    lastName,
    expertise,
    email,
    tagline,
    linkedin,
    github,
    portfolioLink
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
        <img
          src={profilePhoto || 'https://via.placeholder.com/150'}
          alt={`${firstName} ${lastName}`}
          className="profile-card__picture"
        />
        <div className="profile__edit-button">
          <EditButton onClick={openModal} />
        </div>

        <h2 className="profile-card__name">{`${firstName} ${lastName}`}</h2>
        <p className="profile-card__title">{expertise}</p>
        <h3 className="profile-card__tagline">{tagline}</h3>
        {/* <div className="profile-card__details"> */}
        <ul className="profile-card__social-links">
          <p className="profile-card__email">
            <img className="profile-card__logo" src={`${EmailLogo}`} />
            {email}
          </p>
          {linkedin && (
            <li className="profile-card__linkedin">
              <img className="profile-card__logo" src={`${LinkedInLogo}`} />
              <a
                className="profile-card__social-link "
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          )}
          {github && (
            <li className="profile-card__github">
              <img className="profile-card__logo" src={`${GithubLogo}`} />
              <a
                className="profile-card__social-link profile-card__github"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          )}
          {portfolioLink && (
            <li className="profile-card__portfolio">
              <img className="profile-card__logo" src={`${PortfolioLogo}`} />
              <a
                className="profile-card__social-link "
                href={portfolioLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Portfolio
              </a>
            </li>
          )}
        </ul>
      </div>
      {/* </div> */}
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
