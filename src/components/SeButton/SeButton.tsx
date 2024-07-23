import { ButtonProps } from "@/src/types";
import "./SeButton.scss";

function Button({ text, variant, onClick, iconLeft, iconRight, colorScheme, style } : ButtonProps) {
  return (
    <div 
      className={`c_button ${ variant == 'outline' && "c_button-outline" }`}
      onClick={onClick}
      style={{
        ...style,
        backgroundColor: colorScheme
      }}
    >
     { iconLeft } { text } { iconRight }
    </div>
  )
}

export default Button