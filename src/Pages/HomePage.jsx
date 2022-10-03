import React from 'react';
import { Link } from 'react-router-dom';
import banner from './../assets/ffffff.jpg';
import solutions from './../assets/sample1.jpg';
import man from './../assets/man.jpg';
import mobile from './../assets/mobile.png';

export default function HomePage() {
    return (
        <>
            <section className='MainBanner'>
                <div className='texter'>
                    <h1 className='mainH1'>Web Software Developers</h1>
                    <p className='u-section-2 subText'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        <button className='start'>Get Start</button>
                    </p>
                </div>
                <div>
                    <img src={banner} alt='main banner' className='mainImg' />
                </div>
            </section>

            {/* <section className='Solutions'>
                <div className='textArea'>
                    <h1>IT solutions</h1>
                    <p class="subText">We collaborate with you to create new value through digital transformation. We have hundreds of specialists at your service. </p>
                </div>
                <img src={solutions} alt='main banner' className='solutionImg' />
            </section>
            <section className='MainBanner'>
                <div className='texter'>
                    <h1 className='mainH1'>Web Software Developers</h1>
                    <p className='u-section-2'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
                </div>
                <div>
                    <img src={mobile} alt='main banner' className='mainImg' />
                </div>
            </section>
            <section className='Solutions man'>
                <div className='textArea'>
                    <h1>IT solutions</h1>
                    <p class="subText">We collaborate with you to create new value through digital transformation. We have hundreds of specialists at your service. </p>
                </div>
                <img src={man} alt='main banner' className='solutionImg' />
    </section> */}
        </>
    );
}
