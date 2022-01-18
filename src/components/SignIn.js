import React from 'react';
import { Link } from "react-router-dom";
import Decoration from "../assets/Decoration.svg";

const SignIn = () => {
    return (
        <div className="signInBox">
            <div className="signInBox_navMenu">
                <div className="signInBox_navMenu__upMenu">
                    <div className="upMenuBox1">
                        Zaloguj
                    </div>
                    <div className="upMenuBox2">
                        <Link
                            className="Link"
                            to="/rejestracja"
                        >
                            Załóż konto
                        </Link>
                    </div>
                </div>
                <div className="signInBox_navMenu__downMenu">
                    <Link
                        className="Link_downMenu"
                        to="/"
                    >
                        Start
                    </Link>
                    <p>
                        O co chodzi?
                    </p>
                    <p>
                        O nas
                    </p>
                    <p>
                        Fundacja i organizacje
                    </p>
                    <p>
                        Kontakt
                    </p>
                </div>
            </div>
            <div className="signInBox_title">
                <div className="signInBox_title__text">
                    Zaloguj się
                </div>
                <div>
                    <img src={Decoration} alt="Decoration-Sign"/>
                </div>
            </div>
            <form className="signInBox_login">
                <div className="signInBox_login__loginBox">
                    <div className="loginBox_input">
                        <label className="loginBox_input__label">
                            Email
                        </label>
                        <input
                            className="loginBox_input__field"
                            type="email"
                        />
                    </div>
                    <div className="loginBox_input">
                        <label className="loginBox_input__label">
                            Hasło
                        </label>
                        <input
                            className="loginBox_input__field"
                            type="password"
                        />
                    </div>
                </div>
                <div className="signInBox_login__loginButtons">
                    <div className="loginButton">
                        <Link className="LinkButton" to="/rejestracja">
                            Załóż konto
                        </Link>
                    </div>
                    <button className="loginSubmit" type="submit">
                        Zaloguj się
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignIn;