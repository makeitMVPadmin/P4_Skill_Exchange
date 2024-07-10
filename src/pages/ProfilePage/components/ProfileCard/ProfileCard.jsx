import "./ProfileCard.scss";

function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="profile-card__content">
        <div className="profile-card__picture"></div>
        <div className="profile-card__details">
          <h2 className="profile-card__name">Michelle Lo</h2>
          <p className="profile-card__title">Software Developer</p>
          <p className="profile-card__email">michellelo.dev@gmail.com</p>
          <ul className="profile-card__social-links">
            <li>
              <a
                className="profile-card__social-link"
                href="https://www.linkedin.com/"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className="profile-card__social-link"
                href="https://github.com/"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
