import { useLocation } from 'react-router-dom'
import Button from '../button/Button'
import styles from './Nav.module.css'
import PageIcon from '../pageicon/PageIcon'
import SearchBar from '../searchbar/SearchBar'

const Nav = () => {
  const { pathname } = useLocation()
  return (
    <div className={styles.container}>
      <div className={styles.nav__left}>
        <PageIcon className={styles.icon} />
        <Button to='/home' text='Home' />
        <Button to='/activity' text='Actividades' />
      </div>
      <div className={styles.nav_rigth}>
        {pathname === '/home' && <SearchBar />}
      </div>
    </div>
  )
}

export default Nav
