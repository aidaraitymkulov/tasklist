import { type FC } from 'react'
import styles from './Header.module.scss'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/iconScorpion.png'

export const Header: FC = () => {
    return (
        <header className={styles.header} id='header'>
            <div className={styles.logo}>
                <Link className={styles.logo__link} to='/'>
                <img className={styles.image} src={logo} alt="iconScorpion" />
                </Link>
            </div>
            <nav className={styles.nav}>
                <NavLink className={styles.link} to='/'>TaskList</NavLink>
                <NavLink className={styles.link} to='/add'>TaskAdd</NavLink>
            </nav>
        </header>
    );
}