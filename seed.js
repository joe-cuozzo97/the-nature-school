require("dotenv").config();
require("./config/database");

const ClassDay = require("./models/classDay");


// IIFE - Immediately Invoked Function Expression
(async function () {
  await ClassDay.deleteMany({});
  const classDays = await ClassDay.create([
    {
      date: "Monday",
      time: "1pm",
      location: "blue heron park",
      activities: "fun stuff!",
      forecast: "cold",
    },
    {
      date: "Tuesday",
      time: "2pm",
      location: "blue heron park",
      activities: "fun stuff!",
      forecast: "cold",
    },
    {
      date: "Wednesday",
      time: "3pm",
      location: "Clove Lake",
      activities: "fun stuff!",
      forecast: "cold",
    },
    {
      date: "Thursday",
      time: "4pm",
      location: "blue heron park",
      activities: "fun stuff!",
      forecast: "cold",
    },
    {
      date: "Friday",
      time: "5pm",
      location: "GreenBelt Park",
      activities: "fun stuff!",
      forecast: "cold",
    },
    {
      date: "Saturday",
      time: "6pm",
      location: "blue heron park",
      activities: "fun stuff!",
      forecast: "cold",
    },
  ]);

  console.log(classDays);

  process.exit();
})();
