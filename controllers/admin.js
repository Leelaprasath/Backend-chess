const adminmodel=require('../models/adminmodel');
const adminlogin=(req,res)=>{
    try {
       adminmodel.adminCollection.find({"username":req.body.username,"password":req.body.password})
            .then((admin) => {
                 (admin.length>0)?res.send('true'):res.send("false")
            });
    } catch(err) {
        res.json(err.message);
    }
}

const addadmin = async (req, res) => {
    const Admin = new adminmodel.adminCollection(req.body);
  
    const output = [];
  
    try {
      await Admin.save();
      output.push({ message: "Admin Added!", error: ""});
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

const updateadmin = (req,res)=>{
    try {
        adminmodel.adminCollection.updateOne({name: req.body.name}, {$set: req.body})
            .then((results) => {
                if(results.modifiedCount > 0) {
                    res.json("Admin Updated!");
                } else {
                    res.json("Unable to Update Admin! Please try again!"); 
                }
            });
    } catch(err) {
        res.json(err.message);
    }
}

const deleteadmin = (req,res)=>{
    try {
        adminmodel.adminCollection.deleteOne({name: req.body.name})
            .then((results) => {
                if(results.deletedCount > 0) {
                    res.json("Admin Deleted!");
                } else {
                    res.json("Unable to Delete Admin! Please try again!");
                }
            });
    } catch(err) {
        res.json(err.message);
    }
}

const listalladmins = (req,res)=>{
    try {
        adminmodel.adminCollection.find()
            .then((results) => {
                res.json(results)
            });
    } catch(err) {
        res.json(err.message);
    }
}

module.exports={adminlogin,addadmin,updateadmin,deleteadmin,listalladmins};