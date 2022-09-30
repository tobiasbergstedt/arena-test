import styles from './Games.module.css'

const MyTeam = () => {

  let games = [
    {date: '2022-08-02',
    team1: 'Frillesås BK',
    team2: 'Tobbes Hjältar',
    team1Periods: '3',
    team2Periods: '2'
    },
    {date: '2022-08-05',
    team1: 'Frillesås BK',
    team2: 'Cult of Freaks',
    team1Periods: '4',
    team2Periods: '1'
    },
    {date: '2022-08-09',
    team1: 'Frillesås BK',
    team2: 'Bergheim',
    team1Periods: '',
    team2Periods: ''
    },
    {date: '2022-08-12',
    team1: 'Frillesås BK',
    team2: 'Wolfriders',
    team1Periods: '',
    team2Periods: ''
    },
    {date: '2022-08-16',
    team1: 'Frillesås BK',
    team2: 'Erschboda',
    team1Periods: '',
    team2Periods: ''
    },
    {date: '2022-08-19',
    team1: 'Frillesås BK',
    team2: 'Rawhide Raidersgsrtmn',
    team1Periods: '',
    team2Periods: ''
    },
    {date: '2022-08-23',
    team1: 'Frillesås BK',
    team2: 'Thorins Boys',
    team1Periods: '',
    team2Periods: ''
    },
    {date: '2022-08-26',
    team1: 'Frillesås BK',
    team2: 'Dwarf Kings',
    team1Periods: '',
    team2Periods: ''
    },
    {date: '2022-08-30',
    team1: 'Frillesås BK',
    team2: 'Beer Bellies',
    team1Periods: '',
    team2Periods: ''
    },
    {date: '2022-09-03',
    team1: 'Beer Bellies',
    team2: 'Frillesås BK',
    team1Periods: '',
    team2Periods: ''
    },
    {date: '2022-09-07',
    team1: 'Dwarf Kings',
    team2: 'Frillesås BK',
    team1Periods: '',
    team2Periods: ''
    },
    {date: '2022-09-10',
    team1: 'Thorins Boys',
    team2: 'Frillesås BK',
    team1Periods: '',
    team2Periods: ''
    },
    {date: '2022-09-14',
    team1: 'Rawhide Raidersgsrtmn',
    team2: 'Frillesås BK',
    team1Periods: '',
    team2Periods: ''
    },
    {date: '2022-09-17',
    team1: 'Erschboda',
    team2: 'Frillesås BK',
    team1Periods: '',
    team2Periods: ''
    },
    {date: '2022-09-21',
    team1: 'Wolfriders',
    team2: 'Frillesås BK',
    team1Periods: '',
    team2Periods: ''
    },
    {date: '2022-09-24',
    team1: 'Bergheim',
    team2: 'Frillesås BK',
    team1Periods: '',
    team2Periods: ''
    },
    {date: '2022-09-28',
    team1: 'Cult of Freaks',
    team2: 'Frillesås BK',
    team1Periods: '',
    team2Periods: ''
    },
    {date: '2022-09-31',
    team1: 'Tobbes Hjältar',
    team2: 'Frillesås BK',
    team1Periods: '',
    team2Periods: ''
    }
  ]

  return (
    <div className={styles.games}>
      <table>
        <thead>
          <tr>
            <td>#</td>
            <td>Date</td>
            <td>Home team</td>
            <td>vs</td>
            <td>Away Team</td>
            <td colSpan={3}>Result</td>
          </tr>
        </thead>
        <tbody>{games.map(({date, team1, team2, team1Periods, team2Periods}, index) => {
          return (
            <tr key={index}>
              <td className={styles.fixture}>{index+1}.</td>
              <td className={styles.date}>{date}</td>
              <td className={styles.team1}>{team1}</td>
              <td className={styles.vs}>-</td>
              <td className={styles.team2}>{team2}</td>
              <td className={styles.team1Periods}>{team1Periods}</td>
              <td className={styles.divider}>-</td>
              <td className={styles.team2Periods}>{team2Periods}</td>
            </tr>
          )
        })}</tbody>
      </table>
    </div>
  )
}

export default MyTeam
