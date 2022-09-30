import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface Props {
  subTab: string;
  setSubTab: (s: string) => void;
  singlePlayer: number | null;
  setSinglePlayer: (s: number | null) => void;
}

let SinglePlayer = (props: Props) => {

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

  let player = allTeams[0].players.find(x => x.id === props.singlePlayer)

  let playerChartData = {
    labels: ['Speed', 'Technique', 'Agility', 'Finishing', 'Intelligence', 'Strength', 'Tackling', 'Stamina', 'Passing', 'Ruthlessness'],
    datasets: [
      {
        label: 'Level',
        data: [player?.skills.speed, player?.skills.technique, player?.skills.agility, player?.skills.finishing, player?.skills.intelligence, player?.skills.strength, player?.skills.tackling, player?.skills.stamina, player?.skills.passing, player?.skills.ruthlessness],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  let options = {
    responsive: true,
    maintainAspectRatio: true,
    scale: {
      ticks: {
          beginAtZero: true,
          min: 0,
          max: 20
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }

  return (
    <div className='player'>
      <div className='left'>
        <p>{player ? player.number : 'Player not found.'}. {player ? player.name : 'Player not found.'}</p>
        <p>Nickname: {player ? player.nickName : 'Player not found.'}</p>
        <p>City of origin: {player ? player.originCity : 'Player not found.'}</p>
        <p>Race: {player ? player.race : 'Player not found.'}</p>
        <p>Salary: {player ? player.salary : 'Player not found.'}</p>
        <p>Injury level: {player ? player.injuryLevel : 'Player not found.'}</p>
      </div>
      <div className='right'>
        <Radar data={playerChartData} options={options}/>
      </div>
    </div>
  )
}

export default SinglePlayer

// name: 'Tobias',
//           nickName: 'Bergarn',
//           number: 67,
//           originCity: 'Vattnaglöd',
//           race: 'human30',
//           salary: 589653,
//           injuryLevel: 0,
//           skills: {
//             speed: 10,
//             technique: 10,
//             agility: 10,
//             finishing: 10,
//             intelligence: 10,
//             strength: 10,
//             tackling: 10,
//             stamina: 10,
//             passing: 10,
//             ruthlessness: 10
//           }
