import { useState, useEffect } from "react";
import * as classDaysAPI from '../../utilities/classDays-api';
import ClassDayItem from "../../components/ClassDayItem/ClassDayItem";
import { Link } from "react-router-dom";

export default function AllClassDaysPage() {
  
  const [classDay, setClassDay] = useState([]);
    const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const classDay = formData.get("classDay");
    setClassDay([...classDay, classDay]);
  };

 useEffect(function() {
  async function getClassDays() {
    const classDays = await classDaysAPI.getAll();
    setClassDay(classDays);

  }
  getClassDays();
}, []);
  console.log(classDay)
  
  return (
    <div>
      <h1>All Class Days Page</h1>
      { <Link to={"/classDay/${classDay._id}"}>
        {classDay.map((classDayItem) => (
          <ClassDayItem
            date={classDayItem.date}
            time={classDayItem.time}
            location={classDayItem.location}
          />
        ))}
      </Link> }
    </div>
  );
}
