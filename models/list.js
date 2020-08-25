const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Created Schema
const todoListSchema = new Schema({
    name: {type: String, required: true},
    task: {type: String, required: true},
    isDone: Boolean
})

const List = mongoose.model('List', todoListSchema);

//Export List Model

module.exports = List;