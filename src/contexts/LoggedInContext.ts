import {createContext} from 'react'

export interface LoggedIn {
  isLoggedIn: boolean;
  toggleIsLoggedIn: () => void;
}

const LoggedInContext = createContext<LoggedIn>({
  isLoggedIn: false,
  toggleIsLoggedIn: () => {}
})

export default LoggedInContext
