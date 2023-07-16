const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const conn = require('../db');

conn.connectToMongooseDB();

const adminSchema = new Schema({
    name: {
        type: 'string',
        required : [true, "Name is required"]
    },
    username: {
        type: String,
        required: [true, "Username is mandatory"]
    },
    password: {
        type: Number,
        required: [true, "password is mandatory"]
    }
});



const adminCollection = mongoose.model("admin", adminSchema);


module.exports = {adminCollection};