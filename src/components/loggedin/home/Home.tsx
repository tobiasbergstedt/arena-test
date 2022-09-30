import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import TabsAtom from '../../../atoms/TabsAtom'
import { fixUrl } from '../../../utils'
import './Home.css'

import PageNotFound from './pagenotfound/PageNotFound'

import HomeTab from './tabs/hometab/HomeTab'
import NewsTab from './tabs/newstab/NewsTab'
import LeagueSystem from './tabs/leaguesystem/LeagueSystem'
import World from './tabs/world/World'
import Search from './tabs/search/Search'
import LiveChat from './tabs/livechat/LiveChat'
import Tipsextra from './tabs/tipsextra/Tipsextra'
import Statistics from './tabs/statistics/Statistics'
import Rules from './tabs/rules/Rules'
import Contact from './tabs/contact/Contact'

import MyTeam from './teamtabs/myteam/MyTeam'
import League from './teamtabs/league/League'
import Games from './teamtabs/games/Games'
import Challenges from './teamtabs/challenges/Challenges'
import Players from './teamtabs/players/Players'
import Messages from './teamtabs/messages/Messages'
import Finances from './teamtabs/finances/Finances'
import Marketplace from './teamtabs/marketplace/Marketplace'
import Magician from './teamtabs/magician/Magician'
import Physician from './teamtabs/physician/Physician'
import Artefacts from './teamtabs/artefacts/Artefacts'
import Tactics from './teamtabs/tactics/Tactics'
import Practise from './teamtabs/practise/Practise'
import Scouting from './teamtabs/scouting/Scouting'
import Stadium from './teamtabs/stadium/Stadium'
import Graveyard from './teamtabs/graveyard/Graveyard'
import Guru from './teamtabs/guru/Guru'
import Notes from './teamtabs/notes/Notes'
import Alarms from './teamtabs/alarms/Alarms'
import LeagueFixtures from './teamtabs/league/LeagueFixtures'

const Home = () => {
  const [tab, setTab] = useRecoilState<string>(TabsAtom)

  useEffect(() => {
    window.scrollTo({top: 0});
  },[tab])

  const HOME = 'home', NEWS = 'news', LEAGUESYSTEM = 'leaguesystem', WORLD = 'world', SEARCH = 'search', LIVECHAT = 'livechat', TIPSEXTRA = 'tipsextra', STATISTICS = 'statistics', RULES = 'rules', CONTACT = 'contact', CLUB = 'club', LEAGUE = 'league', GAMES = 'games', CHALLENGES = 'challenges', PLAYERS = 'players', MESSAGES = 'messages', FINANCES = 'finances', MARKETPLACE = 'marketplace', MAGICIAN = 'magician', PHYSICIAN = 'physician', ARTEFACTS = 'artefacts', TACTICS = 'tactics', PRACTISE = 'practise', SCOUTING = 'scouting', STADIUM = 'stadium', GRAVEYARD = 'graveyard', GURU = 'guru', NOTES = 'notes', ALARMS = 'alarms'

  let teamContent: JSX.Element = <HomeTab />

  if (tab === HOME) {
    teamContent = <HomeTab />
  } else if (tab === NEWS) {
    teamContent = <NewsTab />
  } else if (tab === LEAGUESYSTEM) {
    teamContent = <LeagueSystem />
  } else if (tab === WORLD) {
    teamContent = <World />
  } else if (tab === SEARCH) {
    teamContent = <Search />
  } else if (tab === LIVECHAT) {
    teamContent = <LiveChat />
  } else if (tab === TIPSEXTRA) {
    teamContent = <Tipsextra />
  } else if (tab === STATISTICS) {
    teamContent = <Statistics />
  } else if (tab === RULES) {
    teamContent = <Rules />
  } else if (tab === CONTACT) {
    teamContent = <Contact />
  } else if (tab === CLUB) {
    teamContent = <MyTeam />
  } else if (tab === LEAGUE) {
    teamContent = <League />
  } else if (tab === GAMES) {
    teamContent = <Games />
  } else if (tab === CHALLENGES) {
    teamContent = <Challenges />
  } else if (tab === PLAYERS) {
    teamContent = <Players />
  } else if (tab === MESSAGES) {
    teamContent = <Messages />
  } else if (tab === FINANCES) {
    teamContent = <Finances />
  } else if (tab === MARKETPLACE) {
    teamContent = <Marketplace />
  } else if (tab === MAGICIAN) {
    teamContent = <Magician />
  } else if (tab === PHYSICIAN) {
    teamContent = <Physician />
  } else if (tab === ARTEFACTS) {
    teamContent = <Artefacts />
  } else if (tab === TACTICS) {
    teamContent = <Tactics />
  } else if (tab === PRACTISE) {
    teamContent = <Practise />
  } else if (tab === SCOUTING) {
    teamContent = <Scouting />
  } else if (tab === STADIUM) {
    teamContent = <Stadium />
  } else if (tab === GRAVEYARD) {
    teamContent = <Graveyard />
  } else if (tab === GURU) {
    teamContent = <Guru />
  } else if (tab === NOTES) {
    teamContent = <Notes />
  } else if (tab === ALARMS) {
    teamContent = <Alarms />
  } else {
    teamContent = <PageNotFound />
  }

  const [fbkAverage, setFbkAverage] = useState<number>(0)
  const [ifkAverage, setIfkAverage] = useState<number>(0)

  const fbk = 66
  const ifk = 78

  const menuItems = {
    group1: [
      {tablink: CLUB, name: 'Frillesås BK', icon: 'club.svg'},
      {tablink: LEAGUE, name: 'Division 1 West Northlands', icon: 'league.svg'},
      {tablink: GAMES, name: 'Games', icon: 'games.svg'},
      {tablink: CHALLENGES, name: 'Challenges', icon: 'challenges.svg'},
      {tablink: PLAYERS, name: 'Players', icon: 'players.svg'}
    ],
    group2: [
      {tablink: MESSAGES, name: 'Messages', icon: 'messages.svg'},
      {tablink: FINANCES, name: 'Finances', icon: 'finances.svg'},
      {tablink: MARKETPLACE, name: 'Marketplace', icon: 'marketplace.svg'},
      {tablink: MAGICIAN, name: 'Magician', icon: 'magician.svg'},
      {tablink: PHYSICIAN, name: 'Physician', icon: 'physician.svg'},
      {tablink: ARTEFACTS, name: 'Artefacts', icon: 'artefacts.svg'}
    ],
    group3: [
      {tablink: TACTICS, name: 'Tactics', icon: 'tactics.svg'},
      {tablink: PRACTISE, name: 'Practise', icon: 'practise.svg'},
      {tablink: SCOUTING, name: 'Scouting', icon: 'scouting.svg'},
      {tablink: STADIUM, name: 'Stadium', icon: 'stadium.svg'},
      {tablink: GRAVEYARD, name: 'Graveyard', icon: 'graveyard.svg'}
    ],
    group4: [
      {tablink: GURU, name: 'Guru', icon: 'guru.svg'},
      {tablink: NOTES, name: 'Notes', icon: 'notes.svg'},
      {tablink: ALARMS, name: 'Alarms', icon: 'alarms.svg'}
    ]
  }

  const checkIfEnter = (target:any, tablink:string) => {
    if (target.which == 13) {
      setTab(tablink)
    }
  }

  return (
    <section className='home'>
      {/* <div className='live-chat' tabIndex={0}>
        <p>Latest chat messages:</p>
        <p>swede77 11:21  Ja, där slåss de som det inte skulle finnas någon morgondag.</p>
      </div> */}
      <div className='team-menu-content'>
        <div className='team-menu'>
          <div className='team-menu-inner'>
            <div className='team-logo'>
              <img draggable="false" onKeyDown={(target) => {checkIfEnter(target, 'club')}} onClick={() => {setTab('club')}} tabIndex={0} src={fixUrl('/assets/' + 'fbk.png')} alt='Your team logo.' />
            </div>
            <div className='team-menu-group team-menu-group1'>
              {menuItems.group1.map(({tablink, name, icon}) => {return <div key={tablink} className={tablink === tab ? 'team-menu-item active' : 'team-menu-item'} onKeyDown={(target) => {checkIfEnter(target, tablink)}} onClick={() => setTab(tablink)} tabIndex={0}><img src={fixUrl('/assets/icons/' + icon)} /><p>{name}</p></div>})}
            </div>
            <div className='team-menu-group'>
              {menuItems.group2.map(({tablink, name, icon}) => {return <div key={tablink} className='team-menu-item' onKeyDown={(target) => {checkIfEnter(target, tablink)}} onClick={() => setTab(tablink)} tabIndex={0}><img src={fixUrl('/assets/icons/' + icon)} />{name}</div>})}
            </div>
            <div className='team-menu-group'>
              {menuItems.group3.map(({tablink, name, icon}) => {return <div key={tablink} className='team-menu-item' onKeyDown={(target) => {checkIfEnter(target, tablink)}} onClick={() => setTab(tablink)} tabIndex={0}><img src={fixUrl('/assets/icons/' + icon)} />{name}</div>})}
            </div>
            <div className='team-menu-group'>
              {menuItems.group4.map(({tablink, name, icon}) => {return <div key={tablink} className='team-menu-item' onKeyDown={(target) => {checkIfEnter(target, tablink)}} onClick={() => setTab(tablink)} tabIndex={0}><img src={fixUrl('/assets/icons/' + icon)} />{name}</div>})}
            </div>
          </div>
        </div>
        <div className='team-content'>
          <div className='live-chat' tabIndex={0}>
            <p>Latest chat messages:</p>
            <p>swede77 11:21  Ja, där slåss de som det inte skulle finnas någon morgondag.</p>
          </div>
          <div className='content'>
            {/* <h2>Play game</h2>
            <p>IFK vs FBK</p>
            <button onClick={() => simulateGame()}>Simulate result</button>
            <p>Winner is: {fbkAverage > ifkAverage ? 'FBK': 'IFK'}</p>
            <p>Results:</p>
            <p>Team1 vs. Team 2</p>
            <p>Team1 vs. Team 2</p>
            <p>Team1 vs. Team 2</p>
            <p>Team1 vs. Team 2</p> */}
            {teamContent}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
