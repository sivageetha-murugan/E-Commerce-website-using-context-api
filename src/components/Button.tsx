import "../scss/button.css";
interface ButtonType {
  type?: "button" | "submit" | "reset";
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  variant?: string;
  disabled?: boolean;
}

function Button({ type, className, children, variant, ...rest }: ButtonType) {
  return (
    <button type={type} className={`${variant} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
