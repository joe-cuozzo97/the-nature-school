const mongoose = require('mongoose')
const Schema = require("mongoose").Schema;

const classDaySchema = new Schema(
  {
    date: String,
    time: String,
    location: String,
    activities: String,
    forecast: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('ClassDay', classDaySchema);