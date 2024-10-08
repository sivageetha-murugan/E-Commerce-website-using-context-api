import { Input } from "../type/Type";

function InputField({ type, className, placeholder = "", ...rest }: Input) {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      {...rest}
    />
  );
}

export default InputField;
