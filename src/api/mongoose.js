const mongoose = require("mongoose");
console.log(mongoose)
// mongoose.connect("mongodb://loaclgost:27017/admin",{useNewUrlParser:true});
var db = mongoose.connection;
db.on('error',()=>{console.log('失败')})
db.once('open',()=>{
    console.log('成功！！')
})

module.export = db






// const mongoose = require("mongoose");

// const data_url = "mongodb://127.0.0.1:27017/bk1910";

// mongoose.connect(data_url);

// module.exports = {
//     mongoose
// }




// const mongoose = require("mongoose")
// const DbUrl = "mongodb://localhost:27017/admin"
// // 建立连接
// mongoose.connect(DbUrl,{useNewUrlParser:true})

// mongoose.connection.on("connected",(error)=>{
// console.log("mongodb连接成功")
// })
// module.exports = mongoose
//
// const mongodb = require("mongodb");
// const mongoClient = mongodb.MongoClient;// 属性，可以通过该属性的connect方法连接你的数据库
// function _connect(cb) {
//     mongoClient.connect("mongodb://127.0.0.1:27017",{ useNewUrlParser: true },function (err,client) {
//         if(err) console.log("连接失败");
//         else{
//             const db = client.db("most");
// 	        console.log("连接成功");
//             cb(db);
//         }
//     })
// }
//
// module.exports.insertOne = function (coll,insObj,cb) {
//     _connect(function (db) {
//         db.collection(coll).insertOne(insObj,function (err,results) {
//             // 将插入的结果返回出去
//             cb(err,results);
//         })
//     })
// }
// /*
// * 查找多条
// * coll:查找的集合名字
// * obj:
// *   whereObj:查找的条件
// *   sortObj:排序
// *   limit:查找前多少条
// *   skip:跳过多少条*/
// module.exports.find = function (coll,obj,cb) {
//     obj.whereObj = obj.whereObj || {};
//     obj.sortObj = obj.sortObj || {};
//     obj.limit = obj.limit || 0;
//     obj.skip = obj.skip || 0;
//     _connect(function (db) {
//         db.collection(coll)
//             .find(obj.whereObj)
//             .sort(obj.sortObj)
//             .limit(obj.limit)
//             .skip(obj.skip)
//             .toArray(function (err,results) {
//                 cb(err,results);
//             })
//     })
// }
//
// module.exports.findOne = function (coll,whereObj,cb) {
//     _connect(function (db) {
//         db.collection(coll).findOne(whereObj,function (err,results) {
//             // 将插入的结果返回出去
//             cb(err,results);
//         })
//     })
// }
//
// /*
// * 根据条件获得指定集合的总文档数量
// * coll:集合名
// * whereObj:条件
// * cb;回调*/
// module.exports.count = function (coll,whereObj,cb) {
//     _connect(function (db) {
//         db.collection(coll).countDocuments(whereObj).then(function (count) {
//             cb(count);
//         })
//     })
// }
// /*根据ID删除指定的集合文档
// ** coll:集合名
// * id:删除的文档ID
// * cb:回调*/
// module.exports.deleteOneById = function (coll,id,cb) {
//     _connect(function (db) {
//         db.collection(coll).deleteOne({
//             _id:mongodb.ObjectId(id)// 将字符串转换为mongodb ObjectId类型
//         },cb)
//     })
// }
// /*
// * 根据ID进行修改*/
// module.exports.updateOneById = function (coll,id,upObj,cb) {
//     _connect(function (db) {
//         // 第一个是条件，第二个参数是你要修改的内容
//         db.collection(coll).updateOne({
//             _id:mongodb.ObjectId(id)
//         },upObj,cb)
//     })
// }
//
//
//
// module.exports._connect = _connect;



