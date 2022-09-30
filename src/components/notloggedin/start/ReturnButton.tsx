import { Link } from 'react-router-dom'
import './ReturnButton.css'

const ReturnButton = () => {

  return(
    <div className='return-component'>
      <Link to='/'><p>Go back</p></Link>
      <Link to='/'><div className="return-arrow">
        <i className='fa fa-arrow-left fa-2xl fa-fw'></i>
      </div></Link>
    </div>
  )
}

export default ReturnButton
