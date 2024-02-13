import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
firstName : {
    type:String,
    required : true
},
lastName : {
    type:String,
    required : true
},
email : {
    type:String,
    required : true
},
passWord : {
    type:String,
    required : true
},
confirmPassword : {
    type:String,
},
role : {
type : String,
enum:["user","admin"],
default : "user"
},
CreatedDate:{
    type:Date,
    default:Date.now()
}

})
const USER = mongoose.model("User",userSchema);
export default USER