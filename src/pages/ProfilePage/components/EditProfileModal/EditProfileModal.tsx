import "./EditProfileModal.scss";
import { useState } from "react";

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function EditProfileModal({ isOpen, onClose }: EditProfileModalProps) {
  if (!isOpen) return null;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [profilePhoto, setProfilePhoto] = useState("");
  const [bio, setBio] = useState("");
  const [tagline, setTagline] = useState("");
  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState("");
  const [experience, setExperience] = useState<string[]>([]);
  const [newExperience, setNewExperience] = useState("");

  const handleAddSkill = () => {
    if (newSkill) {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
  };

  const handleDeleteSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const handleAddExperience = () => {
    if (newExperience) {
      setExperience([...experience, newExperience]);
      setNewExperience("");
    }
  };

  const handleDeleteExperience = (index: number) => {
    setExperience(experience.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="edit-modal">
      <div className="edit-modal__overlay" onClick={onClose}></div>
      <div className="edit-modal__content">
        <button className="edit-modal__close-button" onClick={onClose}>
          Close
        </button>
        <h2 className="edit-modal__title">Edit Profile</h2>
        <form className="edit-modal__form" onSubmit={handleSubmit}>
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
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
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
          <div className="edit-modal__form-group">
            <label className="edit-modal__label">Skills</label>
            <div className="edit-modal__skills">
              {skills.map((skill, index) => (
                <div key={index} className="edit-modal__skill-item">
                  <span className="edit-modal__skill">{skill}</span>
                  <button
                    type="button"
                    className="edit-modal__delete-button"
                    onClick={() => handleDeleteSkill(index)}
                  >
                    Delete
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
          <div className="edit-modal__form-group">
            <label className="edit-modal__label">Experience</label>
            <div className="edit-modal__experience">
              {experience.map((exp, index) => (
                <div key={index} className="edit-modal__experience-item">
                  <span className="edit-modal__experience">{exp}</span>
                  <button
                    type="button"
                    className="edit-modal__delete-button"
                    onClick={() => handleDeleteExperience(index)}
                  >
                    Delete
                  </button>
                </div>
              ))}
              <input
                type="text"
                className="edit-modal__input"
                value={newExperience}
                onChange={(e) => setNewExperience(e.target.value)}
              />
              <button
                type="button"
                className="edit-modal__add-button"
                onClick={handleAddExperience}
              >
                Add Experience
              </button>
            </div>
          </div>
          <button type="submit" className="edit-modal__submit-button">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProfileModal;
