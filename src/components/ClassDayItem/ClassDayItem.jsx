import { useState } from "react";
import './ClassDayItem.css';
import { Link } from 'react-router-dom';


export default function ClassDayItem(props) {
  return (
      <div className="item">
        <Link to={`/classDays/${props.ID}`}> <h1>{props.date}</h1></Link>
        <p>{props.time}</p>
        <p>{props.location}</p>

      </div>
  );
}
