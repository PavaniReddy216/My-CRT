import { useState } from "react";

const Signup = () => {
    const[username,setUsername] = useState('');
    const[password,setPassword] = useState('');
    const[gender,setgender] = useState('');
    const[address,setaddress] = useState('');
    const[qualification,setqualification] = useState('');
    //business logic
    const registerUser = (e) => {
        if((username==="admin" && password==="admin123"  ))
        {
            alert("login success");
        }
        else{
            alert("sorry boss..login failed");
        }
        e.preventDefault();
    }
    return (
        <div>
            <center>
                <h2>Welcome to Diet!!!</h2>
                <form onSubmit={registerUser} method='post'>
                    <label>Enter UserName:</label>
                    <input type='text' name='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <br></br>
                    <br></br>
                    <label>Enter Password:</label>
                    <input type='password' name='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <br></br>
                    <br></br>
                    <label>Gender:</label>
                 <input type='radio'name='gender' value='male' onChange={(e)=>setgender(e.target.value)}/>
                 <label >Male</label>
                 <input type='radio' name='gender' value='female' onChange={(e)=>setgender(e.target.value)}/>
                 <label >Female</label><br></br>


                    <br></br>
                    <label>address:</label>
                    <input type='textarea' name='address' value={address} onChange={(e)=>setaddress(e.target.value)}/>
                    <br></br>
                    <br></br>
                    <label >Qualification:</label>
                    <select value={qualification} onChange={(e) => setqualification(e.target.value)}>
                    <option value="select">select</option>
                    <option value="B.TECH">B.TECH</option>
                    <option value="MCA">MCA</option>
                    <option value="other">Other</option>
                    </select>
                            <br></br>
                    <input type='submit' value="register"/>
                </form>

            </center>
        </div>
    );
};
export default Signup;

