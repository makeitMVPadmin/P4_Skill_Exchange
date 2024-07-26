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
  skill_name: string
  years_experience: number
}

// export interface UserData {
//   //   id: number;
//   profilephoto_link: string
//   first_name: string
//   last_name: string
//   email: string
//   user_profile: string
//   title: string
//   bio: string
//   interested_skills: string[]
//   own_skills: Skill[]
//   projects?: ProjectDetails[]
// }
