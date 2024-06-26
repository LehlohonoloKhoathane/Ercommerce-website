// Importing necessary modules
import React, {useState} from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";
import styles from './Header.module.scss';     // Importing styles from a SCSS module
import { Link, NavLink, useNavigate } from 'react-router-dom';    // Importing Link and NavLink components from react-router-dom
import { useDispatch } from 'react-redux';
import { RESET_AUTH, logout } from '../../redux/features/auth/authSlice';
import ShowOnLogin, { ShowOnLogout } from '../hiddenLink/hiddenLink';

// Define a logo component
export const logo = (
    <div className={styles.logo}>
        <Link to="/">
            <h2>My<span>Shop</span></h2>
        </Link>
    </div>
);

// Define a function to determine the active link class
const activeLink = ({isActive}) => (isActive ? `${styles.active}` : "")

// Header component
const Header = () => {

    // State to toggle the mobile menu
    const [showMenu, setShowMenu] = useState(false);
    const [scrollPage, setScrollPage] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fixedNavBar = () => {
        if(window.scrollY > 50) {
            setScrollPage(true)
        }else{
            setScrollPage(false)
        }
    };
    window.addEventListener("scroll", fixedNavBar);

    // Function to toggle the mobile menu
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    };

    // Function to hide the mobile menu
    const hideMenu = () => {
        setShowMenu(false)
    };

    const logoutUser = async () => {
        await dispatch(logout());
        await dispatch(RESET_AUTH());
        navigate("/login");
    };

    // Cart component
    const cart = (
        <span className={styles.cart}>
            <Link to="/cart">
                Cart
                <FaShoppingCart size={20}/>
            </Link>
        </span>
    );

  return (
  <header className={scrollPage ? `${styles.fixed}` : null}>
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
                <ShowOnLogout>
                <NavLink to={"login"} className={activeLink}>
                    Login
                </NavLink>
                </ShowOnLogout>
                <ShowOnLogout>
                <NavLink to={"register"} className={activeLink}>
                    Register
                </NavLink>
                </ShowOnLogout>
                <ShowOnLogin>
                <NavLink to={"order-history"} className={activeLink}>
                    My Order
                </NavLink>
                </ShowOnLogin>
                <ShowOnLogin>
                <Link to={"/"} onClick={logoutUser}>
                    Logout
                </Link>
                </ShowOnLogin>
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
