export type JobDetail = {
  id: number;
  name: string;
  created_date: string;
  assigned_date: string;
  closed_date: null;
  category: string;
  points_value: string;
  job_owner: number;
  assign_user: number;
  job_tags: string[];
  job_description: string;
  interested_users: number[];
  job_status: string;
};

export type TaskPosterProps = {
  createdDate: string;
  jobOwner: number;
}

export type ButtonProps = {
  text?: string;
  variant?: string;
  onClick: () => void;
}