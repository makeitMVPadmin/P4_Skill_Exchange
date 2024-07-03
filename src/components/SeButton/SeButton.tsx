import { ButtonProps } from "@/src/types";
import "./SeButton.scss";

function Button({ text, variant, onClick } : ButtonProps) {
  return (
    <div 
      className={`c_button ${ variant == 'outline' && "c_button-outline" }`}
      onClick={onClick}
    >
      { text }
    </div>
  )
}

export default Button