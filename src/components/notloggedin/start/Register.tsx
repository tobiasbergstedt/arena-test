import LeftRaces from './LeftRaces';
import RegisterForm from './RegisterForm';
import './Start.css'

const Start = () => {

  return (
    <section className='start'>
      <LeftRaces />
      <div className='right'>
        <RegisterForm />
      </div>
    </section>
  )
}

export default Start
