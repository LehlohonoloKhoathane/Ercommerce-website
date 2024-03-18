import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return <header>
    <div className={styles.header}>
        <div className={styles.logo}>
            <Link to='/'>
                <h2>My <span>Shop</span></h2>
            </Link>
        </div>
    </div>
    </header>;
};

export default Header;
