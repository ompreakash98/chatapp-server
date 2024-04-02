const mongoose=require('mongoose');

const url="url_string"

const connectDb= async ()=>{
    try {
        await mongoose.connect(uri,{userNewUrlParser:true,userUnifiedTopology:true});
        console.log("Connection sucessfull")
    } catch (error) {
        
    }
}
module.exports = connectDb