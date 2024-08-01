import { createNewProject } from '@/src/utils/Firebase'

export const CreateProjectsButton: React.FC = () => {
  const userID = 'UID99993230'

  const projectsData = [
    {
      title: 'Portfolio Website',
      thumbnail:
        'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwfGVufDB8fDB8fHww',
      description: 'A personal portfolio website to showcase projects.',
      url: 'https://via.placeholder.com/150'
    },
    {
      title: 'E-commerce App',
      thumbnail:
        'https://images.unsplash.com/photo-1617777938240-9a1d8e51a47d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFwcHxlbnwwfHwwfHx8MA%3D%3D',
      description: 'A mobile application for e-commerce.',
      url: 'https://via.placeholder.com/150'
    },
    {
      title: 'Social Media Platform',
      thumbnail:
        'https://images.unsplash.com/photo-1613288092085-eb081fde1509?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGFwcHxlbnwwfHwwfHx8MA%3D%3D',
      description: 'A platform to connect people with similar interests.',
      url: 'https://via.placeholder.com/150'
    },
    {
      title: 'Task Management Tool',
      thumbnail:
        'https://images.unsplash.com/photo-1585282263872-36fa5ae76e60?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGFwcHxlbnwwfHwwfHx8MA%3D%3D',
      description: 'A tool to manage and track tasks.',
      url: 'https://via.placeholder.com/150'
    },
    {
      title: 'Blog Website',
      thumbnail:
        'https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGFwcHxlbnwwfHwwfHx8MA%3D%3D',
      description: 'A website to share and publish blogs.',
      url: 'https://via.placeholder.com/150'
    },
    {
      title: 'Fitness Tracking App',
      thumbnail:
        'https://plus.unsplash.com/premium_photo-1667509259690-d393766a5249?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'An app to track and monitor fitness activities.',
      url: 'https://via.placeholder.com/150'
    },
    {
      title: 'Recipe Sharing Platform',
      thumbnail:
        'https://plus.unsplash.com/premium_photo-1666920345410-8c9ca9b3c318?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'A platform to share and discover new recipes.',
      url: 'https://via.placeholder.com/150'
    }
  ]

  const createProjects = async () => {
    try {
      for (const project of projectsData) {
        const projectID = await createNewProject(
          userID,
          project.title,
          project.thumbnail,
          project.description,
          project.url
        )
        console.log('Created project with ID:', projectID)
      }
    } catch (error) {
      console.error('Error creating projects:', error)
    }
  }

  return (
    <div>
      <button onClick={createProjects}>Create Projects</button>
    </div>
  )
}
