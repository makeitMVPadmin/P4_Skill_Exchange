import React, { useEffect, useState } from "react";
import "./ProfileCard.scss";
import EditButton from "../EditButton/EditButton";
import projectData from "/data/dummy_data_extended.json?url";

interface UserBio {
  first_name: string;
  last_name: string;
  title: string;
  user_profile: string;
  email: string;
  profilephoto_link?: string;
}

const ProfileCard: React.FC = () => {
  const [user, setUser] = useState<UserBio | null>(null);

  useEffect(() => {
    const userData: UserBio = projectData.users[0];
    setUser(userData);
  }, []);

  return (
    <div className="profile-card">
      {user ? (
        <div className="profile-card__content">
          <img
            src={user.profilephoto_link || "https://via.placeholder.com/150"}
            alt={`${user.first_name} ${user.last_name}`}
            className="profile-card__picture"
          />
          <div className="profile-card__details">
            <h2 className="profile-card__name">{`${user.first_name} ${user.last_name}`}</h2>
            <h3 className="profile-card__tagline">{user.user_profile}</h3>
            <p className="profile-card__title">{user.title}</p>
            <p className="profile-card__email">{user.email}</p>
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
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <div className="profile-card__edit-button">
        <EditButton />
      </div>
    </div>
  );
};

export default ProfileCard;
