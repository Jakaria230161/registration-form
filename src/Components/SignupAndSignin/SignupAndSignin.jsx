import React from 'react'

function SignupAndSignin() {
  return (
  <div className="container">
  {/* Sign up section start here  */}
  <div className="form signup">
    <h2>Sign UP</h2>
    <div className="inputBox">
      <input type="text" required="required" />
      <i className="fa-regular fa-user" />
      <span>Username</span>
    </div>
    <div className="inputBox">
      <input type="text" required="required" />
      <i className="fa-regular fa-envelope" />
      <span>Email Address</span>
    </div>
    <div className="inputBox">
      <input type="text" required="required" />
      <i className="fa-solid fa-lock" />
      <span>Create Password</span>
    </div>
    <div className="inputBox">
      <input type="text" required="required" />
      <i className="fa-solid fa-lock" />
      <span>Confirm Password</span>
    </div>
    <div className="inputBox">
      <input type="submit" defaultValue="Create An Account" />
    </div>
    <p>Already have an account? <a href="#" className="login">Log in</a></p>
  </div>
  {/* Sign up section end here  */}
</div>

  )
}

export default SignupAndSignin