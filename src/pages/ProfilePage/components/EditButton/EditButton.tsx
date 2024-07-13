import "./EditButton.scss";

type EditButtonProps = {
  onClick: () => void;
};

function EditButton(props: EditButtonProps) {
  return (
    <button className="edit-button" onClick={props.onClick}>
      Edit Profile
    </button>
  );
}

export default EditButton;
