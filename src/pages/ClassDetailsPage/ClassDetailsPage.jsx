import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import "./ClassDetailsPage.css"
import * as classDaysAPI from "../../utilities/classDays-api";
import ClassDayItem from "../../components/ClassDayItem/ClassDayItem";


export default function ClassDetailsPage() {
  const [classDay, setClassDay] = useState({});
const {id} = useParams();

useEffect(function() {
  async function getClassDayByID() {
    const classDay = await classDaysAPI.getById(id);
    setClassDay(classDay);

  }
  getClassDayByID();
}, []);

  return (
    <>
    <div>
      <h1>Details Page</h1>
      <h1>{classDay.date}</h1>
        <p>{id}</p>
        <p>{id}</p>

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
