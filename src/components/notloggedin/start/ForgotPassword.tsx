import { useState } from 'react';
import Left from './Left';
import ForgotForm from './ForgotForm';
import './Start.css'

const ForgotPassword = () => {

  return (
    <section className='start'>
      <Left />
      <div className='right'>
        <ForgotForm />
      </div>
    </section>
  )
}

export default ForgotPassword
