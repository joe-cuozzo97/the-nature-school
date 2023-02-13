import { useState } from "react";
import './ClassDayItem.css';
import { Link } from 'react-router-dom';


export default function ClassDayItem(props) {
  console.log(props)
  return (
    
      <div className="item">
        <h1>{props.date}</h1>
        <p>{props.time}</p>
        <p>{props.location}</p>

      </div>
      
    
  );
}
