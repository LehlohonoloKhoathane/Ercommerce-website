import React from "react";
import styles from "./Loader.module.scss";
import ReactDOM from "react-dom";
import 

const Loader = () => {
    return ReactDOM.createPortal(
        <div className={styles.wrapper}>
            <div className={styles.loader}></div>
        </div>
    )
}

export default Loader;