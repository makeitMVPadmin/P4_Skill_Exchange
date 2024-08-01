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
  id: string
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
