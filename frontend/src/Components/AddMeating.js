import React, { useState } from "react";
const AddMeating=()=>{
    const [date, setDate]=useState("")
    const [meat, setMeat]=useState("")
    const [place, setPlace]=useState("")

    const Addmeating=async ()=>{
        console.log(date, meat, place)
        let result=await fetch("http://localhost:4500/addmeating",{
            method:'post',
            body: JSON.stringify({date, meat, place}),
            headers:{
                'content-Type':"application/json"
            }
        })
        result = await result.json();
        console.log(result);
    }
    return(
        <div>
            <h2 className="head">Add Contact</h2>
            <input type="text" placeholder="Enter the  date of meating" className="addbox"
            value={date} onChange={(e)=>(setDate(e.target.value))}/>
            <input type="text" placeholder="Enter  the meating name" className="addbox"
            value={meat} onChange={(e)=>(setMeat(e.target.value))}/>
            <input type="text" placeholder="Enter the place" className="addbox"
            value={place} onChange={(e)=>(setPlace(e.target.value))}/>
            <button onClick={Addmeating} className="button addbox">Add-Meating</button>
        </div>
    )
}
export default AddMeating;