import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./ClassDetailsPage.css";
import * as classDaysAPI from "../../utilities/classDays-api";

export default function ClassDetailsPage(props) {
  const [classDay, setClassDay] = useState([]);
  const { id } = useParams();

  useEffect(function () {
    async function getClassDay() {
      const classDay = await classDaysAPI.getById(id);
      setClassDay(classDay);
    }
    getClassDay();
  }, []);

  async function deleteClassDay() {
    await classDaysAPI.deleteClassDay(id);
  }
console.log(props.user.name)
console.log(classDay)
  return (
    
    <>
      <div>
        <h1>Details Page</h1>
        <div className="wrap">
        <div className="classInfo">
          <p> <b>Date:</b>  {classDay.date}</p>
          <p><b>Time:</b>: {classDay.time}</p>
          <p><b>Location:</b>: {classDay.location}</p>
          <p><b>Activities:</b>: {classDay.activities}</p>
          <p><b>Forecast:</b>: {classDay.forecast}</p>

          {classDay.userName && props.user.name ===classDay.userName &&<Link to={`/classDays/${id}/edit`}>
            
            <button>Edit Class Day</button>
          </Link>}

          {classDay.userName && props.user.name ===classDay.userName && <button onClick={deleteClassDay}>Delete Class Day</button>}
        </div>
        </div>
      </div>
      <hr />
      <div>
        <h2>Comments/Discussion</h2>
        <input placeholder="text" />
        <button>Send</button>
      </div>
    </>
  );
}
