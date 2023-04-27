import React from 'react';
import * as classDaysAPI from '../../utilities/classDays-api';
import './EditClassPage.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function EditClassPage(props) {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    location: '',
    activities: '',
    forecast: '',
  });
  function handleChange(e) {
    const newFormData = { ...formData, [e.target.name]: e.target.value };
    setFormData(newFormData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    classDaysAPI.editClassDay(id, formData);
  }
  console.log(props);

  return (
    <>
      <div>
        <h2>Edit Class Day</h2>
        <div className="editForm">
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
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
