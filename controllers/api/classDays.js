const classDay = require("../../models/classDay");
const ClassDay = require("../../models/classDay");

module.exports = {
    index,
    // show,
    create
};

async function index(req, res) {
  const classDays = await ClassDay.find({});
  res.json(classDays);
}

async function create(req, res){
  console.log('hello world')
  try {
    const formData = req.body;
    console.log(formData)
  const newClassDay = new ClassDay({
    date: formData.date,
    time: formData.time,
    location: formData.location,
    activities: formData.activities,
    forecast: formData.forecast

  })
  console.log(newClassDay)
  await newClassDay.save();
  res.send(newClassDay)
  } catch (error) {
    throw error
  }
}

// async function show(req, res) {
//   const classDay = await ClassDay.findById(req.params.id);
//   res.json(classDay);
// }



