import {useState} from "react";
import './App.css';
import data from "./components/Data.json";
import ListPage from './components/ListPage';

function App() {
  const[rides,setRides]=useState(data);
  var d= new Date().getTime();
  const ridedata=[...data];
  
  const handleNearest=()=>{
   const userData=27;
   function  findNearestNumber(arr,num){
                var curr = arr[0];
                var diff = Math.abs (num - curr);
                for (var val = 0; val < arr.length; val++) {
                    var newdiff = Math.abs (num - arr[val]);
                    if (newdiff < diff) {
                        diff = newdiff;
                        curr = arr[val];
                    }
                }
                return diff;
        }
   setRides(ridedata.sort((a,b) => {
          return(findNearestNumber(a.station_path, userData) - findNearestNumber(b.station_path, userData))
      }));                      
    }
               
  const handleUpcoming=()=>{   
      const filtered=(data.filter(item => new Date(item.date).getTime() > d) )
      //console.log(filtered);
      setRides(filtered);
    }

  const handlePast=()=>{
    setRides(data.filter(item => new Date(item.date).getTime()  < d ))
  }
  
  return (
    <div className="main">
     <header>
       <h1>Rides</h1>
       <h3>Khushbu</h3>
       <div className="profile-pic">
       </div>
       </header>
       <div className="top">
              <p  className="tag" onClick={handleNearest}   >Nearest Rides </p>
              <p  className="tag"  onClick={handleUpcoming}>Upcoming Rides </p>
              <p  className="tag" onClick={handlePast}>Past Rides </p>
              <div className="filter">Filter</div>
       </div>
       <div className="container">
            <ListPage rides= {rides} /> 
       </div>
       </div>
  );
}
export default App;
