import React from "react";
import ReactDOM from "react-dom";
import styles from "./Loader.module.scss";

const Loader = () => {
    return ReactDOM.createPortal(
        <div className={styles.wrapper}>
            <div className={styles.loader}></div>
        </div>,
        document.body // specify the DOM element to append the loader to
    );
};

export default Loader;
