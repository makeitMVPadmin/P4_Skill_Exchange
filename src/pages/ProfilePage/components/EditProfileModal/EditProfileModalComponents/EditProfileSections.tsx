import avaibleSkills from '@/src/data/availableSkills.json'
import deleteIcon from '@/src/assets/Icons/Close.svg'
import addIcon from '@/src/assets/Icons/Add.svg'
import editIcon from '@/src/assets/Icons/Edit.svg'
import { Skill } from '@/src/interfaces/types'

// Show basic info component

export const showBasicInfo = (props: any) => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    tagline,
    setTagline,
    title,
    setTitle,
    bio,
    setBio,
    github,
    setGithub,
    linkedin,
    setLinkedin,
    portfolioLink,
    setPortfolioLink
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
        <label className="edit-modal__label">Title</label>
        <input
          type="text"
          className="edit-modal__input"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div className="edit-modal__basic-info">
        <label className="edit-modal__label">Tagline</label>
        <input
          type="text"
          className="edit-modal__input"
          value={tagline}
          onChange={e => setTagline(e.target.value)}
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
      <div className="edit-modal__basic-info">
        <label className="edit-modal__label">GitHub</label>
        <input
          type="text"
          className="edit-modal__input"
          value={github}
          onChange={e => setGithub(e.target.value)}
        />
      </div>
      <div className="edit-modal__basic-info">
        <label className="edit-modal__label">LinkedIn</label>
        <input
          type="text"
          className="edit-modal__input"
          value={linkedin}
          onChange={e => setLinkedin(e.target.value)}
        />
      </div>
      <div className="edit-modal__basic-info">
        <label className="edit-modal__label">Portfolio Link</label>
        <input
          type="text"
          className="edit-modal__input"
          value={portfolioLink}
          onChange={e => setPortfolioLink(e.target.value)}
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
    setYearsExperience,
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
              <div className="edit-modal__skill-content">
                <div className="edit-modal__skill-wrapper">
                  <label className="edit-modal__label">Skill</label>
                  <input
                    type="text"
                    name="skillName"
                    className="edit-modal__input-skill"
                    value={skill.skillName}
                    readOnly
                  />
                </div>
                <div className="edit-modal__skill-wrapper">
                  <label className="edit-modal__label">
                    Years of Experience
                  </label>
                  <input
                    type="text"
                    name="yearsExperience"
                    className="edit-modal__input-skill"
                    value={skill.yearsExperience}
                    readOnly
                  />
                </div>
              </div>
              <button
                type="button"
                className="edit-modal__delete-skill"
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
              value={newSkill.skillName}
              onChange={e =>
                setNewSkill({ ...newSkill, skillName: e.target.value })
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
              name="yearsExperience"
              value={yearsExperience}
              onChange={e => setYearsExperience(Number(e.target.value))}
            >
              {yearsOptions.map((year: number) => (
                <option key={year} value={year}>
                  {year} {year <= 1 ? 'Year' : 'Years'} of Experience
                </option>
              ))}
            </select>
          </div>
          <button
            type="button"
            className="edit-modal__add-skill-button"
            onClick={() => handleAddSkill()}
          >
            Add Skill
          </button>
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
      {/* <label className="edit-modal__label">Portfolio</label> */}
      <div className="edit-modal__portfolio">
        {projects.map((project: any, index: number) => (
          <div key={index} className="edit-modal__portfolio-item">
            <form className="edit-modal__portfolio-info">
              <input
                type="text"
                name="projectName"
                className="edit-modal__project-input"
                value={project.project_name}
                readOnly
              />
              <button
                type="button"
                className="edit-modal__edit-button"
                onClick={() => handleEditProject(index)}
              >
                <img src={editIcon} alt="" />
              </button>
            </form>
          </div>
        ))}
        <button
          type="button"
          className="edit-modal__add-project"
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
