import { useNavigate } from "react-router-dom";

interface ButtonType {
type?: "button" | "submit" | "reset",
className: string,
children: string,
onClick?: () => void,
}

function Button({type = "button", className, children, ...rest}: ButtonType) {
  return <button type={type} className={className} {...rest}>{children}</button>
}

export default Button