import {
  FaBug,
  FaCalendarCheck,
  FaSuitcaseRolling,
  FaTrophy
} from 'react-icons/fa'
import Wrapper from '../assets/wrappers/StatsContainer'
import { useSelector } from 'react-redux'
import StatItem from './StatItem'

const StatsContainer = () => {
  const { stats } = useSelector((store) => store.allJobs)
  const defaultStats = [
    {
      title: 'pending applications',
      count: stats.APPLIED || 0,
      icon: <FaSuitcaseRolling />,
      color: '#e9b949',
      bcg: '#fcefc7'
    },
    {
      title: 'interviews scheduled',
      count: stats.INTERVIEW || 0,
      icon: <FaCalendarCheck />,
      color: '#647acb',
      bcg: '#e0e8f9'
    },
    {
      title: 'jobs declined',
      count: stats.REJECTED || 0,
      icon: <FaBug />,
      color: '#d66a6a',
      bcg: '#ffeeee'
    },
    {
      title: 'offers received',
      count: stats.OFFER || 0,
      icon: <FaTrophy />,
      color: '#2cb67d',
      bcg: '#c8f7e4'
    }
  ]
  return (
    <Wrapper>
      {defaultStats.map((item, index) => {
        return <StatItem key={index} {...item} />
      })}
    </Wrapper>
  )
}

export default StatsContainer
