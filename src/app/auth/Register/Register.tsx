import './Register.css'
import { Form, Link } from 'react-router-dom'
import { FormInput } from '../../../components/form/FormInput/FormInput'
import { SubmitBtn } from '../../../components/form/SubmitBtn/SubmitBtn'


export const Register = () => {

  return (
    <section className='register'>
      <div className="register__container">

        <Form method='POST' id='register-form'>
          <h1 className="register__h1">Register</h1>

          <div className='register-input-group'>
            <FormInput 
              name='email' 
              type='email' 
              placeholder='Email' 
            />
          </div>

          <div className='register-input-group'>
            <FormInput 
              name='password' 
              type='password' 
              placeholder='Password' 
              // errors='error'
            />
          </div>

          <FormInput 
            name='confirmPassword' 
            type='password' 
            placeholder='Confirm Password' 
            // errors='error'
          />

          <SubmitBtn text='Register' isSubmitting={false} />

          {/* GO TO REGISTER */}
          <p className='register__p'>
            Already a member?
            <Link  to="/auth/login" className="register__link">Login</Link>
          </p>
        </Form>

      </div>
    </section>
  )
}