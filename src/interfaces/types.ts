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

export interface UserUpdateData {
  firstName: string
  lastName: string
  tagline: string
  title: string
  bio: string
  github: string
  linkedin: string
  portfolioLink: string
  skills: string[]
}

export interface ProjectDetails {
  project_id: number
  project_name: string
  project_image: string
  project_description: string
  project_url: string
  user_id: number
}

export interface Skill {
  skillName: string
  yearsExperience: number
}
