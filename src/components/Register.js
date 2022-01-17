import React from 'react';
import { Link } from "react-router-dom";
import Decoration from "../assets/Decoration.svg";

const Register = () => {
    return (
        <div className="registerBox">
            <div className="registerBox_navMenu">
                <div className="registerBox_navMenu__upMenu">
                    <div className="upMenuBox1">
                        <Link
                            className="Link"
                            to="/logowanie"
                        >
                            Zaloguj
                        </Link>
                    </div>
                    <div className="upMenuBox2">
                        Załóż konto
                    </div>
                </div>
                <div className="registerBox_navMenu__downMenu">
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
            <div className="registerBox_title">
                <div className="registerBox_title__text">
                    Załóż konto
                </div>
                <div>
                    <img src={Decoration} alt="Decoration-Sign"/>
                </div>
            </div>
            <form
                className="registerBox_login"
            >
                <div className="registerBox_login__loginBox">
                    <div className="loginBox_input">
                        <label className="loginBox_input__label">
                            Email
                        </label>
                        <input
                            className="loginBox_input__field"
                            type="email"
                        />
                    </div>
                    <div className="loginBox_input passwordInput">
                        <label className="loginBox_input__label">
                            Hasło
                        </label>
                        <input
                            className="loginBox_input__field"
                            type="password"
                        />
                    </div>
                    <div className="loginBox_input">
                        <label className="loginBox_input__label">
                            Powtórz Hasło
                        </label>
                        <input
                            className="loginBox_input__field"
                            type="password"
                        />
                    </div>
                </div>
                <div className="registerBox_login__loginButtons">
                    <div className="loginButton">
                        <Link className="LinkButton" to="/logowanie">
                            Zaloguj się
                        </Link>
                    </div>
                    <button
                        className="loginSubmit"
                        type="submit"
                    >
                        Załóż konto
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;