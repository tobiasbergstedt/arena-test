import './Dropdown.css'
import { fixUrl } from '../../../utils'

import { Link, NavLink } from 'react-router-dom'

const DropDown = () => {

  return (
    <div className='start-header'>
      <div className='left'>
      </div>
      <div className='center'>
        <Link to='/'><img src={fixUrl('/assets/' + 'header.png')} alt='Header image with Hamster Wars logo.' /></Link>
      </div>
      <div className='right'>
        <div className='user'>
        </div>
        <div className='date-time-online'>
          <p>173 online</p>
          <p>2022-07-28 21:43:15</p>
        </div>
      </div>
    </div>
  )
}

export default DropDown
