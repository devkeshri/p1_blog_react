import React from 'react'

import "../styles/Registration.css"
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
<a href="/"><img src={require('../assest/loder.png')} alt=""/></a>
</div>
<h2>Registration Here</h2>
<div className="form-input">
<label for="name">Full name</label>
<input type="text" name="name" placeholder="Full name"/>
</div>
<div className="form-input">
<label for="name">Email Address</label>
<input type="email" name="email" placeholder="Email Address"/>
</div>
<div className="form-input">
<label for="name">Password</label>
<input type="password" name="password" placeholder="Password"/>
</div>
<div className="form-input">
<label for="name">Confirm Password</label>
<input type="password" name="password" placeholder="Confirm Password"/>
</div>
<div className="form-input pt-30">
<input type="submit" name="submit" value="Registration"/>
</div>

<a href="/login" className="registration">login</a>
</div>
</form>
    
    </main>
  )
}

export default Login