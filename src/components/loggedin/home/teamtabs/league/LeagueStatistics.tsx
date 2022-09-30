import ReturnTabButton from '../../ReturnTabButton';
import Table from './Table'
import styles from'./League.module.css'

interface Props {
  subTab: string;
  setSubTab: (s: string) => void;
}

const MyTeam = (props: Props) => {

  let leagueStatisticsData = {
    points: [
      {player: 'ThorúnThorúnThorúnun', points: '116'},
      {player: 'Jorún', points: '105'},
      {player: 'Kirún', points: '96'},
      {player: 'Kirún', points: '85'},
      {player: 'Kirún', points: '82'},
      {player: 'Kirún', points: '63'},
      {player: 'Kirún', points: '58'},
      {player: 'Kirún', points: '52'},
      {player: 'Kirún', points: '41'},
      {player: 'Kirún', points: '17'}
    ],
    goals: [
      {player: 'ThorúnThorúnThorúnun', goals: '40'},
      {player: 'Jorún', goals: '35'},
      {player: 'Kirún', goals: '30'},
      {player: 'Kirún', goals: '28'},
      {player: 'Kirún', goals: '27'},
      {player: 'Kirún', goals: '25'},
      {player: 'Kirún', goals: '18'},
      {player: 'Kirún', goals: '12'},
      {player: 'Kirún', goals: '9'},
      {player: 'Kirún', goals: '6'}
    ],
    buckets: [
      {player: 'ThorúnThorúnThorúnun', buckets: '40'},
      {player: 'Jorún', buckets: '38'},
      {player: 'Kirún', buckets: '36'},
      {player: 'Kirún', buckets: '32'},
      {player: 'Kirún', buckets: '29'},
      {player: 'Kirún', buckets: '21'},
      {player: 'Kirún', buckets: '20'},
      {player: 'Kirún', buckets: '17'},
      {player: 'Kirún', buckets: '13'},
      {player: 'Kirún', buckets: '11'}
    ],
    assists: [
      {player: 'ThorúnThorúnThorúnun', assists: '36'},
      {player: 'Jorún', assists: '34'},
      {player: 'Kirún', assists: '31'},
      {player: 'Kirún', assists: '30'},
      {player: 'Kirún', assists: '19'},
      {player: 'Kirún', assists: '18'},
      {player: 'Kirún', assists: '14'},
      {player: 'Kirún', assists: '12'},
      {player: 'Kirún', assists: '8'},
      {player: 'Kirún', assists: '2'}
    ]
  }

  return (
    <div className={styles.league_statistics}>
      <ReturnTabButton setSubTab={props.setSubTab} subTab={'table'}/>
      <table className={styles.table1}>
        <thead>
          <tr>
            <td colSpan={3}>Total points leaders</td>
          </tr>
          <tr>
            <td>#</td>
            <td>Name</td>
            <td>Points</td>
          </tr>
        </thead>
        <tbody>
        {leagueStatisticsData.points.map(({player, points}, index) => {
                return (
                  <tr key={index}>
                    <td className={styles.team1}>{(index + 1)}</td>
                    <td className={styles.vs}>{player}</td>
                    <td className={styles.team2}>{points}</td>
                  </tr>
                )
              })}
        </tbody>
      </table>
      <table className={styles.table2}>
        <thead>
          <tr>
            <td colSpan={3}>Total goals leaders</td>
          </tr>
          <tr>
            <td>#</td>
            <td>Name</td>
            <td>Goals</td>
          </tr>
        </thead>
        <tbody>
        {leagueStatisticsData.goals.map(({player, goals}, index) => {
                return (
                  <tr key={index}>
                    <td className={styles.team1}>{(index + 1)}</td>
                    <td className={styles.vs}>{player}</td>
                    <td className={styles.team2}>{goals}</td>
                  </tr>
                )
              })}
        </tbody>
      </table>
      <table className={styles.table2}>
        <thead>
          <tr>
            <td colSpan={3}>Total buckets leaders</td>
          </tr>
          <tr>
            <td>#</td>
            <td>Name</td>
            <td>Buckets</td>
          </tr>
        </thead>
        <tbody>
        {leagueStatisticsData.buckets.map(({player, buckets}, index) => {
                return (
                  <tr key={index}>
                    <td className={styles.team1}>{(index + 1)}</td>
                    <td className={styles.vs}>{player}</td>
                    <td className={styles.team2}>{buckets}</td>
                  </tr>
                )
              })}
        </tbody>
      </table>
      <table className={styles.table2}>
        <thead>
          <tr>
            <td colSpan={3}>Total assists leaders</td>
          </tr>
          <tr>
            <td>#</td>
            <td>Name</td>
            <td>Assists</td>
          </tr>
        </thead>
        <tbody>
        {leagueStatisticsData.assists.map(({player, assists}, index) => {
                return (
                  <tr key={index}>
                    <td className={styles.team1}>{(index + 1)}</td>
                    <td className={styles.vs}>{player}</td>
                    <td className={styles.team2}>{assists}</td>
                  </tr>
                )
              })}
        </tbody>
      </table>
    </div>
  )
}

export default MyTeam
