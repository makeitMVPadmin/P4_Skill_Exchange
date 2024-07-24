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
  const [userProfile, setUserProfile] = useState(userData.user_profile)
  const [bio, setBio] = useState('')
  const [ownSkills, setOwnSkills] = useState<Skill[]>(userData.own_skills)
  const [newSkill, setNewSkill] = useState<Skill>({
    skill_name: '',
    years_experience: 0
  })
  const [projects, setProjects] = useState<ProjectDetails[]>(
    userData.projects || []
  )
  const [editingProject, setEditingProject] = useState<any>(null)

  const [yearsExperience, setYearsExperience] = useState<number>(1)

  const yearsOptions = Array.from({ length: 31 }, (_, i) => i + 1)

  useEffect(() => {
    setFirstName(userData.first_name)
    setLastName(userData.last_name)
    setTitle(userData.title)
    setBio(userData.bio)
    setUserProfile(userData.user_profile)
    setOwnSkills(userData.own_skills)
    setProjects(userData.projects)
  }, [userData])

  // Add skill handler

  const handleAddSkill = () => {
    if (!newSkill.skill_name) {
      toast.warning('Please select a skill.')
      return
    }

    if (ownSkills.some(skill => skill.skill_name === newSkill.skill_name)) {
      toast.warning('This skill is already added.')
    } else {
      const skillToAdd = { ...newSkill, years_experience: yearsExperience }
      setOwnSkills([...ownSkills, skillToAdd])
      setNewSkill({ skill_name: '', years_experience: 0 })
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

  const handleAddProject = () => {
    setEditingProject({
      project_name: '',
      project_description: '',
      project_url: '',
      index: -1
    })
  }

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

  const cancelEdit = () => {
    setEditingProject(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const updatedData: UserData = {
      id: userData.id,
      profilephoto_link: userData.profilephoto_link,
      first_name: firstName,
      last_name: lastName,
      email: userData.email,
      user_profile: userProfile,
      title,
      bio,
      interested_skills: userData.interested_skills,
      own_skills: ownSkills,
      projects: projects
    }
    onSave(updatedData)
    toast.success('Profile Updated.')
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
              userProfile,
              setUserProfile,
              title,
              setTitle,
              bio,
              setBio
            })}
          {activeTab === 'skills' &&
            showSkills({
              ownSkills,
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
            Save Changes
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditProfileModal
