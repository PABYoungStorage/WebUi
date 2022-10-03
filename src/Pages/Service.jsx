import React from 'react';
import man from './../assets/man.jpg';
import serivceDB from './../assets/serivceDB.png';
import vpn from './../assets/vpnimg.png';
import ysp from './../assets/ysp.png';


import { Link } from 'react-router-dom';

export default function Service() {
    return (
        <section className='Solutions man'>
            <div className='textArea'>
                <h1>IT solutions</h1>
                <p class="subText">We collaborate with you to create new value through digital transformation. We have hundreds of specialists at your service. </p>
                <div>
                    <div className='boxArea'>
                        <div>
                            <div>
                                <Link to="/vpn">
                                    <img src={vpn} alt='serviceDB' className='boxImg' />
                                    <button className='pageTitle start'>VPN</button>
                                </Link>

                            </div>
                            <div>
                                <Link to="/labs">
                                    <img src={ysp} alt='serviceDB' className='boxImg' />
                                    <button className='pageTitle start'>Labs</button>
                                </Link>
                            </div>
                        </div>

                        <div>
                            <div>
                                <Link to="/database">
                                    <img src={serivceDB} alt='serviceDB' className='boxImg' />
                                    <button className='pageTitle start'>Database</button>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src={man} alt='main banner' className='solutionImg' />
        </section>
    );
}
