import { useState, useEffect } from 'react'
import './index.scss'
import { createNewJob, getUserCreatedJobs } from '@/src/utils/Firebase'
import CreateProjectModal from './components/CreateProjectModal/CreateProjectModal'
import ProjectCard from './components/ProjectCard/ProjectCard'
import SearchCard from '@/src/components/Search/Search'
import CreateProjectCard from './components/CreateProjectCard/CreateProjectCard'

function SkillShare() {
  const [tabStatus, setTabStatus] = useState('seeker')
  const [projects, setProjects] = useState<Project[]>([])
  const [userCreatedProjects, setUserCreatedProjects] = useState<Project[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCreateProject = () => setIsModalOpen(true)
  const handleModalClose = () => setIsModalOpen(false)

  useEffect(() => {
    const fetchUserProjects = async () => {
      try {
        const userID = 'UID99993230'
        const userProjects = await getUserCreatedJobs(userID)
        setUserCreatedProjects(userProjects)
      } catch (error) {
        console.error('Error fetching user created projects:', error)
      }
    }

    fetchUserProjects()
  }, [])

  console.log(userCreatedProjects)

  const handleModalSubmit = async (project: any) => {
    const userID = 'UID99993230'
    const newJobId = await createNewJob(
      userID,
      project.title,
      project.description,
      project.jobSkills,
      project.header,
      project.thumbnail,
      project.jobDuration,
      [],
      project.categories
    )

    if (newJobId) {
      setProjects([...projects, { id: newJobId, ...project }])
      setIsModalOpen(false)
    }
  }

  return (
    <div className="c_skillshare">
      <div className="c_skillshare-header">
        <div className="c_skillshare-header__buttons">
          <button
            className={tabStatus == 'provider' ? 'provider-active' : ''}
            onClick={() => setTabStatus('provider')}
          >
            As a Skill Provider
          </button>
          <button
            className={tabStatus == 'seeker' ? 'seeker-active' : ''}
            onClick={() => setTabStatus('seeker')}
          >
            As a Talent Seeker
          </button>
        </div>
      </div>
      <div className="c_skillshare-search">
        <SearchCard name="search" handleSearchChange={() => {}} />
      </div>
      <div className="c_skillshare-projects">
        <div className="c_skillshare-projects__title">
          <h2>My Projects</h2>
        </div>
        {tabStatus == 'seeker' && (
          <>
            <div className="c_skillshare-projects-cards">
              <CreateProjectCard onCreateProject={handleCreateProject} />

              {userCreatedProjects.length > 0 ? (
                userCreatedProjects.map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))
              ) : (
                <p>No projects found. Start by creating a new project!</p>
              )}
            </div>
          </>
        )}
      </div>
      {isModalOpen && (
        <CreateProjectModal
          onClose={handleModalClose}
          onSubmit={handleModalSubmit}
        />
      )}
    </div>
  )
}

export default SkillShare
