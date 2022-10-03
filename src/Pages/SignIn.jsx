import React, { useState } from "react";
import { signUp, signIn } from "../components/Api";
import ReactMessage from '../components/ReactMessage'
import Terminals from "../components/Terminal";

export default function SignIn() {
  const [showForgotPwd, setShowForgotPwd] = useState(false);
  const [msgType, setMsgType] = useState(false);

  const [toasterMsg, setToasterMsg] = useState('');
  const [signUpForm, setSignUpForm] = useState({ 'username': "", 'password': "", 'email': '' });
  const [signInForm, setSignInForm] = useState({ 'username': "", 'password': "" });

  const handleInputChange = (event, type) => {
    console.log('event')
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    let partialState = {};
    partialState[name] = value;
    console.log('partialState', partialState)
    if (type === 'signUp') {
      setSignUpForm((prev) => ({
        ...prev,
        [name]: value
      }))
    } else if (type === 'signIn') {
      setSignInForm((prev) => ({
        ...prev,
        [name]: value
      }))
    }

    setToasterMsg('')
  }

  const createAccountHandler = (type) => {
    let cc
    if (type === 'signUp') {
      cc = signUp(signUpForm)
    } else if (type === 'signIn') {
      cc = signIn(signInForm)
    }
    cc.then(x => {
      setToasterMsg(x.message)
      setMsgType(x.status)
    })
  }

  return (


    <section className="MainBanner signIn">
      {showForgotPwd && (
        <div className="loginComp">
          <form>
            <div class="form-data">
              <h1>Forgot your Young Storage Access </h1>
              <input type="email" placeholder="Email" name="Email" value="" />
              <input type="button" value="submit" className="btn" />
              <p className="forgot" onClick={() => setShowForgotPwd(false)}>
                back to Login
              </p>
            </div>
          </form>
        </div>
      )}
      {!showForgotPwd && (
        <div className="loginComp">
          <form>
            <div className="form-data">
              <h1>Access your Young Storage </h1>
              <input
                type="text"
                placeholder="username"
                name="username"
                onChange={(e) => handleInputChange(e, 'signIn')}
                defaultValue={signInForm.username}
              />
              <input
                type="password"
                placeholder="password"
                name="password"
                onChange={(e) => handleInputChange(e, 'signIn')}
                defaultValue={signInForm.password}
              />
              <input type="button" value="Sign In" className="btn" onClick={() => createAccountHandler('signIn')} />
              <p className="forgot" onClick={() => setShowForgotPwd(true)}>
                forgot password?
              </p>
            </div>
          </form>
        </div>
      )}
      <div className="createAcc">
        <form>
          <div className="form-data">
            {/* <h1>Want to be member of Young Storage </h1> */}
            <h1>Want to be member </h1>
            <input
              type="text"
              placeholder="username"
              name="username"
              onChange={(e) => handleInputChange(e, 'signUp')}
              defaultValue={signUpForm.username}
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={(e) => handleInputChange(e, 'signUp')}
              defaultValue={signUpForm.password}
            />
            <input type="email" placeholder="email" name="email" onChange={(e) => handleInputChange(e, 'signUp')} defaultValue={signUpForm.email} />
            <input type="button" defaultValue="Sign Up" className="btn" onClick={() => createAccountHandler('signUp')} />
          </div>
        </form>
      </div>
      {toasterMsg.length > 0 && <ReactMessage data={toasterMsg} type={msgType} />}
    </section>
  );
}
