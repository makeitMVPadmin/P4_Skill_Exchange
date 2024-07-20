import avaibleSkills from "@/src/data/availableSkills.json";
import deleteIcon from "@/src/assets/icons/deleteIcon.png";
import { Skill } from "@/src/interfaces/types";
import { useState } from "react";

export const showBasicInfo = (props: any) => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    userProfile,
    setUserProfile,
    title,
    setTitle,
    bio,
    setBio,
  } = props;
  return (
    <div className="edit-modal__basic">
      <div className="edit-modal__basic-info">
        <label className="edit-modal__label">First Name</label>
        <input
          type="text"
          className="edit-modal__input"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="edit-modal__basic-info">
        <label className="edit-modal__label">Last Name</label>
        <input
          type="text"
          className="edit-modal__input"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="edit-modal__basic-info">
        <label className="edit-modal__label">Tagline</label>
        <textarea
          className="edit-modal__textarea"
          value={userProfile}
          onChange={(e) => setUserProfile(e.target.value)}
        />
      </div>
      <div className="edit-modal__basic-info">
        <label className="edit-modal__label">Title</label>
        <input
          type="text"
          className="edit-modal__input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="edit-modal__basic-info">
        <label className="edit-modal__label">Bio</label>
        <textarea
          className="edit-modal__textarea"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </div>
    </div>
  );
};

export const showSkills = (props: any) => {
  const {
    ownSkills,
    setOwnSkills,
    newSkill,
    setNewSkill,
    handleAddSkill,
    handleDeleteSkill,
    yearsExperience,
    setYearsExperience,
    yearsOptions,
  } = props;
  return (
    <>
      <div className="edit-modal__form-group">
        <label className="edit-modal__label">
          Enter your skills and years of experience
        </label>
        <div className="edit-modal__skills">
          {ownSkills.map((skill: Skill, index: number) => (
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
              {yearsOptions.map((year: number) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <button
            type="button"
            className="edit-modal__add-button"
            onClick={() => handleAddSkill()}
          >
            Add Skill
          </button>
        </div>
      </div>
    </>
  );
};

export const showPortfolio = (props: any) => {
  const { project, handleAddSkill } = props;
  return (
    <div className="edit-modal__form-group">
      <label className="edit-modal__label">Portfolio</label>
      <div className="edit-modal__portfolio">
        {project.map((project: any, index: number) => (
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
};
