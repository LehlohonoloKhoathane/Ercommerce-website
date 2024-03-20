import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <div className={styles.footer}>
      Copyright &copy; {year} All Rights Reserved | Designed and Developed by Lehlohonolo Khoathane
    </div>
  )
}

export default Footer
