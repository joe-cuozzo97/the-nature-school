const ClassDay = require("../../models/classDay");

module.exports = {
    index,
    show,
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
  const newClassDay = new ClassDay(formData.classDay)
  console.log(newClassDay)
  await newClassDay.save();
  res.send(newClassDay)
  } catch (error) {
    throw error
  }
}

async function show(req, res) {
  console.log(req.params.id);
  const classDay = await ClassDay.findById(req.params.id);
  res.json(classDay);
}



