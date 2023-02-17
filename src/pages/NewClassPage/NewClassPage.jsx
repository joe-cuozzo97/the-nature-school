import React from "react";
import * as classDaysAPI from '../../utilities/classDays-api';
import './NewClassPage.css';
import { useState } from "react";

export default function NewClassPage({ user}) {
  const [newClassDay, setNewClassDay] = useState("")
  const [formData, setFormData]= useState({
    date:"",
    time:"",
    location:"",
    activities:"",
    forecast:"",
    userName:""
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
  console.log(user.name)
  classDaysAPI.addClassDayToPage({...formData,userName: user.name})

}
  return (
    <>
    
     <h2>New Class Day</h2>
     <div className="newForm">
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
     <button className="addNewBtn" type="submit">Add New Class Day</button>
     </form>
     </div>
    </>
  );

}


