import mongoose from "mongoose";


mongoose.connect('mongodb://127.0.0.1:27017/tours',{

}).then(()=>{
    console.log("DataBase Connected Successfully")
}).catch(()=> {
    console.log("Error in Database Connection")
})