import { useState } from "react";
import "./ProfilePage.scss";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import BioCard from "./components/BioCard/BioCard";
import SkillsCard from "./components/SkillsCard/SkillsCard";
import ProjectsCard from "./components/ProjectsCard/ProjectsCard";
import EditButton from "./components/EditButton/EditButton";
import EditProfileModal from "./components/EditProfileModal/EditProfileModal";

function ProfilePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="profile ">
      <div className="profile__main">
        <div className="profile__content">
          <div className="profile__firstwrap">
            <div className="profile__first-innerwrap">
              <div className="profile__profile-card">
                <ProfileCard />
              </div>
              <div className="profile__edit-button">
                <EditButton onClick={openModal} />
              </div>
            </div>

            <div className="profile__bio-card">
              <BioCard />
            </div>
          </div>
          <div className="profile__secondwrap">
            <div className="profile__skills-card">
              <SkillsCard />
            </div>
            <div className="profile__projects">
              <ProjectsCard />
            </div>
          </div>
        </div>
      </div>
      <EditProfileModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default ProfilePage;
