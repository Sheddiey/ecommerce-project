import React from "react";

const LoginSignup = () => {
  return (
    <div className="">
      <div className="">
        <h1>Sign Up</h1>
        <form className="">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </form>
        <button>Continue</button>
        <p className="">Already have an account? <span>Login here</span></p>
        <div>
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use and privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
