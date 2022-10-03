import React from 'react';
import vpn from './../assets/wireguard-vpn.png';

export default function VPN() {
    return (
        <section className='MainBanner VPN'>
            <div className='texter'>
                <h1 className='mainH1'>Web Software Developers</h1>
                <p className='u-section-2 subText'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    <button className='start'>Get Start</button>
                </p>
            </div>
            <div>
                <img src={vpn} alt='main banner' className='mainImg' />
            </div>
        </section>
    );
}
