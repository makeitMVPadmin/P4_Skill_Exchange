import './EditButton.scss'
import editIcon from '@/src/assets/Icons/Edit.svg'

function EditButton(props: any) {
  return (
    <button className="edit-button" onClick={props.onClick}>
      <img className="edit-button__icon" src={editIcon} />
    </button>
  )
}

export default EditButton
