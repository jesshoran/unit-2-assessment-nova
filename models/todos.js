const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({
    todo:  { type: String, required: true },
    done: Boolean
    },
    {timestamps: true}
);

const ToDo = mongoose.model("ToDo", toDoSchema);

module.exports = ToDo;