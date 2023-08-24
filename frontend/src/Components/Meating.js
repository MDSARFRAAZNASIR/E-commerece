import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
const Meating=()=>{
    const [meatings, setMeatings]=useState([])
       useEffect(()=>{
        getMeatings();
       },[]);
       const getMeatings= async()=>{
        let result = await fetch("http://localhost:4500/meatings",{
            headers:{
                'content-Type':'application/json'
            }
        })
        result= await result.json();
        setMeatings(result)
       }
       console.log("meatings", meatings)

       const Meatingcancel= async(id)=>{
            let result = await fetch(`http://localhost:4500/cancel/${id}`,{
                method:'delete',
                headers:{
                    "content-Type":"application/json"
                }
            });
            result= await result.json();
            if(result){
                alert("record cancel");
                getMeatings();
            }
        }
        const Searchcontact= async (event)=>{
            let key=event.target.value;
            if(key){
                let result= await fetch(`http://localhost:4500/search/${key}`)
                result= await result.json();
                if(result){
                    setMeatings(result);
                }
            }else{
                getMeatings();
            }
        } 
       return (

        <div className="product-list">
            <h2 className="head">Meeting list</h2>
            {/* <input type="text" placeholder="search contact" className="searchbar" 
            onChange={Searchcontact}/> */}
            <ul>
                <li className="ind" >s. n</li>
                <li className="l1">Dates</li>
                <li className="l2">MeetingName</li>
                <li className="l3">MeetingPlace</li>
                <li className="l4">Operations</li>
            </ul>
            {
              meatings.map((item ,index)=>
                <ul key ={item._id}>
                    <li className="ind">{index+1}</li>
                    <li className="l1">{item.date}</li>
                    <li className="l2">{item.meat}</li>
                    <li className="l3">{item.place}</li>
                    <li className="l4">
                        <button><Link className="upbotton" to={"/updatemeating/" +item._id}>Update</Link></button>
                        <button className="delete" onClick={()=>Meatingcancel(item._id)}>Cancel</button>
                        
                    </li>
                   
                </ul>
                )
                
            }

        </div>
    )
}
export default  Meating;