import React from "react";
import '../App.css';
function State(props){
  
   //setState([...new Set(props.data.map(item => item.state))]);
    return(
        <div className="state" >
     <select>
         <option>State Name</option> 
         <option>{props.state}</option>
         </select>
         </div>
    )
}
export default State;