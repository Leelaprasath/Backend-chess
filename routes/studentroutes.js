const Router = require('express').Router();

const stdcontroller = require('../controllers/studentcontrollers');

Router.get('/listallstudents',stdcontroller.liststudents);
Router.post('/addstudent',stdcontroller.addstudent);
Router.post('/showstudent',stdcontroller.showstudent);
Router.put('/updatestudent',stdcontroller.updatestudent);
Router.delete('/deletestudent',stdcontroller.deletestudent);

module.exports = Router;