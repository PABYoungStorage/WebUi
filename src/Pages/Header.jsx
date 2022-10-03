import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import Database from './Database';
import Labs from './Labs';
import Service from './Service';
import SignIn from './SignIn';
import VPN from './VPN';
import logo from './../assets/logo.png';

function Header() {
    return (
        <div>
            <Router>
                <div className='navigation'>
                    <div>
                        <img src={logo} alt='logo' className='mainLogo' />
                    </div>

                    <ul className='lister'>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/database">Database</Link>
                        </li>
                        <li>
                            <Link to="/labs">Labs</Link>
                        </li>
                        <li>
                            <Link to="/services">Services</Link>
                        </li>

                        <li>
                            <Link to="/vpn">VPN</Link>
                        </li>
                        <li>
                            <Link to="/signIn">Login</Link>
                        </li>
                    </ul>
                </div>
                <Routes>
                    <Route exact path='/' element={<HomePage />} />
                    <Route path="database" element={<Database />} />
                    <Route path="labs" element={<Labs />} />
                    <Route path="services" element={<Service />} />
                    <Route path="signIn" element={<SignIn />} />
                    <Route path="vpn" element={<VPN />} />
                    <Route path="*" element={<HomePage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default Header;