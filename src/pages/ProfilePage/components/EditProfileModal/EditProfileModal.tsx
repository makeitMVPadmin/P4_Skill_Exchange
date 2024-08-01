import './EditProfileModal.scss'
import { useState, useEffect } from 'react'
import { UserData, Skill, ProjectDetails } from '@/src/interfaces/types'
import {
  showBasicInfo,
  showPortfolio,
  showSkills,
  EditProject
} from './EditProfileModalComponents/EditProfileSections'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  setUserData,
  createNewProject,
  editProject
} from '@/src/utils/Firebase'
import projectData from '@/src/data/dummy_data_extended.json'

interface EditProfileModalProps {
  isOpen: boolean
  onClose: () => void
  userData: UserData
  onSave: (updatedData: UserData) => void
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({
  isOpen,
  onClose,
  userData,
  onSave
}) => {
  if (!isOpen) return null

  const [activeTab, setActiveTab] = useState('basicInfo')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [title, setTitle] = useState('')
  const [tagline, setTagline] = useState('')
  const [bio, setBio] = useState('')
  const [github, setGithub] = useState('')
  const [linkedin, setLinkedin] = useState('')
  const [portfolioLink, setPortfolioLink] = useState('')
  const [ownSkills, setOwnSkills] = useState<Skill[]>([])
  const [newSkill, setNewSkill] = useState<Skill>({
    skillName: '',
    yearsExperience: 0
  })

  const [projects, setProjects] = useState<ProjectDetails[]>(
    projectData.users[0]?.projects ?? []
  )
  const [editingProject, setEditingProject] = useState<any>(null)

  const [yearsExperience, setYearsExperience] = useState<number>(1)

  const yearsOptions = Array.from({ length: 31 }, (_, i) => i + 1)

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
    // setProjects(userData.projects)
  }, [userData])

  // Add skill handler

  const handleAddSkill = () => {
    console.log('New Skill', newSkill)
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

      console.log('Skill to Add', skillToAdd)

      setNewSkill({ skillName: '', yearsExperience: 0 })
      setYearsExperience(1)
      toast.success('Skill added successfully.')
    }
  }

  const handleDeleteSkill = (index: number) => {
    setOwnSkills(ownSkills.filter((_, i) => i !== index))
  }

  // const handleEditProject = (index: number) => {
  //   setEditingProject({ ...projects[index], index })
  // }

  const handleAddProject = () => {
    setEditingProject({
      project_name: '',
      project_description: '',
      project_url: '',
      index: -1
    })
  }

  // Save project handler will determin if we are adding a new project or editing an existing one
  const handleSaveProject = () => {
    const updatedProjects = [...projects]
    if (editingProject.index === -1) {
      updatedProjects.push(editingProject)
    } else {
      updatedProjects[editingProject.index] = editingProject
    }
    setProjects(updatedProjects)
    setEditingProject(null)
  }

  // Cancel edit project handler
  const cancelEdit = () => {
    setEditingProject(null)
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
      await setUserData(userData.id, {
        firstName,
        lastName,
        tagline,
        title,
        bio: bio || '',
        github: github || '',
        linkedin: linkedin || '',
        portfolioLink: portfolioLink || '',
        skills: ownSkills
      })
      onSave(updatedData)
      toast.success('Profile Updated.')
    } catch (error) {
      toast.error('Error updating profile.')
    }
  }

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

        <form className="edit-modal__form" onSubmit={handleSubmit}>
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
            showPortfolio({ projects, handleAddProject, handleEditProject })}
          {activeTab === 'portfolio' && editingProject && (
            <EditProject
              project={editingProject}
              setProject={setEditingProject}
              handleSaveProject={handleSaveProject}
              handleCancelEdit={cancelEdit}
            />
          )}

          <button type="submit" className="edit-modal__submit-button">
            Update
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditProfileModal
