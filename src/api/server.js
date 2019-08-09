// const mongoose = require("mongoose");
// mongoose.connect("mongodb://loaclgost:27017/admin",{useNewUrlParser:true});
// const db = mongoose.connection;
// console.log(mongoose)
// db.on('error',()=>{console.log('失败')})
// db.once('open',()=>{
//     console.log('成功！！')
// })
// let useSchema = mongoose.Schema({
//     username : {type : Number},
//     password : {type : String},
// })
// const User = mongoose.model("most",useSchema)
//
// //查
// const userFind = (userInfo,cb)=>{
//     User.findOne(userInfo).then((result)=>{
//         cb(result);
//     })
// }
// //增
// const userSave = (userInfo,cb)=>{
//     let user = new User(userInfo);
//
//     user.save().then((result)=>{
//         cb(result);
//     })
// }
//
//
// module.exports = {
//     userFind,
//     userSave
// }