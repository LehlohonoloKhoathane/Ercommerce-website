import React, {useState} from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";
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

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    };

    const hideMenu = () => {
        setShowMenu(false)
    };

    const cart = (
        <span className={styles.cart}>
            <Link to="/cart">
                Cart
                <FaShoppingCart size={20}/>
            </Link>
        </span>
    );

  return (
  <header>
    <div className={styles.header}>{logo}
    <nav className={showMenu ? `${styles["show-nav"]}` : `${styles["hide-menu"]}`}>
        <div className={showMenu ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}` :
         `${styles["hide-nav"]}`} onClick={hideMenu}></div> 
        <ul>
            <li className={styles["logo-mobile"]}>
                {logo}
                <FaTimes size={22} color='fff' onClick={hideMenu}/>
            </li>
            <li>
                <NavLink to="/shop" className={activeLink}>
                Shop
                </NavLink>
            </li>
        </ul>
        <div className={styles["header-right"]}>
            <span className={styles.links}>
                <NavLink to={"login"} className={activeLink}>
                    Login
                </NavLink>
                <NavLink to={"register"} className={activeLink}>
                    Register
                </NavLink>
                <NavLink to={"order-history"} className={activeLink}>
                    My Order
                </NavLink>
            </span>
            {cart}
        </div>
    </nav>

    <div className={styles["menu-icon"]}>
        {cart}
        <CgMenuGridR size={28} onClick={toggleMenu}/>
    </div>

    </div>
    </header>
  );
};

export default Header;
