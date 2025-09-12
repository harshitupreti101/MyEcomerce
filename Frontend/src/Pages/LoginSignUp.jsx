import React from 'react'
import './CSS/LoginSignUp.css'
import { useState } from 'react'

const LoginSignUp = () => {
  const [state,setState] = useState("Login");
  const [formData,setFormData] = useState({
      username:"",
      password:"",
      email:""
  });
  const changeHandler = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }
  const signup = async () => {
    let responseData;
    await fetch('http://localhost:3000/signup',{
      method:'POST',
      headers: {
        Accept:'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData)
    })
    .then ((resp)=>resp.json())
    .then((data)=>responseData=data)
    if (responseData.success) {
        localStorage.setItem('auth-token',responseData.token);
        window.location.replace("/");
    }
    else {
      alert(responseData.errors);
    }
    // console.log(responseData);
  }
  const login = async (e) => {
    
      let responseData;
    await fetch('http://localhost:3000/login',{
      method:'POST',
      headers: {
        Accept:'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData)
    })
    .then ((resp)=>resp.json())
    .then((data)=>responseData=data)
    if (responseData.success) {
        localStorage.setItem('auth-token',responseData.token);
        window.location.replace("/");
    }
    else {
      alert(responseData.errors);
    }
    console.log(responseData.token);
   
  }

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state==="Sign Up"?<input  onChange={(e)=>{changeHandler(e)}} value={formData.username} name="username"  type="text" placeholder='Your Name'/>:<></>}
          <input onChange={(e)=>{changeHandler(e)}} name="email" value={formData.email} type="email" placeholder='Email Address'/>
          <input onChange={(e)=>{changeHandler(e)}} name="password"  value={formData.password} type="password" placeholder='Password'/>
        </div>
        <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
        {
          state==="Sign Up"?
          <p className="loginsignup-login">Already have an account? <span onClick={()=>{setState("Login")}}>Login here</span></p>:
          <p className="loginsignup-login">Create an account? <span onClick={()=>{setState("Sign Up")}}>Click here</span></p>      
        }
        <div className="loginsignup-agree">
            <input type="checkbox" name='' id=''/>
            <p>By Continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp