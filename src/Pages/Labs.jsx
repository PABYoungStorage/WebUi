// import React from 'react';
// import mobile from './../assets/mobile.png';
// export default function Labs() {
//     return (
//         <section className='MainBanner'>
//             <div className='texter'>
//                 <h1 className='mainH1'>Web Software Developers</h1>
//                 <p className='u-section-2'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
//             </div>
//             <div>
//                 <img src={mobile} alt='main banner' className='mainImg' />
//             </div>
//         </section>
//     );
// }

import React, { useState } from "react";
import { Link } from "react-router-dom";
import banner from "./../assets/ffffff.jpg";
import solutions from "./../assets/sample1.jpg";
import man from "./../assets/man.jpg";
import mobile from "./../assets/mobile.png";
import vscode from "./../assets/vscode.png";
import gear from "./../assets/gear.gif";

export default function Labs() {
  const [finderModal, setFinderModal] = useState(false);
  return (
    <>
      <section className="MainBanner">
        <div className="texter">
          <h1 className="mainH1">Web Software Developers</h1>
          <p className="u-section-2">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum
          </p>
          <div className="labMain">
            <button className="start">
            <img src={gear} alt='loader' />
              Deploy</button>
            <button className="start" onClick={() => setFinderModal(true)}>
              SSH
            </button>
          </div>
        </div>
        <div>
          <img src={mobile} alt="main banner" className="mainImg" />
        </div>

        

        {finderModal && (
          <>
            <div class="bg-image"></div>
            <div id="myModal" class="modal">
              <div class="modal-content">
                <div class="modal-header">
                  <span class="close" onClick={() => setFinderModal(false)}>
                    &times;
                  </span>
                  <h2 style={{'margin': '1%'}}>SSH Credentials</h2>
                </div>
                <div class="modal-body">
                <table>
                <tr>
                  <th>Field</th>
                  <th>Values</th>
                </tr>
                <tr>
                  <td>User Name</td>
                  <td>Maria Anders</td>
                </tr>
                <tr>
                  <td>Password</td>
                  <td>Francisco Chang</td>
                </tr>
                <tr>
                  <td>Container IP</td>
                  <td>Roland Mendel</td>
                </tr>
                <tr>
                  <td>SSH connection</td>
                  <td>Helen Bennett</td>
                </tr>
              </table>
                </div>
                {/* <div class="modal-footer">
                  <h3>Modal Footer</h3>
                </div> */}
              </div>
            </div>
          </>
        )}
      </section>
      <section className='MainBanner reverse'>
          <div className='texter'>
            <h1 className='mainH1'>Web Software Developers</h1>
            <p className='u-section-2'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            <button className="start">VS Code</button>
            </p>
          </div>
          <div>
            <img src={vscode} alt='main banner' className='mainImg' />
          </div>
        </section>
    </>
  );
}
