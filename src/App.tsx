import { useState } from 'react'
import './App.css'
import { Navigate, Routes, Route } from 'react-router-dom'
import Home from './components/loggedin/home/Home'
import Start from './components/notloggedin/start/Start'
import NotFound from './components/notfound/NotFound'
import DropDown from './components/loggedin/dropdown/Dropdown'
import DropDown2 from './components/notloggedin/dropdown/Dropdown'
import MyFooter from './components/loggedin/footer/MyFooter'
import MyFooter2 from './components/notloggedin/footer/MyFooter'
import { fixUrl } from './utils'
import Register from './components/notloggedin/start/Register'
import ForgotPassword from './components/notloggedin/start/ForgotPassword'
import LoggedInContext, { LoggedIn } from './contexts/LoggedInContext'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const LoggedInObject: LoggedIn = {
    isLoggedIn: isLoggedIn,
    toggleIsLoggedIn: () => {
      if (isLoggedIn === false) {
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }
    }
  }

  return (
    <LoggedInContext.Provider value={LoggedInObject}>
      {isLoggedIn ?
        <div className='app'>
        <header>
          <DropDown />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/news' element={<Home />} />
            <Route path='/leagues' element={<Home />} />
            <Route path='/world' element={<Home />} />
            <Route path='/search' element={<Home />} />
            <Route path='/livechat' element={<Home />} />
            <Route path='/tipsextra' element={<Home />} />
            <Route path='/statistics' element={<Home />} />
            <Route path='/rules' element={<Home />} />
            <Route path='/contact' element={<Home />} />
            <Route path='*' element={<Navigate to='/404' />
  } />
            <Route path='/404' element={<NotFound />} />
          </Routes>
        </main>
        <footer>
          <MyFooter />
        </footer>
      </div>
      :
      <div className='app'>
      <header>
        <DropDown2 />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Start />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<Navigate to='/404' />
  } />
          <Route path='/404' element={<NotFound />} />
        </Routes>
      </main>
      <footer>
        <MyFooter2 />
      </footer>
    </div>}
    </LoggedInContext.Provider>

  )
}

export default App
