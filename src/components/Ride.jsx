import  React from "react";
import '../App.css';
import City from "./City";
import State from "./State";

function Ride(props){
    return(
        <div className="first"  >
        <div id="img2">
         </div>
         <div className="content">   
          <p> Ride Id : {props.ride.id} </p>
          <p> Origin Station : {props.ride.origin_station_code}</p>
          <p> Station_Path : {props.ride.station_path+" "}</p>
          <p> Date : {props.ride.date}</p>
            </div>  
             <City city={props.ride.city} />     
            <State state={props.ride.state} />        
            </div> 
    
)}
export default Ride;