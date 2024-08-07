import './EditProfileModal.scss'
import { useState, useEffect } from 'react'
import { UserData, Skill, ProjectDetails } from '@/src/interfaces/types'
import {
  showBasicInfo,
  showPortfolio,
  showSkills,
  EditProject,
  AddProject
} from './EditProfileModalComponents/EditProfileSections'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  setUserData,
  createNewProject,
  editProject
} from '@/src/utils/Firebase'

interface EditProfileModalProps {
  isOpen: boolean
  onClose: () => void
  userData: UserData
  projects: ProjectDetails[]
  onDataUpdate: (
    updatedUserData: UserData,
    updatedProjects: ProjectDetails[]
  ) => void
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({
  isOpen,
  onClose,
  userData,
  projects: initialProjects,
  onDataUpdate
}) => {
  // tab state
  const [activeTab, setActiveTab] = useState('basicInfo')

  // Basic Info state
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [title, setTitle] = useState('')
  const [tagline, setTagline] = useState('')
  const [bio, setBio] = useState('')
  const [github, setGithub] = useState('')
  const [linkedin, setLinkedin] = useState('')
  const [portfolioLink, setPortfolioLink] = useState('')

  // Skills state
  const [ownSkills, setOwnSkills] = useState<Skill[]>([])
  const [yearsExperience, setYearsExperience] = useState<number>(1)
  const [newSkill, setNewSkill] = useState<Skill>({
    skillName: '',
    yearsExperience: 0
  })
  const yearsOptions = Array.from({ length: 31 }, (_, i) => i + 1)

  // Projects state
  const [projects, setProjects] = useState<ProjectDetails[]>(initialProjects)
  const [editingProject, setEditingProject] = useState<any>(null)
  const [isAddingProject, setIsAddingProject] = useState(false)
  const [projectName, setProjectName] = useState('')
  const [projectImage, setProjectImage] = useState('')
  const [projectDescription, setProjectDescription] = useState('')
  const [projectUrl, setProjectUrl] = useState('')

  useEffect(() => {
    setFirstName(userData.firstName)
    setLastName(userData.lastName)
    setTitle(userData.discipline)
    setBio(userData.bio)
    setTagline(userData.tagline)
    setGithub(userData.github)
    setLinkedin(userData.linkedin)
    setPortfolioLink(userData.portfolioLink)
    setOwnSkills(userData.skills)
    setProjects(initialProjects)
  }, [userData, initialProjects])

  // Add skill handler

  const handleAddSkill = () => {
    if (!newSkill.skillName) {
      toast.warning('Please select a skill.')
      return
    }

    if (ownSkills.some(skill => skill.skillName === newSkill.skillName)) {
      toast.warning('This skill is already added.')
    } else {
      const skillToAdd = {
        skillName: newSkill.skillName,
        yearsExperience: yearsExperience
      }
      setOwnSkills([...ownSkills, skillToAdd])

      setNewSkill({ skillName: '', yearsExperience: 0 })
      setYearsExperience(1)
      toast.success('Skill added successfully.')
    }
  }

  const handleDeleteSkill = (index: number) => {
    setOwnSkills(ownSkills.filter((_, i) => i !== index))
  }

  const handleEditProject = (index: number) => {
    setEditingProject({ ...projects[index], index })
  }

  // Add project handler
  const addProject = async (project: ProjectDetails) => {
    try {
      if (!project.title || !project.description) {
        toast.warning('Please enter project name and description.')
        return
      }

      const projectID = await createNewProject(
        userData.id,
        project.title,
        project.thumbnail,
        project.description,
        project.url
      )
      setProjects([...projects, { ...project, id: projectID || '' }])
      toast.success('Project added successfully.')
    } catch (error) {
      console.error('Error adding project:', error)
      toast.error('Error adding project.')
    }
  }

  // Update project handler
  const updatedProject = async (project: ProjectDetails) => {
    try {
      if (
        !project.title ||
        !project.description ||
        !project.url ||
        !project.thumbnail
      ) {
        toast.warning('Please fill out all the forms.')
        return
      }

      const updatedData = {
        userID: userData.id,
        title: project.title,
        thumbnail: project.thumbnail,
        description: project.description,
        url: project.url
      }
      const projectID = await editProject(project.id, updatedData)
      const updatedProjects = projects.map(p =>
        p.id === project.id ? { ...p, ...project } : p
      )
      setProjects(updatedProjects)
      toast.success('Project updated successfully.')
    } catch (error) {
      console.error('Error updating project:', error)
      toast.error('Error updating project.')
    }
  }

  // Add project handler
  const handleAddProject = () => {
    setIsAddingProject(true)
    setEditingProject(null)
  }

  // Cancel edit project handler
  const cancelEdit = () => {
    setEditingProject(null)
    setIsAddingProject(false)
  }

  // Save changes handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const updatedData: UserData = {
      id: userData.id,
      firstName: firstName,
      lastName: lastName,
      email: userData.email,
      tagline: tagline,
      discipline: userData.discipline,
      bio: bio || '',
      skills: ownSkills,
      profilePhoto: userData.profilePhoto,
      github: github || '',
      linkedin: linkedin || '',
      portfolioLink: portfolioLink || '',
      location: userData.location || '',
      industry: userData.industry || '',
      expertise: userData.expertise || ''
    }
    try {
      await setUserData(userData.id, updatedData)
      onDataUpdate(updatedData, projects)
      toast.success('Profile Updated.')
      onClose()
    } catch (error) {
      toast.error('Error updating profile.')
    }
  }

  return (
    <div className="edit-modal">
      <div className="edit-modal__overlay" onClick={onClose}></div>
      <div className="edit-modal__content">
        <div className="edit-modal__header">
          <button className="edit-modal__close-button" onClick={onClose}>
            Close
          </button>
          <h2 className="edit-modal__title">Update Your Profile Details</h2>
          <div className="edit-modal__tabs">
            <button
              className={`edit-modal__tab ${
                activeTab === 'basicInfo' ? 'active' : ''
              }`}
              onClick={() => setActiveTab('basicInfo')}
            >
              Basic Info
            </button>
            <button
              className={`edit-modal__tab ${
                activeTab === 'skills' ? 'active' : ''
              }`}
              onClick={() => setActiveTab('skills')}
            >
              Skills
            </button>
            <button
              className={`edit-modal__tab ${
                activeTab === 'portfolio' ? 'active' : ''
              }`}
              onClick={() => setActiveTab('portfolio')}
            >
              Portfolio
            </button>
          </div>
        </div>

        <form className="edit-modal__form" onSubmit={handleSubmit}>
          <div className="edit-modal__body">
            {activeTab === 'basicInfo' &&
              showBasicInfo({
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
              })}
            {activeTab === 'skills' &&
              showSkills({
                ownSkills: ownSkills || [],
                setOwnSkills,
                newSkill,
                setNewSkill,
                handleAddSkill,
                handleDeleteSkill,
                yearsExperience,
                setYearsExperience,
                yearsOptions
              })}
            {activeTab === 'portfolio' &&
              !editingProject &&
              !isAddingProject &&
              showPortfolio({
                projects,
                handleEditProject,
                handleAddProject
              })}
            {activeTab === 'portfolio' && editingProject && (
              <EditProject
                // userId={userData.id}
                project={editingProject}
                setProject={setEditingProject}
                handleUpdateProject={updatedProject}
                handleCancelEdit={cancelEdit}
              />
            )}
            {activeTab === 'portfolio' && isAddingProject && (
              <AddProject
                userId={userData.id}
                handleAddProject={addProject}
                handleCancelEdit={cancelEdit}
              />
            )}
          </div>
          <div className="edit-modal__footer">
            <button type="submit" className="edit-modal__submit-button">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditProfileModal
