import "./EditButton.scss";

function EditButton(props: any) {
  return (
    <button className="edit-button" onClick={props.onClick}>
      Edit Profile
    </button>
  );
}

export default EditButton;
