import { Timestamp } from 'firebase/firestore'

export interface UserData {
  id: string
  firstName: string
  lastName: string
  email: string
  profilePhoto: string
  tagline: string
  github: string
  linkedin: string
  portfolioLink: string
  bio: string
  location: string
  discipline: string
  dob: Timestamp
  createdAt: Timestamp
  updatedAt: Timestamp
  lastLogin: Timestamp
  industry: string
  experience: number
  expertise: string
  interests: string[]
  skills: Skill[]
}

export interface Job {
  id: string
  usedID: string
  categories: string[]
  title: string
  header: string
  about: string
  description: string
  thumbnail: string
  assignedUser: string
  status: number
  createdAt: number
  updatedAt: number
  jobDuration: number
  jobSkills: string[]
  questions: number
}

export interface UpdatedData {
  id: string
  firstName: string
  lastName: string
  email: string
  profilePhoto: string
  tagline: string
  github: string
  linkedin: string
  portfolioLink: string
  bio: string
  location: string
  discipline: string
  dob: Timestamp
  createdAt: Timestamp
  updatedAt: Timestamp
  lastLogin: Timestamp
  industry: string
  experience: number
  expertise: string
  interests: string[]
  skills: Skill[]
}

export interface ProjectDetails {
  id?: string
  userID: string
  title: string
  thumbnail: string
  description: string
  url: string
}

export interface Skill {
  skillName: string
  yearsExperience: number
}

export interface TaskPosterProps {
  createdDate: string
  jobOwner: string
}

export interface applyJobPropTypes {
  isProjectCardModalOpen: boolean
  onClose: () => void
  onViewMoreProjects: () => void
  jobId: string
  taskTitle: string
  userId: string
  questions: string[]
  children?: React.ReactNode
}
export interface Answer {
  id: number
  [key: number]: string
}
