// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const customerSchema = new Schema({
//     name:{type:String},
//     pwd:{type:String},
//     uId:{type:String},
// })
// const Models = {
//     Customer : mongoose.model("Customer",customerSchema)
// }
// mongoose.connect("mongodb://localhost/admin")
// const db = mongoose.connection
// db.on('error',function(){
//     console.log("dDatabase connection error.")
// })
// db.once("open",function(){
//     console.log("The database has connected.")
// })
// module.exports = Models