import { Link } from "react-router-dom"
import LoginForm from "./LoginForm"


const Login = () => {

  return (
    <>
      <LoginForm />
      <table className='divider-table'>
        <tbody>
        <tr>
          <td><hr /></td>
          <td className='divider'>or</td>
          <td><hr /></td>
        </tr>
        </tbody>
      </table>
      <div className='to-create'>
        <p>Don’t have a team yet? Create an account to join the fight for the Koodudorf Cup!</p>
        <Link to='/register'><button>Create account</button></Link>
      </div>
    </>
  )
}

export default Login
