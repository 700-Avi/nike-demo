import React from 'react'

const Login = () => {
  return (
    <div className='container-login'>
        <div className='login-box'>
        <div>
        <h3>Login</h3>
        </div>

        <div className='form-menu'>
            <label>User Name <span>*</span></label>
            <input type="text" />
            <label>User Email <span>*</span></label>
            <input type="email" />
            <label>User Password <span>*</span></label>
            <input type="password" />
            <label>OTP <span>*</span></label>
            <input type="number" />
        </div>

        <div className='form-submit'>
            <button><a href="##">Submit</a></button>
            <button><a href="##">clear</a></button>

        </div>
        </div>
    </div>
  )
}

export default Login
