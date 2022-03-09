import './Login.css'

function Login() {
  return (
    <div className='login-div'>
      <div className="login-wrap">
          <div className="login-left">
            <h3 className="login-logo">9inesSocial</h3>
            <span className="login-desc">
                Connect with friends and the world around you
            </span>
          </div>
          <div className="login-right">
           <div className="login-box">
             <input type="email" className="login-input" placeholder='Emial'/>
             <input type="password" className="login-input" placeholder='Password'/>
             <button className="login-button">LOGIN</button>
             <span className="login-forgot">Forgot password</span>
             <button className='login-reigiester-button'>Create a new account</button>
           </div>
          </div>
      </div>
    </div>
  )
}

export default Login