import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
const LogIn=()=>{
    const [id, setId]=useState("")
    const [password, setPassword]=useState("")
    
    const navigate=useNavigate();
    const Login= async()=>{
        console.log("id, password", id, password);
        let result = await fetch("http://localhost:4500/login",{
            method: 'post',
            body: JSON.stringify({id, password}),
            headers:{
                'content-Type':'application/json'
            }
        })
        result= await result.json();
        console.log(result);
        if(result.name){
            localStorage.setItem("user", JSON.stringify(result));
            navigate("/")
        }else{
            alert("fill correct data")
            
        }
    }
    return(
        <div>
            <h2 className="head">Log-In</h2>
            <input type="text" placeholder="Enter your CpId" className="addbox"
             onChange={(e)=>setId(e.target.value)} value={id}/>
            <input type="password" placeholder="Enter your password" className="addbox"
             onChange={(e)=>setPassword(e.target.value)} value={password}/>
            <button onClick={Login} type="button" className="button addbox">Log-In</button>
        </div>
        
    )
}
export default LogIn;
