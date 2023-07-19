const express=require('express');
const app= express();
const cors=require('cors');
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(cors({origin:['https://leelaprasath.github.io/']}));
const Adminfunc=require('./routes/admin');
const Stafffunc=require('./routes/staffroutes');
const Studentfunc=require('./routes/studentroutes');

app.use('/api/v1/admin',Adminfunc);
app.use('/api/v1/staff',Stafffunc);
app.use('/api/v1/student',Studentfunc);

app.use('/*',(req,res)=>{
    res.send('Unauthorised Access');
})

app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${process.env.PORT}`);
})
