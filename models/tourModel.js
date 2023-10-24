import mongoose from "mongoose";
import slugify from "slugify";
const tourSchema = new mongoose.Schema({

name:{
    type:String,
    required:[true,"Tour Name is Required..."],
    unique:true,
    trim:true,
    maxlength: [40, 'A tour name must have less or equal then 40 characters'],
    minlength: [10, 'A tour name must have more or equal then 10 characters']   
},
// For User Friendly URL
slug:{
    type:String
},
duration:{
    type:Number,
    required:[true,"Specify the tour Duration"]
},
maxGroupSize:{
    type:Number,
    required:[true,"Specify Maximum Group Size"]
},
difficulty:{
    type:String,
    required:[true,"Specify tour's Difficult Level"],
    enum:{
        values:["easy","medium","difficulty"],
        message:"Difficulty can be either easy,medium or difficult"
    }
},
ratingsAverage:{
    type:Number,
    min:[1.0,"Minimum Possible Value can be 1.0"],
    max:[5.0,"Maximum Possible Value can be 5.0"]
},
ratingsQuantity:{
    type:Number,
    default:0
},
tourPrice:{
    type:Number,
    required:[true,"Specify Tour Price"]
},
tourPriceDiscount:{
    type:Number,
    default:0,

    validate:{
        validator:function(discountPrice){
            return discountPrice < this.tourPrice
        },
        message:"Discounted Price Must be smaller than regular Price"
    }
},
summary:{
    type:String,
    trim:true
},
description:{
    type:String,
    trim:true
},
imageCover:{
    type:String,
    trim:true
},
createdAt:{
    type:Date,
    default:Date.now(),
    select:false
},
startDates:[Date],
startLocation:{
    //GeoJSON
    type:{
        type:String,
        default:"Point",
        enum:["Point"]
    },
    coordinates:[Number],
    address:String,
    description:String
},
locations:[
    {
        type:{
            type:String,
            default:"Point",
            enum:["Point"]
        },
        coordinates:[Number],
        address:String,
        description:String,
        day:Number
    }
],
tourGuides:[
    {
        type:mongoose.Schema.ObjectId,
        ref:"User"
    }
],
reviews:[
    {
        type:mongoose.Schema.ObjectId,
        ref:"Review"
    }
]
})


const Tour = mongoose.model("Tour",tourSchema);

export {Tour};