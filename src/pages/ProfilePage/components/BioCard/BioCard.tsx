import { useEffect, useState } from "react";
import "./BioCard.scss";
import projectData from "src/data/dummy_data_extended.json";

interface UserBio {
  bio: string;
}

const BioCard: React.FC = () => {
  const [user, setUser] = useState<UserBio | null>(null);

  useEffect(() => {
    const userData = projectData.users[0];
    setUser(userData);
  }, []);

  return (
    <div className="bio">
      <h2 className="bio__title">Bio</h2>
      {user ? (
        <article className="bio__content">
          <p>{user.bio}</p>
        </article>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BioCard;
