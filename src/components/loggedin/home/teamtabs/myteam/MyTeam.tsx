import { useState } from 'react'
import { fixUrl } from '../../../../../utils'
import styles from './MyTeam.module.css'

const MyTeam = () => {
  let [activeTable, setActiveTable] = useState('points')

  let teamHistory = {
    league: [
      {date: '2022-08-03', league: 'Imperial League', season: '3', place: '1st', points: '36'},
      {date: '2022-07-03', league: 'Div 1 West', season: '2', place: '1st', points: '36'},
      {date: '2022-06-03', league: 'Div 2 South West', season: '1', place: '1st', points: '36'}
    ],
    points: [
      {player: 'ThorúnThorún', season: '3', place: '1st', points: '116'},
      {player: 'Jorún', season: '2', place: '3rd', points: '78'},
      {player: 'Kirún', season: '1', place: '2nd', points: '96'}
    ],
    goals: [
      {player: 'ThorúnThorún', season: '3', place: '1st', goals: '40'},
      {player: 'Jorún', season: '2', place: '3rd', goals: '25'},
      {player: 'Kirún', season: '1', place: '2nd', goals: '30'}
    ],
    buckets: [
      {player: 'ThorúnThorún', season: '3', place: '1st', buckets: '40'},
      {player: 'Jorún', season: '2', place: '3rd', buckets: '25'},
      {player: 'Kirún', season: '1', place: '2nd', buckets: '30'}
    ],
    assists: [
      {player: 'ThorúnThorún', season: '3', place: '1st', assists: '36'},
      {player: 'Jorún', season: '2', place: '3rd', assists: '28'},
      {player: 'Kirún', season: '1', place: '2nd', assists: '36'}
    ]
  }

  let changeActiveTable = (e:any) => {
    setActiveTable(e.target.value)
  }
  console.log(activeTable);


  return (
    <div className={styles.my_team}>
      <div className={styles.team_info}>
        <div className={styles.team_info_text}>
          <h2>Frillesås BK</h2>
          <p>Grundat: 2022-08-03</p>
          <p>Arena: Arena FBK</p>
        </div>
        <div className={styles.team_info_image}>
          <img src={fixUrl('/assets/' + 'bg.jpg')} alt="" />
        </div>
      </div>
      <div className={styles.about_team}>
        <h3>About the team</h3>
        <p>The team was founded when two sons of the half god Thorir wanted a reason to beat people to a pulp, as they were both under threat of execution if they where to rough up someone at a bar ever again. On the field, they soon got the epithet 'The two slayers', after making cripples of one troll and fourteen orcs in a single game. The remaining games that season where won by Walk Over, and FBK became undisputed champions of the Imperial League, standing on 18 wins in 18 games. A record that still holds to this day, and will probably last as long as the brothers keep playing.</p>
      </div>
      <div className={styles.team_history}>
        <h3>Team history</h3>
        <div className={styles.team_history_tables}>
          <div className={styles.league_table}>
            <h4>League positions</h4>
            <table>
              <thead>
                <tr>
                  <td>Season</td>
                  <td>League</td>
                  <td>Position</td>
                  <td>Points</td>
                </tr>
              </thead>
              <tbody>
                {teamHistory.league.map(({league, season, place, points}) => {return <tr key={season}>
                  <td>{season}</td>
                  <td>{league}</td>
                  <td>{place}</td>
                  <td>{points}</td>
                </tr>})}
              </tbody>
            </table>
          </div>
          <div className={styles.points_table}>
          <h4>Points league</h4>
          <table>
            <thead>
              <tr>
                <td>Season</td>
                <td>Player</td>
                <td>Points</td>
                <td>Position</td>
              </tr>
            </thead>
            <tbody>
              {teamHistory.points.map(({player, season, place, points}) => {return <tr key={season}>
                <td>{season}</td>
                <td>{player}</td>
                <td>{points}</td>
                <td>{place}</td>
              </tr>})}
            </tbody>
          </table>
          </div>
          <div className={styles.goals_table}>
          <h4>Goals league</h4>
          <table>
            <thead>
              <tr>
                <td>Season</td>
                <td>Player</td>
                <td>Goals</td>
                <td>Position</td>
              </tr>
            </thead>
            <tbody>
              {teamHistory.goals.map(({player, season, place, goals}) => {return <tr key={season}>
                <td>{season}</td>
                <td>{player}</td>
                <td>{goals}</td>
                <td>{place}</td>
              </tr>})}
            </tbody>
          </table>
          </div>
          <div className={styles.buckets_table}>
          <h4>Buckets league</h4>
          <table>
            <thead>
              <tr>
                <td>Season</td>
                <td>Player</td>
                <td>Buckets</td>
                <td>Position</td>
              </tr>
            </thead>
            <tbody>
              {teamHistory.buckets.map(({player, season, place, buckets}) => {return <tr key={season}>
                <td>{season}</td>
                <td>{player}</td>
                <td>{buckets}</td>
                <td>{place}</td>
              </tr>})}
            </tbody>
          </table>
          </div>
          <div className={styles.assists_table}>
          <h4>Assist league</h4>
          <table>
            <thead>
              <tr>
                <td>Season</td>
                <td>Player</td>
                <td>Assists</td>
                <td>Position</td>
              </tr>
            </thead>
            <tbody>
              {teamHistory.assists.map(({player, season, place, assists}) => {return <tr key={season}>
                <td>{season}</td>
                <td>{player}</td>
                <td>{assists}</td>
                <td>{place}</td>
              </tr>})}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyTeam
