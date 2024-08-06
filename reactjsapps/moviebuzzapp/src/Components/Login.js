import React, { useState } from 'react';

const Login = () => {

//how to maintain state
const{username,setusername}= useState('');   //to modify the state
const{password,setpassword}= useState(''); 

//business logic
const loginUser=() =>{
    if(username==="admin" && password==="admin123"){
        alert("login success")
    }
    else{
        alert("please enter correct details")
    }
}
e.preventDefault();

    return (
        <div>
            <h2>WELCOME TO LOGIN PAGE</h2>
            <form onSubmit={loginUser} method='post'>
                <label>ENTER USERNAME:</label>
                <input type='text' name='username' value={username} onChange={()=>setusername(e.target.value)}/>
                <br></br>
                <br></br>
                <label>ENTER PASSWORD:</label>
                <input type='password' name='password' value={password} onChange={()=>setpassword(e.target.value)}/>
                <br></br>
                <br></br>
                <input type='button' name='Login'/>
            </form>
        </div>
    );
};

export default Login;