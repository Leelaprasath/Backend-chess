const Admincont=require('../controllers/admin');
const Router=require('express').Router();

Router.post('/',Admincont.adminlogin);
Router.post('/addadmin',Admincont.addadmin);
Router.put('/updateadmin',Admincont.updateadmin);
Router.delete('/deleteadmin',Admincont.deleteadmin);
Router.get('/listalladmins',Admincont.listalladmins);


module.exports = Router;