import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import "./ClassDetailsPage.css"
import * as classDaysAPI from "../../utilities/classDays-api";
import ClassDayItem from "../../components/ClassDayItem/ClassDayItem";


export default function ClassDetailsPage() {
  
  const [classDay, setClassDay] = useState([]);
  const {id} = useParams()
  //   const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   const classDay = formData.get("classDay");
  //   setClassDay([...classDay, classDay]);
  // };

 useEffect(function() {
  console.log("hello")
  async function getClassDay() {
    const classDay = await classDaysAPI.getById(id);
    console.log(classDay)
    setClassDay(classDay);
  }
  getClassDay();
}, []);

  return (
    <>
    <div>
      <h1>Details Page</h1>
      <p>{classDay.date}</p>
      <p>{classDay.time}</p>
      <p>{classDay.location}</p>
      <p>{classDay.activities}</p>
      <p>{classDay.forecast}</p>
      

    </div>
    <hr />
    <div>
      <h2>Comments/Discussion</h2>
      <input placeholder="text" />
      <button>Send</button>
    </div>
    </>
  )
}