import "./BioCard.scss";

interface BioCardProps {
  bio: string;
}

const BioCard: React.FC<BioCardProps> = ({ bio }) => {
  return (
    <div className="bio">
      <h2 className="bio__title">Bio</h2>

      <article className="bio__content">
        <p>{bio}</p>
      </article>
    </div>
  );
};

export default BioCard;
