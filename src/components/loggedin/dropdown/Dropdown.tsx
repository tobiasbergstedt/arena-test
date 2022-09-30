import './Dropdown.css'
import { fixUrl } from '../../../utils'

import { useState, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import LoggedInContext, { LoggedIn } from '../../../contexts/LoggedInContext'
import { useRecoilState } from 'recoil'
import TabsAtom from '../../../atoms/TabsAtom'

const DropDown = () => {
  const [tab, setTab] = useRecoilState<string>(TabsAtom)
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const [isUserMenuExpanded, setIsUserMenuExpanded] = useState(false)
  const {isLoggedIn, toggleIsLoggedIn}: LoggedIn = useContext(LoggedInContext)

  let menuItems = [
    {link: '/', text: 'Home', tablink: 'home'},
    {link: '/news', text: 'News', tablink: 'news'},
    {link: '/leagues', text: 'Leagues', tablink: 'leaguesystem'},
    {link: '/world', text: 'The World', tablink: 'world'},
    {link: '/search', text: 'Search', tablink: 'search'},
    {link: '/livechat', text: 'LiveChat', tablink: 'livechat'},
    {link: '/tipsextra', text: 'Tipsextra', tablink: 'tipsextra'},
    {link: '/statistics', text: 'Statistics', tablink: 'statistics'},
    {link: '/rules', text: 'Rules', tablink: 'rules'},
    {link: '/contact', text: 'Contact', tablink: 'contact'}
  ]

  let checkIfEnter = (target:any, tablink:string) => {
    if (target.which == 13) {
      setTab(tablink)
    }
  }

  return (
    <>
      <div className='header'>
      {/* <div className='header' style={{ backgroundImage: `url(${fixUrl('/assets/' + 'no-hamster.png')})` }}> */}
        <div className='left'>
        </div>
        <div className='center'>
          <Link to='/'><img src={fixUrl('/assets/' + 'header.png')} alt='Header image with Hamster Wars logo.' /></Link>
        </div>
        <div className='right'>
          <div className='user'>
            <div className={isUserMenuExpanded ? 'user-name user-name-expanded' : 'user-name'} tabIndex={0} onClick={() => {setIsUserMenuExpanded(!isUserMenuExpanded)}}>
              {/* <img src={fixUrl('/assets/icons/profile.svg')} /> */}
              <p><img src={fixUrl('/assets/icons/profile.svg')} />mrBandy</p>
              {isUserMenuExpanded ? <p>&#9650;</p> : <p>&#9660;</p>}
            </div>
            {isUserMenuExpanded ?
            <div className='user-menu'>
              <p>My account</p>
              <p>Settings</p>
              <p onClick={toggleIsLoggedIn}>Log out</p>
            </div>
            :
            <></>}
          </div>
          <div className='date-time-online'>
            <p>173 online</p>
            <p>2022-07-28 22:43:25</p>
          </div>
        </div>
      </div>
      <nav className='navigation'>
        <button className='hamburger' onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}>
          {/* icon from heroicons.com */}
          <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='white' strokeWidth={2}>
            <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
          </svg>
        </button>
        {/* <div
          className={ isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu' }>
          <ul>
            {menuItems.map(({link, text}) => {return <li key={text}><NavLink to={link} onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}> {text} </NavLink></li>})}
          </ul>
        </div> */}
        <div
          className={ isNavExpanded ? 'main-menu expanded' : 'main-menu' }>
          <div className='menu-list'>
            {menuItems.map(({link, text, tablink}) => {return <div key={text} className={tablink === tab ? 'menu-item active' : 'menu-item'} onKeyDown={(target) => {checkIfEnter(target, tablink)}} onClick={() => {isNavExpanded ? () => {
            setIsNavExpanded(!isNavExpanded);
          } : () => {}; setTab(tablink)}} tabIndex={0}> {text} </div>})}
          </div>
        </div>
      </nav>
    </>
  )
}

export default DropDown
