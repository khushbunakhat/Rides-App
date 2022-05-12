import React from "react";
import Ride from './Ride';
function ListPage(props){
   //console.log(props);
    return (
       <div> 
          { props.rides.map(ride => <Ride key={ride.id} ride={ride} /> )}
              </div>
    )
}

export default ListPage;