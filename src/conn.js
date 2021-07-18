const mongoose = require("mongoose");

// mongo atlas
const DB='mongodb+srv://avijit:avi123@cluster0.gckf4.mongodb.net/dynamic?retryWrites=true&w=majority';
mongoose.connect(DB,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log("connection successful");
}).catch((error)=>{
    console.log(error);
})


//creating a mongodb compass
// mongoose.connect("mongodb://localhost:27017/dynamic",{
//     useCreateIndex:true,
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }).then(()=>{
//     console.log("connection successful");
// }).catch((error)=>{
//     console.log(error);
// })