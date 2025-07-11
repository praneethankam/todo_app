const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: [true, 'task is required'],
    },
    
    date: Date,
    completed: {
        type: Boolean,
       default:false
    },
    createdAt: {
        type:Date,
        default:Date.now()
    },
   
})

module.exports = mongoose.model('todo', todoSchema);