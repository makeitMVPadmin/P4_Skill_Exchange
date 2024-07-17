export interface ProjectDetails {
  project_name: string;
  project_image: string;
  project_description: string;
  project_url: string;
}

export interface UserData {
  profilephoto_link: string;
  first_name: string;
  last_name: string;
  email: string;
  user_profile: string;
  title: string;
  bio: string;
  interested_skills: string[];
  own_skills: string[];
  projects: ProjectDetails[];
}
