import './Login.css'
import { Form, Link } from 'react-router-dom'
import { FormInput } from '../../../components/form/FormInput/FormInput'
import { SubmitBtn } from '../../../components/form/SubmitBtn/SubmitBtn'


export const Login = () => {
  
  return (
    <section className='login'>
      <div className="login__container">

        <Form method='POST' id='login-form'>
          <h1 className="login__h1">Login</h1>

          <div className='login__input-group'>
            <FormInput 
              name='email' 
              type='email' 
              placeholder='Email' 
              errors=''
            />
          </div>

          <FormInput 
            name='password' 
            type='password' 
            placeholder='Password' 
            // errors='error'
          />

          <SubmitBtn text='Login' isSubmitting={false} />

          {/* GO TO REGISTER */}
          <p className='login__p'>
            Not a member yet?
            <Link  to="/auth/register" className="login__link">Register</Link>
          </p>
        </Form>

      </div>
    </section>
  )
}