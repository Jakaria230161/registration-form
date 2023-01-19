import React from 'react'

function Signin() {
  return (
    <div className='container'>
      {/* Sign in section start here  */}
  <div className="form signin">
    <h2>Sign IN</h2>
    <div className="inputBox">
      <input type="text" required="required" />
      <i className="fa-regular fa-user" />
      <span>Username</span>
    </div>
    <div className="inputBox">
      <input type="text" required="required" />
      <i className="fa-solid fa-lock" />
      <span>Password</span>
    </div>
    <div className="inputBox">
      <input type="submit" defaultValue="Login" />
    </div>
    <p>Not registered yet? <a href="#" className="create">Create an Account</a></p>
  </div>
  {/* Sign in section end here  */}
    </div>
  )
}

export default Signin