const Class = require("../../models/class");

module.exports = {
    index
};

async function index(req, res) {
  const classes = await Class.find({});
  res.json(classes);
}


