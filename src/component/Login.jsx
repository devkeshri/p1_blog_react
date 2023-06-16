import React from 'react'
import "../styles/Login.css"
import login from '../assest/login-bg.mp4'

function Login() {
  return (
    <main className="login-body" data-vide-bg={login} style={{position:"relative"}}>
    <div className="login-body1">
    <video className="vid" width="100%" muted autoPlay loop >
<source src={login} type="video/mp4"/>
</video>
    </div>
    
    <form className="form-default" action="login-bg.mp4" method="POST">
    <div className="login-form">
    
    <div className="logo-login">
    <a href="/">
    <img src={require('../assest/loder.png')} alt=""/></a>
    </div>
    <h2>Login Here</h2>
    <div className="form-input">
    <label for="name">Email</label>
    <input type="email" name="email" placeholder="Email"/>
    </div>
    <div className="form-input">
    <label for="name">Password</label>
    <input type="password" name="password" placeholder="Password"/>
    </div>
    <div className="form-input pt-30">
    <input type="submit" name="submit" value="login"/>
    </div>
    
    <a href="#" className="forget">Forget Password</a>
    
    <a href="/registration" className="registration">Registration</a>
    </div>
    </form>
    
    </main>
  )
}

export default Login