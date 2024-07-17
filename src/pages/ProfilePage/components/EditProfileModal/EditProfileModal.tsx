import "./EditProfileModal.scss";
import { useState, useEffect } from "react";
import { UserData, Skill } from "@/src/interfaces/types";
import avaibleSkills from "@/src/data/availableSkills.json";
import deleteIcon from "@/src/assets/icons/deleteIcon.png";

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
  const [ownSkills, setOwnSkills] = useState<Skill[]>(userData.own_skills);
  const [newSkill, setNewSkill] = useState<Skill>({
    skill_name: "",
    years_experience: 0,
  });

  const [yearsExperience, setYearsExperience] = useState<number>(0);

  const yearsOptions = Array.from({ length: 31 }, (_, i) => i);

  useEffect(() => {
    setFirstName(userData.first_name);
    setLastName(userData.last_name);
    setTitle(userData.title);
    setBio(userData.bio);
    setUserProfile(userData.user_profile);
    setOwnSkills(userData.own_skills);
  }, [userData]);

  const handleAddSkill = () => {
    if (
      newSkill.skill_name &&
      !ownSkills.some((skill) => skill.skill_name === newSkill.skill_name)
    ) {
      setOwnSkills([...ownSkills, newSkill]);
      setNewSkill({ skill_name: "", years_experience: 0 });
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
        <label className="edit-modal__label">
          Enter your skills and years of experience
        </label>
        <div className="edit-modal__skills">
          {ownSkills.map((skill, index) => (
            <div key={index} className="edit-modal__skill-item">
              <input
                type="text"
                name="skill_name"
                className="edit-modal__input-skill"
                value={skill.skill_name}
                readOnly
              />
              <input
                type="text"
                name="years_experience"
                className="edit-modal__input-skill"
                value={skill.years_experience}
                readOnly
              />
              <button
                type="button"
                className="edit-modal__delete-button"
                onClick={() => handleDeleteSkill(index)}
              >
                <img
                  className="edit-modal__delete-icon"
                  src={deleteIcon}
                  alt="Delete"
                />
              </button>
            </div>
          ))}
          <div className="edit-modal__add-skill">
            <select
              className="edit-modal__select"
              value={newSkill.skill_name}
              onChange={(e) =>
                setNewSkill({ ...newSkill, skill_name: e.target.value })
              }
            >
              <option value="">Select a skill</option>
              {[...avaibleSkills.development, ...avaibleSkills.design].map(
                (skill, index) => (
                  <option key={index} value={skill}>
                    {skill}
                  </option>
                )
              )}
            </select>
            <select
              className="edit-modal__select"
              name="years_experience"
              value={yearsExperience}
              onChange={(e) =>
                setNewSkill({
                  ...newSkill,
                  years_experience: Number(e.target.value),
                })
              }
            >
              <option value="">Years</option>
              {yearsOptions.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
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

  const showPortfolio = () => (
    <div className="edit-modal__form-group">
      <label className="edit-modal__label">Portfolio</label>
      <div className="edit-modal__portfolio">
        {userData.projects?.map((project, index) => (
          <div key={index} className="edit-modal__portfolio-item">
            <div className="edit-modal__portfolio-info">
              <span>{project.project_name}</span>
              <span>{project.project_description}</span>
            </div>
          </div>
        ))}
        <div className="edit-modal__add-portfolio">
          <input
            type="text"
            name="project_name"
            className="edit-modal__input-skill"
            placeholder="Project Name"
          />
          <input
            type="text"
            name="project_description"
            className="edit-modal__input-skill"
            placeholder="Project Description"
          />
          <input
            type="text"
            name="project_url"
            className="edit-modal__input-skill"
            placeholder="Project URL"
          />
        </div>
        <button
          type="button"
          className="edit-modal__add-button"
          onClick={handleAddSkill}
        >
          Add Project
        </button>
      </div>
    </div>
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
          <button
            className={`edit-modal__tab ${
              activeTab === "portfolio" ? "active" : ""
            }`}
            onClick={() => setActiveTab("portfolio")}
          >
            Portfolio
          </button>
        </div>

        <form className="edit-modal__form" onSubmit={handleSubmit}>
          {activeTab === "basicInfo" && showBasicInfo()}
          {activeTab === "skills" && showSkills()}
          {activeTab === "portfolio" && showPortfolio()}

          <button type="submit" className="edit-modal__submit-button">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
