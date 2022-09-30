import { useState } from 'react'
import { fixUrl } from '../../../../../utils'
import PageNotFound from '../../pagenotfound/PageNotFound'
import './Players.css'
import SinglePlayer from './SinglePlayer'
import Squad from './Squad'

const MyTeam = () => {
  const [subTab, setSubTab] = useState<string>('squad')
  const [singlePlayer, setSinglePlayer] = useState<number | null>(null)

  const SQUAD = 'squad', SINGLEPLAYER = 'singleplayer'

  let squadContent: JSX.Element = <Squad subTab={subTab} setSubTab={setSubTab} singlePlayer={singlePlayer} setSinglePlayer={setSinglePlayer} />

  if (subTab === SQUAD) {
    squadContent = <Squad subTab={subTab} setSubTab={setSubTab} singlePlayer={singlePlayer} setSinglePlayer={setSinglePlayer} />
  } else if (subTab === SINGLEPLAYER) {
    squadContent = <SinglePlayer subTab={subTab} setSubTab={setSubTab} singlePlayer={singlePlayer} setSinglePlayer={setSinglePlayer} />
  } else {
    squadContent = <PageNotFound />
  }

  return (
    <div className='players'>
      {/* <div>
        <h2>My Players</h2>
        Forwards
        <div className='players_grid'>
          {playersTeam1.map(({name, number, originCity, race, salary, injuryLevel, skills}) => {return (
          <div key={name} className='single_player'>
            <div className='single_player_image'>
              <img draggable="false" src={fixUrl('/assets/icons/' + race + '.svg')} />
            </div>
            <div className='single_player_info'>
              <p className='name_number'>
                {number}. {name}
              </p>
              <div className='salary'>
                Salary: {salary} gold
              </div>
            </div>
          </div>)})}
        </div>
      </div> */}
      {squadContent}
    </div>
  )
}

export default MyTeam

// {
//   id: 1,
//   name: 'Tobias',
//   nickName: 'Bergarn',
//   originCity: 'Vattnaglöd',
//   salary: 1521,
//   injuryLevel: 0,
//   skills: {
//     speed: 10,
//     technique: 10,
//     agility: 10,
//     finishing: 10,
//     intelligence: 10,
//     strength: 10,
//     tackling: 10,
//     stamina: 10,
//     passing: 10,
//     ruthlessness: 10
//   }
// }
