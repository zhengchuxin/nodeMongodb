
// 连接数据库
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mongodbtest";


var mongoose = require('mongoose');
DB_URL = 'mongodb://localhost:27017/mongodbtest'; /** * 连接 */
mongoose.connect(DB_URL,{useNewUrlParser: true, useUnifiedTopology: true}); /** * 连接成功 */

mongoose.set('useFindAndModify', false);

mongoose.connection.on('connected', function () {
    console.log('Mongoose connection open to ' + DB_URL);
}); /** * 连接异常 */

mongoose.connection.on('error', function (err) {

    console.log('Mongoose connection error: ' + err);
}); /** * 连接断开 */

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
});

module.exports = mongoose;


