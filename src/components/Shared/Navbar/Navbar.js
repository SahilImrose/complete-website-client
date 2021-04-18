import React from 'react';
import { Link } from 'react-router-dom';
import navImg from '../../../images/Capture.PNG'
import Login from '../../Login/Login/Login'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <div className="me-auto"><Link className="navbar-brand" to="/"><img style={{height:'100px'}}  src={navImg} alt=""/></Link></div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="ms-auto">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/booking">Booking</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item"><p><Login/></p>
                        </li>
                    </ul></div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;