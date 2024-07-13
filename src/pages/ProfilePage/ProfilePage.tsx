import { useState } from "react";
import "./ProfilePage.scss";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import BioCard from "./components/BioCard/BioCard";
import SkillsCard from "./components/SkillsCard/SkillsCard";
import ProjectsCard from "./components/ProjectsCard/ProjectsCard";
import EditButton from "./components/EditButton/EditButton";
import EditProfileModal from "./components/EditProfileModal/EditProfileModal";
import projectData from "../../data/dummy_data_extended.json";

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
  tagline: string;
  experience: string;
}

function ProfilePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState<UserData>(projectData.users[0]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSaveChanges = (updatedData: UserData) => {
    setUserData(updatedData);
    closeModal();
  };

  return (
    <div className="profile ">
      <div className="profile__main">
        <div className="profile__content">
          <div className="profile__firstwrap">
            <div className="profile__first-innerwrap">
              <div className="profile__profile-card">
                <ProfileCard
                  profilePhotoLink={userData.profilephoto_link}
                  firstName={userData.first_name}
                  lastName={userData.last_name}
                  tagline={userData.user_profile}
                  title={userData.title}
                  email={userData.email}
                />
              </div>
              <div className="profile__edit-button">
                <EditButton onClick={openModal} />
              </div>
            </div>

            <div className="profile__bio-card">
              <BioCard bio={userData.bio} />
            </div>
          </div>
          <div className="profile__secondwrap">
            <div className="profile__skills-card">
              <SkillsCard skills={userData.own_skills} />
            </div>
            <div className="profile__projects">
              <ProjectsCard projects={userData.projects} />
            </div>
          </div>
        </div>
      </div>
      <EditProfileModal
        isOpen={isModalOpen}
        onClose={closeModal}
        userData={userData}
        onSave={handleSaveChanges}
      />
    </div>
  );
}

export default ProfilePage;
