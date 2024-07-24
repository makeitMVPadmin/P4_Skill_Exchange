import avaibleSkills from '@/src/data/availableSkills.json'
import deleteIcon from '@/src/assets/icons/deleteIcon.png'
import addIcon from '@/src/assets/icons/addIcon.png'
import { Skill } from '@/src/interfaces/types'

// Show basic info component

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
    setBio
  } = props
  return (
    <div className="edit-modal__form-group">
      <div className="edit-modal__basic-info">
        <label className="edit-modal__label">First Name</label>
        <input
          type="text"
          className="edit-modal__input"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
      </div>
      <div className="edit-modal__basic-info">
        <label className="edit-modal__label">Last Name</label>
        <input
          type="text"
          className="edit-modal__input"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
      </div>
      <div className="edit-modal__basic-info">
        <label className="edit-modal__label">Tagline</label>
        <textarea
          className="edit-modal__textarea"
          value={userProfile}
          onChange={e => setUserProfile(e.target.value)}
        />
      </div>
      <div className="edit-modal__basic-info">
        <label className="edit-modal__label">Title</label>
        <input
          type="text"
          className="edit-modal__input"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div className="edit-modal__basic-info">
        <label className="edit-modal__label">Bio</label>
        <textarea
          className="edit-modal__textarea"
          value={bio}
          onChange={e => setBio(e.target.value)}
        />
      </div>
    </div>
  )
}

// Show skills component

export const showSkills = (props: any) => {
  const {
    ownSkills,
    newSkill,
    setNewSkill,
    handleAddSkill,
    handleDeleteSkill,
    yearsExperience,
    yearsOptions
  } = props
  return (
    <>
      <div className="edit-modal__form-group">
        <label className="edit-modal__label">
          Enter your skills and years of experience
        </label>
        <div className="edit-modal__skills">
          {ownSkills.map((skill: Skill, index: number) => (
            <div key={index} className="edit-modal__skill-item">
              <div className="edit-modal__skill-wrapper">
                <label className="edit-modal__label">Skill</label>
                <input
                  type="text"
                  name="skill_name"
                  className="edit-modal__input-skill"
                  value={skill.skill_name}
                  readOnly
                />
              </div>
              <div className="edit-modal__skill-wrapper">
                <label className="edit-modal__label">Years of Experience</label>
                <input
                  type="text"
                  name="years_experience"
                  className="edit-modal__input-skill"
                  value={skill.years_experience}
                  readOnly
                />
              </div>
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
              onChange={e =>
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
              onChange={e =>
                setNewSkill({
                  ...newSkill,
                  years_experience: Number(e.target.value)
                })
              }
            >
              {yearsOptions.map((year: number) => (
                <option key={year} value={year}>
                  {year} {year <= 1 ? 'Year' : 'Years'} of Experience
                </option>
              ))}
            </select>
            <button
              type="button"
              className="edit-modal__add-button"
              onClick={() => handleAddSkill()}
            >
              <img className="edit-modal__add-icon" src={addIcon} alt="Add" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

// Show portfolio component

export const showPortfolio = (props: any) => {
  const { projects, handleEditProject, handleAddProject } = props
  return (
    <div className="edit-modal__form-group">
      <label className="edit-modal__label">Portfolio</label>
      <div className="edit-modal__portfolio">
        {projects.map((project: any, index: number) => (
          <div key={index} className="edit-modal__portfolio-item">
            <div className="edit-modal__portfolio-info">
              <span>{project.project_name}</span>
              {/* <span>{project.project_description}</span> */}
            </div>
            <button
              type="button"
              className="edit-modal__edit-button"
              onClick={() => handleEditProject(index)}
            >
              Edit
            </button>
          </div>
        ))}
        <button
          type="button"
          className="edit-modal__add-button"
          onClick={handleAddProject}
        >
          Add Project
        </button>
      </div>
    </div>
  )
}

// Edit Project component

export const EditProject = (props: any) => {
  const { project, setProject, handleSaveProject, handleCancelEdit } = props
  return (
    <div className="edit-modal__add-portfolio">
      <label className="edit-modal__label">Project Name</label>
      <input
        type="text"
        name="project_name"
        className="edit-modal__input-skill"
        placeholder="Project Name"
        value={project.project_name}
        onChange={e => setProject({ ...project, project_name: e.target.value })}
      />
      <label className="edit-modal__label">Project Description</label>
      <input
        type="text"
        name="project_description"
        className="edit-modal__input-skill"
        placeholder="Project Description"
        value={project.project_description}
        onChange={e =>
          setProject({ ...project, project_description: e.target.value })
        }
      />
      <label className="edit-modal__label">Project URL</label>
      <input
        type="text"
        name="project_url"
        className="edit-modal__input-skill"
        placeholder="Project URL"
        value={project.project_url}
        onChange={e => setProject({ ...project, project_url: e.target.value })}
      />
      <div className="edit-modal__buttons">
        <button
          type="button"
          className="edit-modal__button"
          onClick={handleSaveProject}
        >
          Save
        </button>
        <button
          type="button"
          className="edit-modal__button"
          onClick={handleCancelEdit}
        >
          Cancel
        </button>
      </div>
    </div>
  )
}
