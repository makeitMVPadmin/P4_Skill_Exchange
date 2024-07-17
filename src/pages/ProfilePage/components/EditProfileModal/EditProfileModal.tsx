import "./EditProfileModal.scss";
import { useState, useEffect } from "react";
import { UserData, ProjectDetails } from "@/src/interfaces/types";

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  userData: UserData;
  onSave: (updatedData: UserData) => void;
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({
  isOpen,
  onClose,
  userData,
  onSave,
}) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState("basicInfo");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");
  const [userProfile, setUserProfile] = useState(userData.user_profile);
  const [bio, setBio] = useState("");
  const [ownSkills, setOwnSkills] = useState<string[]>(userData.own_skills);
  const [newSkill, setNewSkill] = useState("");

  useEffect(() => {
    setFirstName(userData.first_name);
    setLastName(userData.last_name);
    setTitle(userData.title);
    setBio(userData.bio);
    setUserProfile(userData.user_profile);
    setOwnSkills(userData.own_skills);
  }, [userData]);

  const handleAddSkill = () => {
    if (newSkill && !ownSkills.includes(newSkill)) {
      setOwnSkills([...ownSkills, newSkill]);
      setNewSkill("");
    }
  };

  const handleDeleteSkill = (index: number) => {
    setOwnSkills(ownSkills.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedData: UserData = {
      profilephoto_link: userData.profilephoto_link,
      first_name: firstName,
      last_name: lastName,
      email: userData.email,
      user_profile: userProfile,
      title,
      bio,
      interested_skills: userData.interested_skills,
      own_skills: ownSkills,
      projects: userData.projects,
    };
    onSave(updatedData);
  };

  const showBasicInfo = () => (
    <>
      <div className="edit-modal__form-group">
        <label className="edit-modal__label">First Name</label>
        <input
          type="text"
          className="edit-modal__input"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="edit-modal__form-group">
        <label className="edit-modal__label">Last Name</label>
        <input
          type="text"
          className="edit-modal__input"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="edit-modal__form-group">
        <label className="edit-modal__label">Tagline</label>
        <textarea
          className="edit-modal__textarea"
          value={userProfile}
          onChange={(e) => setUserProfile(e.target.value)}
        />
      </div>
      <div className="edit-modal__form-group">
        <label className="edit-modal__label">Title</label>
        <input
          type="text"
          className="edit-modal__input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="edit-modal__form-group">
        <label className="edit-modal__label">Bio</label>
        <textarea
          className="edit-modal__textarea"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </div>
    </>
  );

  const showSkills = () => (
    <>
      <div className="edit-modal__form-group">
        <label className="edit-modal__label">Skills</label>
        <div className="edit-modal__skills">
          {ownSkills.map((skill, index) => (
            <div key={index} className="edit-modal__skill-item">
              <span className="edit-modal__skill">{skill}</span>
              <button
                type="button"
                className="edit-modal__delete-button"
                onClick={() => handleDeleteSkill(index)}
              >
                ❌
              </button>
            </div>
          ))}
          <input
            type="text"
            className="edit-modal__input"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
          />
          <button
            type="button"
            className="edit-modal__add-button"
            onClick={handleAddSkill}
          >
            Add Skill
          </button>
        </div>
      </div>
    </>
  );

  return (
    <div className="edit-modal">
      <div className="edit-modal__overlay" onClick={onClose}></div>
      <div className="edit-modal__content">
        <button className="edit-modal__close-button" onClick={onClose}>
          Close
        </button>
        <h2 className="edit-modal__title">Update Your Profile Details</h2>
        <div className="edit-modal__tabs">
          <button
            className={`edit-modal__tab ${
              activeTab === "basicInfo" ? "active" : ""
            }`}
            onClick={() => setActiveTab("basicInfo")}
          >
            Basic Info
          </button>
          <button
            className={`edit-modal__tab ${
              activeTab === "skills" ? "active" : ""
            }`}
            onClick={() => setActiveTab("skills")}
          >
            Skills
          </button>
        </div>

        <form className="edit-modal__form" onSubmit={handleSubmit}>
          {activeTab === "basicInfo" && showBasicInfo()}
          {activeTab === "skills" && showSkills()}

          <button type="submit" className="edit-modal__submit-button">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
