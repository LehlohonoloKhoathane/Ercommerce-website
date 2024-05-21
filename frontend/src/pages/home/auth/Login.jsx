import React, { useState } from "react";
import styles from "./auth.module.scss"; // Check if the import path is correct
import loginImg from "../../../assets/images/logiin.png";
import Card from "../../../components/card/Card";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { validateEmail } from "../../../utils";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const loginUser = (e) => {
        e.preventDefault(); // Prevent form submission
        //console.log(name, email, password, cPassword);
        if(!email || !password){
            return toast.error("All fields are required!");
        }
        if(!validateEmail(email)){
            return toast.error("Please enter a valid email");
        }

        const userData = {
            email,
            password
        }
        console.log(userData);
        //await dispatch(register(userData));
    };

    return (
        <section className={`container ${styles.auth}`}>
            <div className={styles.img}>
                <img src={loginImg} alt="Login" width="400" />
            </div>
            <Card>
                <div className={styles.form}>
                    <h2> Login </h2>
                    <form onSubmit={loginUser}>
                        <input
                            type="text"
                            placeholder="Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit" className={`${styles.btn} ${styles.btnPrimary} ${styles.btnBlock}`}>
                            Login
                        </button>
                    </form>
                    <span className={styles.register}>
                        <p>Do not Have an account?</p> <Link to="/register"> Register </Link>
                    </span>
                </div>
            </Card>
        </section>
    );
};

export default Login;
