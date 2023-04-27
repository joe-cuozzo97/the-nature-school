const ClassDay = require('../../models/classDay')

module.exports = {
  index,
  show,
  create,
  delete: deleteClassDay,
  edit: editClassDay
}

async function index (req, res) {
  const classDays = await ClassDay.find({})
  res.json(classDays)
}

async function create (req, res) {
  console.log('hello world')
  try {
    const formData = req.body
    const newClassDay = new ClassDay(formData.classDay)
    console.log(newClassDay)
    await newClassDay.save()
    res.send(newClassDay)
  } catch (error) {
    console.log(error)
  }
}

async function show (req, res) {
  const classDay = await ClassDay.findById(req.params.id)
  res.json(classDay)
}

async function deleteClassDay (req, res) {
  const classDay = await ClassDay.findByIdAndDelete(req.params.id)
  res.json(classDay)
}

async function editClassDay (req, res) {
  const classDay = await ClassDay.findById(req.params.id)
  const newClassDay = req.body.newClassDay
  classDay.date = newClassDay.date
  classDay.time = newClassDay.time
  classDay.location = newClassDay.location
  classDay.activities = newClassDay.activities
  classDay.forecast = newClassDay.forecast
  classDay.userName = newClassDay.userName
  classDay.save()
  res.json(classDay)
}
