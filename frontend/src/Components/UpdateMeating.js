import React, {useState, useEffect} from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
const UpdateMeating=()=>{
    const [date, setDate]=useState("")
    const [meat, setMeat]=useState("")
    const [place, setPlace]=useState("")
    const params=useParams();
    const navigate=useNavigate();
    useEffect(()=>{
        getMeatingDetails();
    }, []);
    const getMeatingDetails= async()=>{
        console.log(params);
        let result = await fetch(`http://localhost:4500/prefillpro/${params.id}`);
        result= await result.json();
        setDate(result.date)
        setMeat(result.meat)
        setPlace(result.place)
    }
    const Updatemeating=async ()=>{
        console.log(date, meat, place)
        let result=await fetch(`http://localhost:4500/updatemeating/${params.id}`,{
            method:'put',
            body: JSON.stringify({date, meat, place}),
            headers:{
                'Content-Type':"application/json"
            }
        })
        result = await result.json();
        console.log(result);
        navigate("/")
    }
    return(
        <div>
        <h2 className="head">Update-Laptop</h2>
        <input type="text" placeholder="Enter the name" className="addbox"
         value={date} onChange={(e)=>(setDate(e.target.value))}/>
        <input type="text" placeholder="Enter contact number" className="addbox"
        value={meat} onChange={(e)=>(setMeat(e.target.value))}/>
        <input type="text" placeholder="Enter your relation" className="addbox"
         value={place} onChange={(e)=>(setPlace(e.target.value))}/>
        <button className="button addbox" onClick={Updatemeating}>Update-Product</button>
    </div>

    )
}
export default UpdateMeating;