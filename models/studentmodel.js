const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const conn = require('../db');

conn.connectToMongooseDB();

const studentschema = new Schema({

    name: {
        type: 'string',
        required : [false]
    },
    reg:{
        type:String,
        required:[false]
    },
    lichessid:{
        type:String,
        required:[false]
    },
    remarks:{
        type:String,
        required:[false]
    }
});

const StudentCollection = mongoose.model("students", studentschema);

module.exports = {StudentCollection};