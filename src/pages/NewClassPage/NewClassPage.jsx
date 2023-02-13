import React from "react";
import * as classDaysAPI from '../../utilities/classDays-api';
import './NewClassPage.css';
import { useState } from "react";
import ClassDayItem from "../../components/ClassDayItem/ClassDayItem";

export default function NewClassPage({addClassDay}) {
  const [newClassDay, setNewClassDay] = useState("")
  const [formData, setFormData]= useState({
    date:"",
    time:"",
    location:"",
    activities:"",
    forecast:""
  })
  function handleChange(e){
    const newFormData = {...formData, [e.target.name]: e.target.value};
    setFormData(newFormData)
  }

  function addClassDay(newClassDay){
  setNewClassDay([...newClassDay, newClassDay])
  classDaysAPI.addClassDayToPage(newClassDay)
  }
function handleSubmit(e){
  e.preventDefault()
  console.log(formData)
  classDaysAPI.addClassDayToPage(formData)

}

  return (
    <>
    <div>
     <h2>New Class Day</h2>
     <form onSubmit={handleSubmit}>
  
     <label>Date</label>
     <input name="date" onChange={handleChange} />
     <label>Time</label>
     <input name="time" onChange={handleChange} />
     <label>Location</label>
     <input name="location" onChange={handleChange} />
     <label>Activities</label>
     <input name="activities" onChange={handleChange} />
     <label>Forecast</label>
     <input name="forecast" onChange={handleChange} />
     <button type="submit">Add New Class Day</button>
     </form>
    </div>
    </>
  );

}


