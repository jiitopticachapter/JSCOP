import React from 'react'
import './Registration.css';

function Registration() {
  return (
    <div className='Registration'>
        
<div class="back"></div>
<div class="registration-form">
  <header>
    <h1>Sign Up</h1>
    <p>Fill in all informations</p>
  </header>
  <form>
    <div class="input-section email-section">
      <input class="email" type="email" placeholder="ENTER YOUR E-MAIL HERE" autocomplete="off"/>
      <div class="animated-button"><span class="icon-paper-plane"><i class="fa fa-envelope-o"></i></span><span class="next-button email"><i class="fa fa-arrow-up"></i></span></div>
    </div>
    <div class="input-section password-section folded">
      <input class="password" type="password" placeholder="ENTER YOUR PASSWORD HERE"/>
      <div class="animated-button"><span class="icon-lock"><i class="fa fa-lock"></i></span><span class="next-button password"><i class="fa fa-arrow-up"></i></span></div>
    </div>
    <div class="input-section repeat-password-section folded">
      <input class="repeat-password" type="password" placeholder="REPEAT YOUR PASSWORD HERE"/>
      <div class="animated-button"><span class="icon-repeat-lock"><i class="fa fa-lock"></i></span><span class="next-button repeat-password"><i class="fa fa-paper-plane"></i></span></div>
    </div>
    <div class="success"> 
      <p>ACCOUNT CREATED</p>
    </div>
  </form>
</div>
    </div>
  )
}

export default Registration