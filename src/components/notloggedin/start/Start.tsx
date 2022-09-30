import { useState } from 'react';
import Left from './Left';
import Login from './Login'
import './Start.css'

const Start = () => {

  return (
    <section className='start'>
      <Left />
      <div className='right'>
        <Login />
      </div>
    </section>
  )
}

export default Start
