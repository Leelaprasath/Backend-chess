const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const conn = require('../db');

conn.connectToMongooseDB();

const staffSchema = new Schema({
    name: {
        type: 'string',
        required : [true, "Name is required"]
    },
    username: {
        type: String,
        required: [true, "Username is mandatory"]
    },
    password: {
        type: String,
        required: [true, "password is mandatory"]
    },
    salary: {
        type: Number,
        required: [true, "salary is mandatory"]
    },
    phone: {
        type: Number,
        required: [true, "Phone number is mandatory"]
    },
});



const staffCollection = mongoose.model("staff", staffSchema);


module.exports = {staffCollection};