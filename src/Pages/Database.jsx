import React from 'react';
import solutions from './../assets/sample1.jpg';
// import db from './../assets/db.jpg';
import db from './../assets/db.png';


export default function Database() {
    return (
        <section className='Solutions'>
            <div className='textArea'>
                <h1>IT solutions</h1>
                <p class="subText">We collaborate with you to create new value through digital transformation. We have hundreds of specialists at your service. </p>
                <a href='http://169.254.0.4:8080/' target='_blank' className='launchDB' rel="noreferrer">Launch Database</a>
            </div>
            <img src={db} alt='main banner' className='solutionImg' />
        </section>
    );
}
