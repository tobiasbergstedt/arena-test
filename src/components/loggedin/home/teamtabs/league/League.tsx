import { useState } from 'react'
import TabsAtom from '../../../../../atoms/TabsAtom'
import { fixUrl } from '../../../../../utils'
import PageNotFound from '../../pagenotfound/PageNotFound'
import styles from './League.module.css'
import LeagueFixtures from './LeagueFixtures'
import LeagueStatistics from './LeagueStatistics'
import Table from './Table'

const MyTeam = () => {
  const [subTab, setSubTab] = useState<string>('table')

  const TABLE = 'table', LEAGUEFIXTURES = 'leaguefixtures', LEAGUESTATISTICS = 'leaguestatistics'

  let leagueContent: JSX.Element = <Table />

  if (subTab === TABLE) {
    leagueContent = <Table />
  } else if (subTab === LEAGUEFIXTURES) {
    leagueContent = <LeagueFixtures subTab={subTab} setSubTab={setSubTab} />
  } else if (subTab === LEAGUESTATISTICS) {
    leagueContent = <LeagueStatistics subTab={subTab} setSubTab={setSubTab} />
  } else {
    leagueContent = <PageNotFound />
  }

  let menuItems = [
    {linkclass: styles.fixtures_link, text: 'Fixtures', tablink: 'leaguefixtures'},
    {linkclass: styles.statistics_link, text: 'Statistics', tablink: 'leaguestatistics'}
  ]

  return (
    <div className={styles.league}>
      <div className={styles.top}>
        <p className={styles.division_title} onClick={() => setSubTab(TABLE)}>Division 1 West Northlands</p>
        <select name='' id=''>
          <option value='3'>Season 3</option>
          <option value='2'>Season 2</option>
          <option value='1'>Season 1</option>
        </select>
        {menuItems.map(({linkclass, text, tablink}, index) => {
          return <p key={index} className={linkclass} onClick={() => setSubTab(tablink)}>{text}</p>
        })}
      </div>
      {leagueContent}
    </div>
  )
}

export default MyTeam
