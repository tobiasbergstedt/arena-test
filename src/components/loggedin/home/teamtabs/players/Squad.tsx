import { fixUrl } from "../../../../../utils"

interface Props {
  subTab: string;
  setSubTab: (s: string) => void;
  singlePlayer: number | null;
  setSinglePlayer: (s: number | null) => void;
}

let Squad = (props: Props) => {

  let allTeams = [
    {
      id: 1001,
      teamName: 'Hand of the Dragon',
      teamInfo: {
        city: 'Laijmladå',
        division: 1
      },
      players: [
        {
          id: 9543,
          name: 'Tobias',
          nickName: 'Bergarn',
          number: 67,
          originCity: 'Vattnaglöd',
          race: 'human30',
          salary: 589653,
          injuryLevel: 0,
          skills: {
            speed: 10,
            technique: 10,
            agility: 10,
            finishing: 10,
            intelligence: 10,
            strength: 10,
            tackling: 10,
            stamina: 10,
            passing: 10,
            ruthlessness: 10
          }
        },
        {
          id: 1452,
          name: 'John',
          nickName: 'Bergarn',
          number: 5,
          originCity: 'Vattnaglöd',
          race: 'elf10',
          salary: 1521,
          injuryLevel: 0,
          skills: {
            speed: 10,
            technique: 10,
            agility: 10,
            finishing: 10,
            intelligence: 10,
            strength: 10,
            tackling: 10,
            stamina: 10,
            passing: 10,
            ruthlessness: 10
          }
        },
        {
          id: 4633,
          name: 'Marcus',
          nickName: 'Bergarn',
          number: 12,
          originCity: 'Vattnaglöd',
          race: 'orc10',
          salary: 1521,
          injuryLevel: 0,
          skills: {
            speed: 10,
            technique: 10,
            agility: 10,
            finishing: 10,
            intelligence: 10,
            strength: 10,
            tackling: 10,
            stamina: 10,
            passing: 10,
            ruthlessness: 10
          }
        },
        {
          id: 3548,
          name: 'Fjodor',
          nickName: 'Bergarn',
          number: 14,
          originCity: 'Vattnaglöd',
          race: 'dwarf33',
          salary: 1521,
          injuryLevel: 0,
          skills: {
            speed: 10,
            technique: 10,
            agility: 10,
            finishing: 10,
            intelligence: 10,
            strength: 10,
            tackling: 10,
            stamina: 10,
            passing: 10,
            ruthlessness: 10
          }
        },
        {
          id: 9656,
          name: 'Gork',
          nickName: 'Bergarn',
          number: 23,
          originCity: 'Vattnaglöd',
          race: 'orc10',
          salary: 1521,
          injuryLevel: 0,
          skills: {
            speed: 10,
            technique: 10,
            agility: 10,
            finishing: 10,
            intelligence: 10,
            strength: 10,
            tackling: 10,
            stamina: 10,
            passing: 10,
            ruthlessness: 10
          }
        },
        {
          id: 7896,
          name: 'Mahyaazaaaaa "Strongarm"',
          nickName: 'Bergarn',
          number: 40,
          originCity: 'Vattnaglöd',
          race: 'human30',
          salary: 1521,
          injuryLevel: 0,
          skills: {
            speed: 10,
            technique: 10,
            agility: 10,
            finishing: 10,
            intelligence: 10,
            strength: 10,
            tackling: 10,
            stamina: 10,
            passing: 10,
            ruthlessness: 10
          }
        }
      ]
    }
  ]

  let teamNames = allTeams.map((team) => {return team.teamName})

  let playersTeam1 = allTeams[0].players

  let simulateGame = () => {
    // let fbkValue = 0
    // let ifkValue = 0
    // for (let index = 0; index < 10; index++) {
    //   function getRandomInt(max: number) {
    //     return Math.floor(Math.random() * max)
    //   }
    //   fbkValue += getRandomInt(fbk)
    //   ifkValue += getRandomInt(ifk)
    // }
    // let fbkNewAverage = fbkValue / 10
    // let ifkNewAverage = ifkValue / 10

    // setFbkAverage(fbkNewAverage)
    // console.log('FBK: ',fbkNewAverage);
    // setIfkAverage(ifkNewAverage)
    // console.log('IFK: ',ifkNewAverage);


    let teamPlayers = allTeams.map((team) => {return team.players})
    console.log(teamPlayers);
    let playersTeam1 = teamPlayers[0]
    console.log(playersTeam1);
    let playerValuesTeam1 = teamPlayers[0].map((player) => {
      return (player.skills.agility + player.skills.finishing + player.skills.intelligence + player.skills.passing + player.skills.ruthlessness + player.skills.speed + player.skills.stamina + player.skills.strength + player.skills.tackling + player.skills.technique)
    })
    let totTeam1Value = 0
    for (let i = 0; i < playerValuesTeam1.length; i++) {
      totTeam1Value += playerValuesTeam1[i]
    }
    console.log(totTeam1Value);

    let playersTeam2 = teamPlayers[1]
    console.log(playersTeam1);
    let playerValuesTeam2 = teamPlayers[1].map((player) => {
      return (player.skills.agility + player.skills.finishing + player.skills.intelligence + player.skills.passing + player.skills.ruthlessness + player.skills.speed + player.skills.stamina + player.skills.strength + player.skills.tackling + player.skills.technique)
    })
    let totTeam2Value = 0
    for (let i = 0; i < playerValuesTeam2.length; i++) {
      totTeam2Value += playerValuesTeam2[i]
    }
    console.log(totTeam2Value);

  }

  let selectPlayer = (id: number) => {
    props.setSubTab('singleplayer'),
    props.setSinglePlayer(id)
  }

  return (
    <div>
      <h2>My Players</h2>
      Forwards
      <div className='players_grid'>
        {playersTeam1.map(({id, name, number, originCity, race, salary, injuryLevel, skills}) => {return (
        <div key={name} className='single_player' onClick={() => {selectPlayer(id)}}>
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
    </div>
  )
}

export default Squad
