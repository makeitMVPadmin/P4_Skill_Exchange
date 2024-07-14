import "./ProfileCard.scss";
import EditButton from "../EditButton/EditButton";
import projectData from "src/data/dummy_data_extended.json";

interface ProfileCardProps {
  firstName: string;
  lastName: string;
  tagline: string;
  title: string;
  email: string;
  profilePhotoLink?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  firstName,
  lastName,
  tagline,
  title,
  email,
  profilePhotoLink,
}) => {
  return (
    <div className="profile-card">
      <div className="profile-card__content">
        <img
          src={profilePhotoLink || "https://via.placeholder.com/150"}
          alt={`${firstName} ${lastName}`}
          className="profile-card__picture"
        />
        <div className="profile-card__details">
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
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
