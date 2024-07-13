import "./ProfilePage.scss";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import BioCard from "./components/BioCard/BioCard";
import SkillsCard from "./components/SkillsCard/SkillsCard";
import ProjectsCard from "./components/ProjectsCard/ProjectsCard";

function ProfilePage() {
  return (
    <div className="profile ">
      <div className="profile__main">
        <div className="profile__content">
          <div className="profile__firstwrap">
            <div className="profile__profile-card">
              <ProfileCard />
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
    </div>
  );
}

export default ProfilePage;
