import { Link } from "react-router-dom"
import ReturnButton from "./ReturnButton"


const RegisterForm = () => {

  let formArray = [
    {placeholder: 'Team name (4-20 characters)', inputType: 'text', icon: 'fa fa-shield-halved fa-lg fa-fw'},
    {placeholder: 'User name', inputType: 'text', icon: 'fa fa-user-tie fa-lg fa-fw'},
    {placeholder: 'First name', inputType: 'text', icon: 'fa fa-user fa-lg fa-fw'},
    {placeholder: 'Last name', inputType: 'text', icon: 'fa fa-user fa-lg fa-fw'},
    {placeholder: 'Email', inputType: 'email', icon: 'fa fa-envelope fa-lg fa-fw'},
    {placeholder: 'Confirm email', inputType: 'email', icon: 'fa fa-envelope fa-lg fa-fw'},
    {placeholder: 'Password', inputType: 'password', icon: 'fa fa-lock fa-lg fa-fw'},
    {placeholder: 'Confirm password', inputType: 'password', icon: 'fa fa-lock fa-lg fa-fw'}
  ]

  return (
    <div className='login-form'>
      <ReturnButton />
      <h2>Create your account</h2>
      <div className="inputWithIcon">
        <select className='login-input' name="race" defaultValue={'default'}>
          <option value="default" disabled hidden>Choose your teams race</option>
          <option value="humans">Humans</option>
          <option value="elves">Elves</option>
          <option value="dwarves">Dwarves</option>
          <option value="Orcs">Orcs</option>
        </select>
        <i className="fa fa-people-group fa-lg fa-fw" aria-hidden="true"></i>
      </div>
      {formArray ? formArray.map(({placeholder, inputType, icon}) => (
        <div key={placeholder} className="inputWithIcon">
          <input type={inputType} className='login-input' placeholder={placeholder} />
          <i className={icon} aria-hidden="true"></i>
        </div>
      )): <div> No data yet. </div>}
      <button>Create team</button>
      <button>Reset form</button>
    </div>
  )
}

export default RegisterForm
