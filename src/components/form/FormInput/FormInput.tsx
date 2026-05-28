import './FormInput.css'

interface Props {
  inputRef?: React.RefObject<HTMLInputElement>;
  type: string,
  name: string,
  value?: string,
  defaultValue?: string,
  placeholder?: string,
  autocomplete?: string,
  variant?: 'default' | 'comment'
  errors?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
}


export const FormInput = ({ inputRef, type, name, value, defaultValue, autocomplete = 'off', placeholder, errors, variant = 'default', onChange }: Props) => {
  
  return (
    <div className='form-input'>
      <input 
        ref={inputRef}
        type={type}
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        className={`form-input__input form-input__input--${variant}`} 
        autoComplete={autocomplete}
        placeholder={placeholder}
      />

      { (errors) &&
        <p className={`form-input__error`}>{errors}</p>
      }
    </div>
  )
}