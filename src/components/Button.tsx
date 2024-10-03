import "../scss/button.css";
interface ButtonType {
  type?: "button" | "submit" | "reset";
  className?: string;
  children: string;
  onClick?: () => void;
  variant?: string;
}

function Button({
  type = "button",
  className = "",
  children,
  variant,
  ...rest
}: ButtonType) {
  return (
    <button type={type} className={`${variant} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
