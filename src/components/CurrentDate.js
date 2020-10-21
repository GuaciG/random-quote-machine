import React from 'react';
import './CurrentDate.css';


//Today's date updated. I only want to render weekday and date in English format.
let d = new Date();
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//Child component to get current date.
const CurrentDate = () => {
  return (
    <div>
      <p>Quote for today: {days[d.getDay()]}, {d.getDate()} {months[d.getMonth()]} {d.getFullYear()}</p>
     </div> 
  );
};

export default CurrentDate;