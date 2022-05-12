import React from "react";
import '../App.css';
function City(props){
  
   //setCity([...new Set(props.data.map(item => item.city))]);
    return(
        <div className="city" key={props.city}>
     <select>
         <option>city Name</option> 
        <option>{props.city}</option>
         </select>
         </div>
    )
}
export default City;