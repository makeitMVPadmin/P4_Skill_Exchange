export interface ProjectDetails {
  project_id: number;
  project_name: string;
  project_image: string;
  project_description: string;
  project_url: string;
  user_id: number;
}

export interface Skill {
  skill_name: string;
  years_experience: number;
}

export interface UserData {
  // id: number;
  profilephoto_link: string;
  first_name: string;
  last_name: string;
  email: string;
  user_profile: string;
  title: string;
  bio: string;
  interested_skills: string[];
  own_skills: Skill[];
  projects?: ProjectDetails[];
}
