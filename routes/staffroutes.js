const Staffcont=require('../controllers/staffcontrollers');
const Router=require('express').Router();

Router.post('/',Staffcont.LoginControllers);
Router.post('/showstaff',Staffcont.showstaff);
Router.post('/addstaff',Staffcont.addstaff);
Router.put('/updatestaff',Staffcont.updatestaff);
Router.delete('/deletestaff',Staffcont.deletestaff);
Router.get('/listallstaffs',Staffcont.listallstaffs);


module.exports = Router;