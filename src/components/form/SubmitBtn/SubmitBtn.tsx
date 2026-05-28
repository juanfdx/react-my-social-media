import './SubmitBtn.css'

interface Props {
  text: string
  isSubmitting: boolean
}


export const SubmitBtn = ({ text, isSubmitting }: Props) => {
  return (
    <button 
      type="submit" 
      className={`submit-btn ${(isSubmitting) ? 'submit-btn--submitting' : ''}`} 
      disabled={isSubmitting}
    >
      {isSubmitting ? 'Sending...' : text}
    </button>
  )
}