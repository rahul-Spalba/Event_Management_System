const mongoose = require('mongoose');
const { Schema } = mongoose;

const event = new Schema({
    name:  String, // String is shorthand for {type: String}
    description: String,
    headline:   String,
    start_time: Date,
    duration: Number,
    isLive:Boolean,
    end_time:Date,

  },{timestamps:true});
  const Event = mongoose.model('event', event);

  module.exports = {Event};