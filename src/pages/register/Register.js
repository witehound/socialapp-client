import './Register.css'

function Register() {
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
             <input type="text" className="login-input" placeholder='Username'/>
             <input type="password" className="login-input" placeholder='Password'/>
             <input type="password" className="login-input" placeholder='Re-enter Password'/>
             <button className="login-button">SIGN UP</button>
             <button className='login-reigiester-button'>lOGIN TO ACCOUNT</button>
           </div>
          </div>
      </div>
    </div>
  )
}

export default Register