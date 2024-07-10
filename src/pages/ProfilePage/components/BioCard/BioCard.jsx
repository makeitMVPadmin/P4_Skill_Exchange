import "../../ProfilePage.scss";

function BioCard() {
  return (
    <div className="bio h-15 bg-white p-4 rounded-lg shadow-md mb-4">
      <h2 className="bio__title text-lg font-bold mb-2">Bio</h2>
      <p className="bio__content">
        Hi! I am a recent Software Engineering Bootcamp graduate. I am skilled
        in user research, wireframing, and prototyping, with a keen eye for
        detail. I am eager to create engaging user experiences. Let's bring your
        ideas to life!
      </p>
    </div>
  );
}

export default BioCard;
