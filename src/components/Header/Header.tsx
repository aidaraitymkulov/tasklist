import { type FC } from 'react'
import styles from './Header.module.scss'
import { NavLink } from 'react-router-dom';

export const Header: FC = () => {
    return (
        <header className={styles.header} id='header'>
            <nav className={styles.nav}>
                <NavLink className={styles.link} to='/'>TaskList</NavLink>
                <NavLink className={styles.link} to='/add'>TaskAdd</NavLink>
            </nav>
        </header>
    );
}