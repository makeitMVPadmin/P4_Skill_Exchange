import PlusIcon from '/icons/plus-icon.svg'
import './CreateProjectCard.scss'

interface CreateProjectCardProps {
  onCreateProject: () => void
}

const CreateProjectCard: React.FC<CreateProjectCardProps> = ({
  onCreateProject
}) => {
  return (
    <div className="create-project">
      <img src={PlusIcon} alt="plus-icon-outline" />
      <div className="create-project__text">
        <h1>Need Help? Create a Project</h1>
        <p>
          Find skilled talent to bring your ideas to life by creating a post.
        </p>
      </div>
      <button className="create-project__button" onClick={onCreateProject}>
        Create Project
      </button>
    </div>
  )
}

export default CreateProjectCard
