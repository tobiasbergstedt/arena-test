import './LoginForm.css'
import { useState , useContext} from 'react'
import { Link } from 'react-router-dom'
import LoggedInContext, { LoggedIn } from '../../../contexts/LoggedInContext'

const LoginForm = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const {isLoggedIn, toggleIsLoggedIn}: LoggedIn = useContext(LoggedInContext)

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className='login-form'>
      <h2>Login to your team</h2>
      <div className="inputWithIcon">
        <input type="text" className='login-input' placeholder="User name" />
        <i className="fa fa-user fa-lg fa-fw" aria-hidden="true"></i>
      </div>
      <div className="inputWithIcon">
        <input type={passwordShown ? "text" : "password"} className='login-input' placeholder="Password" />
        <i className="fa fa-lock fa-lg fa-fw" id='password-lock' aria-hidden="true"></i>
        { passwordShown === true ? <span className="fas fa-eye-slash fa-lg fa-fw"aria-hidden="true" onClick={togglePassword}></span> : <span className="fas fa-eye fa-lg fa-fw" aria-hidden="true" onClick={togglePassword}></span> }
      </div>
      <div className='check-forgot'>
        <div className='check-remember'>
          <input type="checkbox" name="remember" id="remember" />
          <label htmlFor="remember" className='remember-label'>Remember me</label>
        </div>
        <Link to='/forgot-password'><p className='forgot-password'>Forgot password?</p></Link>
      </div>
      <button onClick={toggleIsLoggedIn}>Sign in</button>
    </div>
  )
}

export default LoginForm
