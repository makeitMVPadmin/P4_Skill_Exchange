import { Link } from "react-router-dom";
import "./ProfilePage.scss";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import BioCard from "./components/BioCard/BioCard";

function ProfilePage() {
  return (
    <div className="profile ">
      <div className="profile__main">
        <div className="profile__content">
          <ProfileCard />
          <BioCard />
          {/* <Skills />
          <Projects /> */}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
