import { fixUrl } from "../../../../../utils"
import styles from './League.module.css'


const Table = () => {

  let leagueData = [
    {place: '1', team: 'Frillesås BK', played: '18', wins: '18', ties: '0', losses: '0', diff: '90', points: '36'},
    {place: '2', team: 'Tobbes Hjältar', played: '18', wins: '16', ties: '0', losses: '2', diff: '70', points: '32'},
    {place: '3', team: 'Cult of Freaks', played: '18', wins: '14', ties: '0', losses: '4', diff: '50', points: '28'},
    {place: '4', team: 'Bergheim', played: '18', wins: '12', ties: '0', losses: '6', diff: '30', points: '24'},
    {place: '5', team: 'Wolfriders', played: '18', wins: '10', ties: '0', losses: '8', diff: '10', points: '20'},
    {place: '6', team: 'Erschboda', played: '18', wins: '8', ties: '0', losses: '10', diff: '-10', points: '16'},
    {place: '7', team: 'Rawhide Raidersgsrtmn', played: '18', wins: '6', ties: '0', losses: '12', diff: '-30', points: '12'},
    {place: '8', team: 'Thorins Boys', played: '18', wins: '4', ties: '0', losses: '14', diff: '-50', points: '8'},
    {place: '9', team: 'Dwarf Kings', played: '18', wins: '0', ties: '2', losses: '16', diff: '-80', points: '2'},
    {place: '10', team: 'Beer Bellies', played: '18', wins: '0', ties: '2', losses: '16', diff: '-80', points: '2'}
  ]

  let fixturesData = {
    lastGame: [
    {team1: 'Rawhide Raidersgsrtmn', team2: 'Erschboda', team1Periods: '3', team2Periods: '2'},
    {team1: 'Cult of Freaks', team2: 'Bergheim', team1Periods: '3', team2Periods: '2'},
    {team1: 'Thorins Boys', team2: 'Tobbes Hjältar', team1Periods: '3', team2Periods: '2'},
    {team1: 'Beer Bellies', team2: 'Dwarf Kings', team1Periods: '3', team2Periods: '2'},
    {team1: 'Wolfriders', team2: 'Frillesås BK', team1Periods: '3', team2Periods: '2'}
    ],
    nextGame: [
      {team1: 'Rawhide Raidersgsrtmn', team2: 'Rawhide Raidersgsrtmn', team1Periods: '', team2Periods: ''},
      {team1: 'Cult of Freaks', team2: 'Bergheim', team1Periods: '', team2Periods: ''},
      {team1: 'Thorins Boys', team2: 'Tobbes Hjältar', team1Periods: '', team2Periods: ''},
      {team1: 'Beer Bellies', team2: 'Dwarf Kings', team1Periods: '', team2Periods: ''},
      {team1: 'Wolfriders', team2: 'Frillesås BK', team1Periods: '', team2Periods: ''}
    ]
  }

  return (
    <div className={styles.table_fixtures}>
        <div className={styles.table_image}>
          <div className={styles.table}>
            <table>
              <thead>
                <tr>
                  <td>#</td>
                  <td>Team</td>
                  <td>GP</td>
                  <td>W</td>
                  <td>T</td>
                  <td>L</td>
                  <td>+/-</td>
                  <td>P</td>
                </tr>
              </thead>
              <tbody>
                {leagueData.map(({team, played, wins, ties, losses, diff, points}, index) => {return <tr key={index}>
                  <td>{index+1}</td>
                  <td>{team}</td>
                  <td>{played}</td>
                  <td>{wins}</td>
                  <td>{ties}</td>
                  <td>{losses}</td>
                  <td>{diff}</td>
                  <td>{points}</td>
                </tr>})}
              </tbody>
            </table>
          </div>
          <div className={styles.image}>
            <img src={fixUrl('/assets/' + 'man.gif')} alt="" />
          </div>
        </div>
        <div className={styles.fixtures}>
        <table className={styles.last_round}>
            <thead>
              <tr>
                <td colSpan={7}>Last round, 2022-08-05</td>
              </tr>
            </thead>
            <tbody>
              {fixturesData.lastGame.map(({team1, team2, team1Periods, team2Periods}, index) => {return <tr key={index}>
                <td className={styles.team1}>{team1}</td>
                <td className={styles.vs}>vs</td>
                <td className={styles.team2}>{team2}</td>
                <td className={styles.space_divider}></td>
                <td className={styles.team1Periods}>{team1Periods}</td>
                <td className={styles.divider}>-</td>
                <td className={styles.team2Periods}>{team2Periods}</td>
              </tr>})}
            </tbody>
          </table>
          <table className={styles.next_round}>
            <thead>
              <tr>
                <td colSpan={7}>Next round, 2022-08-09</td>
              </tr>
            </thead>
            <tbody>
              {fixturesData.nextGame.map(({team1, team2, team1Periods, team2Periods}, index) => {return <tr key={index}>
                <td className={styles.team1}>{team1}</td>
                <td className={styles.vs}>vs</td>
                <td className={styles.team2}>{team2}</td>
                <td className={styles.space_divider}></td>
                <td className={styles.team1Periods}>{team1Periods}</td>
                <td className={styles.divider}>-</td>
                <td className={styles.team2Periods}>{team2Periods}</td>
              </tr>})}
            </tbody>
          </table>
        </div>
      </div>
  )
}

export default Table
