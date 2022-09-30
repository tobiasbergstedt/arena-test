import ReturnTabButton from '../../ReturnTabButton'
import Table from './Table'
import styles from './League.module.css'

interface Props {
  subTab: string;
  setSubTab: (s: string) => void;
}

const MyTeam = (props: Props) => {

  let leagueFixturesData = [
    {date: '2022-08-02', round: 1, games: [
      {team1: 'Rawhide Raidersgsrtmn', team2: 'Erschboda', team1Periods: '3', team2Periods: '2'},
      {team1: 'Cult of Freaks', team2: 'Bergheim', team1Periods: '3', team2Periods: '2'},
      {team1: 'Thorins Boys', team2: 'Tobbes Hjältar', team1Periods: '3', team2Periods: '2'},
      {team1: 'Beer Bellies', team2: 'Dwarf Kings', team1Periods: '3', team2Periods: '2'},
      {team1: 'Wolfriders', team2: 'Frillesås BK', team1Periods: '3', team2Periods: '2'}
    ]},
    {date: '2022-08-05', round: 2, games: [
      {team1: 'Rawhide Raidersgsrtmn', team2: 'Erschboda', team1Periods: '3', team2Periods: '2'},
      {team1: 'Cult of Freaks', team2: 'Bergheim', team1Periods: '3', team2Periods: '2'},
      {team1: 'Thorins Boys', team2: 'Tobbes Hjältar', team1Periods: '3', team2Periods: '2'},
      {team1: 'Beer Bellies', team2: 'Dwarf Kings', team1Periods: '3', team2Periods: '2'},
      {team1: 'Wolfriders', team2: 'Frillesås BK', team1Periods: '3', team2Periods: '2'}
    ]},
    {date: '2022-08-09', round: 3, games: [
      {team1: 'Rawhide Raidersgsrtmn', team2: 'Erschboda', team1Periods: '', team2Periods: ''},
      {team1: 'Cult of Freaks', team2: 'Bergheim', team1Periods: '', team2Periods: ''},
      {team1: 'Thorins Boys', team2: 'Tobbes Hjältar', team1Periods: '', team2Periods: ''},
      {team1: 'Beer Bellies', team2: 'Dwarf Kings', team1Periods: '', team2Periods: ''},
      {team1: 'Wolfriders', team2: 'Frillesås BK', team1Periods: '', team2Periods: ''}
    ]},
    {date: '2022-08-12', round: 4, games: [
      {team1: 'Rawhide Raidersgsrtmn', team2: 'Erschboda', team1Periods: '', team2Periods: ''},
      {team1: 'Cult of Freaks', team2: 'Bergheim', team1Periods: '', team2Periods: ''},
      {team1: 'Thorins Boys', team2: 'Tobbes Hjältar', team1Periods: '', team2Periods: ''},
      {team1: 'Beer Bellies', team2: 'Dwarf Kings', team1Periods: '', team2Periods: ''},
      {team1: 'Wolfriders', team2: 'Frillesås BK', team1Periods: '', team2Periods: ''}
    ]},
    {date: '2022-08-16', round: 5, games: [
      {team1: 'Rawhide Raidersgsrtmn', team2: 'Erschboda', team1Periods: '', team2Periods: ''},
      {team1: 'Cult of Freaks', team2: 'Bergheim', team1Periods: '', team2Periods: ''},
      {team1: 'Thorins Boys', team2: 'Tobbes Hjältar', team1Periods: '', team2Periods: ''},
      {team1: 'Beer Bellies', team2: 'Dwarf Kings', team1Periods: '', team2Periods: ''},
      {team1: 'Wolfriders', team2: 'Frillesås BK', team1Periods: '', team2Periods: ''}
    ]},
    {date: '2022-08-19', round: 6, games: [
      {team1: 'Rawhide Raidersgsrtmn', team2: 'Erschboda', team1Periods: '', team2Periods: ''},
      {team1: 'Cult of Freaks', team2: 'Bergheim', team1Periods: '', team2Periods: ''},
      {team1: 'Thorins Boys', team2: 'Tobbes Hjältar', team1Periods: '', team2Periods: ''},
      {team1: 'Beer Bellies', team2: 'Dwarf Kings', team1Periods: '', team2Periods: ''},
      {team1: 'Wolfriders', team2: 'Frillesås BK', team1Periods: '', team2Periods: ''}
    ]},
    {date: '2022-08-23', round: 7, games: [
      {team1: 'Rawhide Raidersgsrtmn', team2: 'Erschboda', team1Periods: '', team2Periods: ''},
      {team1: 'Cult of Freaks', team2: 'Bergheim', team1Periods: '', team2Periods: ''},
      {team1: 'Thorins Boys', team2: 'Tobbes Hjältar', team1Periods: '', team2Periods: ''},
      {team1: 'Beer Bellies', team2: 'Dwarf Kings', team1Periods: '', team2Periods: ''},
      {team1: 'Wolfriders', team2: 'Frillesås BK', team1Periods: '', team2Periods: ''}
    ]},
    {date: '2022-08-26', round: 8, games: [
      {team1: 'Rawhide Raidersgsrtmn', team2: 'Erschboda', team1Periods: '', team2Periods: ''},
      {team1: 'Cult of Freaks', team2: 'Bergheim', team1Periods: '', team2Periods: ''},
      {team1: 'Thorins Boys', team2: 'Tobbes Hjältar', team1Periods: '', team2Periods: ''},
      {team1: 'Beer Bellies', team2: 'Dwarf Kings', team1Periods: '', team2Periods: ''},
      {team1: 'Wolfriders', team2: 'Frillesås BK', team1Periods: '', team2Periods: ''}
    ]},
    {date: '2022-08-30', round: 9, games: [
      {team1: 'Rawhide Raidersgsrtmn', team2: 'Erschboda', team1Periods: '', team2Periods: ''},
      {team1: 'Cult of Freaks', team2: 'Bergheim', team1Periods: '', team2Periods: ''},
      {team1: 'Thorins Boys', team2: 'Tobbes Hjältar', team1Periods: '', team2Periods: ''},
      {team1: 'Beer Bellies', team2: 'Dwarf Kings', team1Periods: '', team2Periods: ''},
      {team1: 'Wolfriders', team2: 'Frillesås BK', team1Periods: '', team2Periods: ''}
    ]},
    {date: '2022-09-03', round: 10, games: [
      {team1: 'Rawhide Raidersgsrtmn', team2: 'Erschboda', team1Periods: '', team2Periods: ''},
      {team1: 'Cult of Freaks', team2: 'Bergheim', team1Periods: '', team2Periods: ''},
      {team1: 'Thorins Boys', team2: 'Tobbes Hjältar', team1Periods: '', team2Periods: ''},
      {team1: 'Beer Bellies', team2: 'Dwarf Kings', team1Periods: '', team2Periods: ''},
      {team1: 'Wolfriders', team2: 'Frillesås BK', team1Periods: '', team2Periods: ''}
    ]},
    {date: '2022-09-07', round: 11, games: [
      {team1: 'Rawhide Raidersgsrtmn', team2: 'Erschboda', team1Periods: '', team2Periods: ''},
      {team1: 'Cult of Freaks', team2: 'Bergheim', team1Periods: '', team2Periods: ''},
      {team1: 'Thorins Boys', team2: 'Tobbes Hjältar', team1Periods: '', team2Periods: ''},
      {team1: 'Beer Bellies', team2: 'Dwarf Kings', team1Periods: '', team2Periods: ''},
      {team1: 'Wolfriders', team2: 'Frillesås BK', team1Periods: '', team2Periods: ''}
    ]},
    {date: '2022-09-10', round: 12, games: [
      {team1: 'Rawhide Raidersgsrtmn', team2: 'Erschboda', team1Periods: '', team2Periods: ''},
      {team1: 'Cult of Freaks', team2: 'Bergheim', team1Periods: '', team2Periods: ''},
      {team1: 'Thorins Boys', team2: 'Tobbes Hjältar', team1Periods: '', team2Periods: ''},
      {team1: 'Beer Bellies', team2: 'Dwarf Kings', team1Periods: '', team2Periods: ''},
      {team1: 'Wolfriders', team2: 'Frillesås BK', team1Periods: '', team2Periods: ''}
    ]},
    {date: '2022-09-14', round: 13, games: [
      {team1: 'Rawhide Raidersgsrtmn', team2: 'Erschboda', team1Periods: '', team2Periods: ''},
      {team1: 'Cult of Freaks', team2: 'Bergheim', team1Periods: '', team2Periods: ''},
      {team1: 'Thorins Boys', team2: 'Tobbes Hjältar', team1Periods: '', team2Periods: ''},
      {team1: 'Beer Bellies', team2: 'Dwarf Kings', team1Periods: '', team2Periods: ''},
      {team1: 'Wolfriders', team2: 'Frillesås BK', team1Periods: '', team2Periods: ''}
    ]},
    {date: '2022-09-17', round: 14, games: [
      {team1: 'Rawhide Raidersgsrtmn', team2: 'Erschboda', team1Periods: '', team2Periods: ''},
      {team1: 'Cult of Freaks', team2: 'Bergheim', team1Periods: '', team2Periods: ''},
      {team1: 'Thorins Boys', team2: 'Tobbes Hjältar', team1Periods: '', team2Periods: ''},
      {team1: 'Beer Bellies', team2: 'Dwarf Kings', team1Periods: '', team2Periods: ''},
      {team1: 'Wolfriders', team2: 'Frillesås BK', team1Periods: '', team2Periods: ''}
    ]},
    {date: '2022-09-21', round: 15, games: [
      {team1: 'Rawhide Raidersgsrtmn', team2: 'Erschboda', team1Periods: '', team2Periods: ''},
      {team1: 'Cult of Freaks', team2: 'Bergheim', team1Periods: '', team2Periods: ''},
      {team1: 'Thorins Boys', team2: 'Tobbes Hjältar', team1Periods: '', team2Periods: ''},
      {team1: 'Beer Bellies', team2: 'Dwarf Kings', team1Periods: '', team2Periods: ''},
      {team1: 'Wolfriders', team2: 'Frillesås BK', team1Periods: '', team2Periods: ''}
    ]},
    {date: '2022-09-24', round: 16, games: [
      {team1: 'Rawhide Raidersgsrtmn', team2: 'Erschboda', team1Periods: '', team2Periods: ''},
      {team1: 'Cult of Freaks', team2: 'Bergheim', team1Periods: '', team2Periods: ''},
      {team1: 'Thorins Boys', team2: 'Tobbes Hjältar', team1Periods: '', team2Periods: ''},
      {team1: 'Beer Bellies', team2: 'Dwarf Kings', team1Periods: '', team2Periods: ''},
      {team1: 'Wolfriders', team2: 'Frillesås BK', team1Periods: '', team2Periods: ''}
    ]},
    {date: '2022-09-28', round: 17, games: [
      {team1: 'Rawhide Raidersgsrtmn', team2: 'Erschboda', team1Periods: '', team2Periods: ''},
      {team1: 'Cult of Freaks', team2: 'Bergheim', team1Periods: '', team2Periods: ''},
      {team1: 'Thorins Boys', team2: 'Tobbes Hjältar', team1Periods: '', team2Periods: ''},
      {team1: 'Beer Bellies', team2: 'Dwarf Kings', team1Periods: '', team2Periods: ''},
      {team1: 'Wolfriders', team2: 'Frillesås BK', team1Periods: '', team2Periods: ''}
    ]},
    {date: '2022-09-31', round: 18, games: [
      {team1: 'Rawhide Raidersgsrtmn', team2: 'Erschboda', team1Periods: '', team2Periods: ''},
      {team1: 'Cult of Freaks', team2: 'Bergheim', team1Periods: '', team2Periods: ''},
      {team1: 'Thorins Boys', team2: 'Tobbes Hjältar', team1Periods: '', team2Periods: ''},
      {team1: 'Beer Bellies', team2: 'Dwarf Kings', team1Periods: '', team2Periods: ''},
      {team1: 'Wolfriders', team2: 'Frillesås BK', team1Periods: '', team2Periods: ''}
    ]}
  ]

  return (
    <div className={`${styles.fixtures} ${styles.league_fixtures}`}>
      <ReturnTabButton setSubTab={props.setSubTab} subTab={'table'}/>
        {leagueFixturesData.map(({date, round, games}) => {
          return (
            <table key={round}>
              <thead>
                <tr>
                  <td colSpan={7}>Round {round}, {date}</td>
                </tr>
              </thead>
              <tbody>{games.map(({team1, team2, team1Periods, team2Periods}, index) => {
                return (
                  <tr key={index}>
                    <td className={styles.team1}>{team1}</td>
                    <td className={styles.vs}>vs</td>
                    <td className={styles.team2}>{team2}</td>
                    <td className={styles.space_divider}></td>
                    <td className={styles.team1Periods}>{team1Periods}</td>
                    <td className={styles.divider}>-</td>
                    <td className={styles.team2Periods}>{team2Periods}</td>
                  </tr>
                )
              })}</tbody>
            </table>
          )
        })}
    </div>
  )
}

export default MyTeam
