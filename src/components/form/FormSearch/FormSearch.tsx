import './FormSearch.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

interface Props {
  inputRef?: React.RefObject<HTMLInputElement>;
  name: string,
  value?: string,
  defaultValue?: string,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  placeholder?: string,
}


export const FormSearch = ({ inputRef, name, value, defaultValue, onChange, placeholder = 'Search...' }: Props) => {
 
  return (
    <div className='form-search'>
      <input 
        ref={inputRef}
        className='form-search__input' 
        type='search'
        name={name}
        placeholder={placeholder} 
        autoComplete='off'
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
      />

      <button type='submit' className='form-search__btn'>
        <SearchOutlinedIcon />
      </button>
    </div>
  )
}