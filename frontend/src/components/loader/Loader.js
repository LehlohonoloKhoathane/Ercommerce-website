import React from "react";
import styles from "./Loader.module.scss";
import ReactDOM from "react-dom";
import loadingImg from "../../assets/images/myshop.gif";

const Loader = () => {
    return ReactDOM.createPortal(
        <div className={styles.wrapper}>
            <div className={styles.loader}>
                <img src={loadingImg} alt="loading" />
            </div>
        </div>,
        document.getElementById("loader")
    );
};

export const Spinner = () => {
    return (
        <div className="--center-all">
            <img src={loadingImg} alt="loading" width={50} />
        </div>
    )
}

export default Loader;