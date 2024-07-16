import { useState } from "react";
import "./ProfileCard.scss";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import EditButton from "../EditButton/EditButton";

interface ProfileCardProps {
  firstName: string;
  lastName: string;
  tagline: string;
  title: string;
  email: string;
  profilePhotoLink?: string;
  userData: UserData;
  onSaveChanges: (updatedData: UserData) => void;
}
interface Project {
  project_name: string;
  project_image: string;
  project_description: string;
  project_url: string;
}

interface UserData {
  profilephoto_link: string;
  first_name: string;
  last_name: string;
  email: string;
  user_profile: string;
  title: string;
  bio: string;
  interested_skills: string[];
  own_skills: string[];
  projects: Project[];
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  firstName,
  lastName,
  tagline,
  title,
  email,
  profilePhotoLink,
  userData,
  onSaveChanges,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSaveChanges = (updatedData: UserData) => {
    onSaveChanges(updatedData);
    closeModal();
  };

  return (
    <div className="profile-card">
      <div className="profile-card__content">
        {/* <div className="profile-card__details"> */}
        <img
          src={profilePhotoLink || "https://via.placeholder.com/150"}
          alt={`${firstName} ${lastName}`}
          className="profile-card__picture"
        />
        <div className="profile__edit-button">
          <EditButton onClick={openModal} />
        </div>

        <h2 className="profile-card__name">{`${firstName} ${lastName}`}</h2>
        <h3 className="profile-card__tagline">{tagline}</h3>
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
  );
};

export default ProfileCard;
