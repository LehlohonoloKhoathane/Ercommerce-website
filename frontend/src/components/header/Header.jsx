import React from 'react';
import styles from './Header.module.scss';
import { Link, NavLink } from 'react-router-dom';

export const logo = (
    <div className={styles.logo}>
        <Link to="/">
            <h2>My<span>Shop</span></h2>
        </Link>
    </div>
);

const activeLink = ({isActive}) => (isActive ? `${styles.active}` : "")

const Header = () => {
  return (
  <header>
    <div className={styles.header}>{logo}
    <nav>
        <ul>
            <li>
                <NavLink to="/shop" className={activeLink}/>
            </li>
        </ul>
        <div className={styles["header-right"]}></div>
    </nav>
    </div>
    </header>
  );
};

export default Header;
