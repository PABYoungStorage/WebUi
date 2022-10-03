import React, { useState } from "react";

export default function SignIn() {
  const [showForgotPwd, setShowForgotPwd] = useState(false);

  return (
    <section className="MainBanner signIn">
      {showForgotPwd && (
        <div className="loginComp">
          <form>
            <div class="form-data">
              <h1>Forgot your Young Storage Access </h1>
              <input type="email" placeholder="Email" name="Email" value="" />
              <input type="submit" value="submit" className="btn" />
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
            <div class="form-data">
              <h1>Access your Young Storage </h1>
              <input
                type="text"
                placeholder="username"
                name="username"
                value=""
              />
              <input
                type="password"
                placeholder="password"
                name="password"
                value=""
              />
              <input type="submit" value="Sign In" className="btn" />
              <p className="forgot" onClick={() => setShowForgotPwd(true)}>
                forgot password?
              </p>
            </div>
          </form>
        </div>
      )}
      <div className="createAcc">
        <form>
          <div class="form-data">
            {/* <h1>Want to be member of Young Storage </h1> */}
            <h1>Want to be member </h1>
            <input
              type="text"
              placeholder="username"
              name="username"
              value=""
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              value=""
            />
            <input type="email" placeholder="email" name="email" value="" />
            <input type="number" placeholder="number" name="number" value="" />
            <input type="submit" value="Sign Up" className="btn" />
          </div>
        </form>
      </div>
    </section>
  );
}
