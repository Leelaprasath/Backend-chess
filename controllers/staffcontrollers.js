const stfmodel=require('../models/staffmodel');
const LoginControllers=(req,res)=>{
    try {
       stfmodel.staffCollection.find({"username":req.body.username,"password":req.body.password})
            .then((staffs) => {
                 (staffs.length>0)?res.send('true'):res.send("false")
            });
    } catch(err) {
        res.json(err.message);
    }
}

const showstaff = async (req, res) => {
    try {
        let results = await stfmodel.staffCollection.find({$or: [{name: req.body.name},{_id: req.body._id}]});
        (results.length > 0) ? res.json(results) : res.json("No Staff Found!");
    } catch(err) {
        res.json(err.message);
    }
}


const addstaff = async (req, res) => {
    const Trainee = new stfmodel.staffCollection(req.body);
  
    const output = [];
  
    try {
      await Trainee.save();
      output.push({ message: "Staff Added!", error: ""});
      res.json(output);
    } catch (err) {
      let errorList = [];
      if (err.errors) {
        for (let temp in err.errors) {
          errorList.push(err.errors[temp].message);
        }
      }
      output.push({ message: "", error: errorList }); 
    
      res.json(output);
    }
  };

const updatestaff = (req,res)=>{
    try {
        stfmodel.staffCollection.updateOne({_id: req.body._id}, {$set: req.body})
            .then((results) => {
                if(results.modifiedCount > 0) {
                    res.json("Staff Updated!");
                } else {
                    res.json("Unable to Update Staff! Please try again!"); 
                }
            });
    } catch(err) {
        res.json(err.message);
    }
}

const deletestaff = (req,res)=>{
    try {
        stfmodel.staffCollection.deleteOne({_id: req.body._id})
            .then((results) => {
                if(results.deletedCount > 0) {
                    res.json("Staff Deleted!");
                } else {
                    res.json("Unable to Delete Staff! Please try again!");
                }
            });
    } catch(err) {
        res.json(err.message);
    }
}

const listallstaffs = (req,res)=>{
    try {
        stfmodel.staffCollection.find()
            .then((results) => {
                res.json(results)
            });
    } catch(err) {
        res.json(err.message);
    }
}

module.exports={LoginControllers,addstaff,updatestaff,deletestaff,listallstaffs,showstaff};