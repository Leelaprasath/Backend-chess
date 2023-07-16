const stdmodel=require('../models/studentmodel');

const addstudent=async(req,res)=>{

    const Student = new stdmodel.StudentCollection(req.body);

    const output = [];

    try {
        await Student.save();
        output.push({"message": "Student Added!", "error": ""});
        res.json(output);
    }catch(err) {
        let errorList = [];
        if(err.errors) {
            for(let temp in err.errors) {
                errorList.push(err.errors[temp].message);
            }
        }
        output.push({"message": "", "error": errorList});
        res.json(output);
    }
}

const showstudent = async (req, res) => {
    try {
        let results = await stdmodel.StudentCollection.find({$or: [{name: req.body.name},{_id: req.body._id}]});
        (results.length > 0) ? res.json(results) : res.json("No Student Found!");
    } catch(err) {
        res.json(err.message);
    }
}

const liststudents = (req,res)=>{
    try {
        stdmodel.StudentCollection.find()
            .then((results) => {
                res.json(results)
            });
    } catch(err) {
        res.json(err.message);
    }
}

const updatestudent = (req,res)=>{
    try {
        stdmodel.StudentCollection.updateOne({_id: req.body._id}, {$set: req.body})
            .then((results) => {
                if(results.modifiedCount > 0) {
                    res.json("Student Updated!");
                } else {
                    res.json("Unable to Update Student! Please try again!"); 
                }
            });
    } catch(err) {
        res.json(err.message);
    }
}

const deletestudent = (req,res)=>{
    try {
        stdmodel.StudentCollection.deleteOne({_id: req.body._id})
            .then((results) => {
                if(results.deletedCount > 0) {
                    res.json("Student Deleted!");
                } else {
                    res.json("Unable to Delete Student! Please try again!");
                }
            });
    } catch(err) {
        res.json(err.message);
    }
}

module.exports = {addstudent,updatestudent,deletestudent,liststudents,showstudent};