import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className='login'>

        <img src="https://cdn.fcglcdn.com/brainbees/images/n/fc-logo-s.jpg" alt="Logo" title="Logo" />
        <p className='subHeader'>Login / Register</p>
        <label>Email ID/Mobile No.</label> 
        <input type="text" className="details" placeholder="Enter your Email ID or Mobile No." id="lemail" name="email" autocomplete="off" value="" onkeypress="return clearall();"></input>       
        <div className="continue" onclick="checkemail('login',1);">CONTINUE</div>
        <div className='or'>
          <p className='orBorder'>OR</p>
        </div>
        <div className='ssoLoginContainer'>
            <div className="ssoLogin">
                <span>
                    <img className='image' src="//cdn.fcglcdn.com/brainbees/images/n/login-signup-facebook.png" alt="facebook" />
                </span>
                <span>FACEBOOK</span>
            </div>
            <div className="ssoLogin">
                <span><img className='image' src="//cdn.fcglcdn.com/brainbees/images/n/login-signup-gmail.png" alt="Google" /></span>
                <span>GOOGLE</span>
            </div>
        </div>
        <p>New to FirstCry? <a href="#">Register Here</a></p>
        <p className="terms">By continuing, you agree to Firstcry's <a href="https://www.firstcry.com/termsofuse" target="_self">Conditions of Use</a> and <a href="https://www.firstcry.com/privacypolicy" target="_self">Privacy  Notice.</a></p>
    </div>
  )
}

export default Login