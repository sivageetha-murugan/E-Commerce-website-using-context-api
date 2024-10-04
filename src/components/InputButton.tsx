interface Input {
  type: string, 
  classList: string, 
  placeholder: string
  required?: boolean
}

function InputButton({type, classList, placeholder, ...rest}: Input) {
  return (
   <>
   <input type={type} className={classList} placeholder={placeholder} {...rest} />
   </>
  )
}

export default InputButton