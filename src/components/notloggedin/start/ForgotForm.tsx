import { Link } from "react-router-dom"
import './ForgotForm.css'
import ReturnButton from "./ReturnButton"


const RegisterForm = () => {

  return (
    <div className='forgot-form'>
      <ReturnButton />
      <h2>Forgot your password?</h2>
      <p>Fill in either email or user name to get a reset link sent to your email.</p>
      <div className="inputWithIcon">
        <input type="text" className='forgot-input' placeholder="Email" />
        <i className="fa fa-envelope fa-lg fa-fw" aria-hidden="true"></i>
      </div>
      <div className="inputWithIcon">
        <input type="text" className='forgot-input' placeholder="User name" />
        <i className="fa fa-user fa-lg fa-fw" id='password-lock' aria-hidden="true"></i>
      </div>
      <button>Send</button>
    </div>
  )
}

export default RegisterForm
