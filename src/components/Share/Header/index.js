import '@assets/styles/global.scss';
import './Header.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@assets/images/logo/logo.png';
function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header--wrapper d-flex align-items-center justify-content-between">
                    <div className="header--left">
                        <Link to="/" className="logo">
                            <img src={logo} alt="logo" />
                            <span>CodingUI</span>
                        </Link>
                    </div>
                    <div className="header--right">
                        <Link className="btn btn--register" to="/register">
                            Sign up
                        </Link>
                        <Link className="btn btn--login bg-gradient-secondary btn-effect" to="/login">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
