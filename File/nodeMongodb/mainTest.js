var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mongodbtest";



//以下实例我们连接数据库 runoob 的 site 表，并插入一条数据条数据，使用 insertOne()：
// MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mongoTest");
//     var myobj =  { _id: 1, product_id: 154, status: 1 };
//     dbo.collection("orders").insertOne(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("文档插入成功");
//         db.close();
//     });
// });



//如果要插入多条数据可以使用 insertMany()：
// MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("mongoTest");
//   var myobj = [
//     { _id: 154, name: '笔记本电脑' },
//     { _id: 155, name: '耳机' },
//     { _id: 156, name: '台式电脑' }
//   ];
//   dbo.collection("products").insertMany(myobj, function (err, res) {
//     if (err) throw err;
//     console.log("插入的文档数量为: " + res.insertedCount);
//     db.close();
//   });
// });


// 连接操作
// mongoDB 不是一个关系型数据库，但我们可以使用 $lookup 来实现左连接。
// 例如我们有两个集合数据分别为：

// MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("mongoTest");
//   dbo.collection('orders').aggregate([
//     {
//       $lookup:
//       {
//         from: 'products',            // 右集合
//         localField: 'product_id',    // 左集合 join 字段
//         foreignField: '_id',         // 右集合 join 字段
//         as: 'orderdetails'           // 新生成字段（类型array）
//       }
//     }
//   ]).toArray(function (err, res) {
//     if (err) throw err;
//     console.log(JSON.stringify(res));
//     db.close();
//   });
// });


// 可以使用 find() 来查找数据, find() 可以返回匹配条件的所有数据。 如果未指定条件，find() 返回集合中的所有数据。
// MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("mongoTest");
//   dbo.collection("mongoTest").find({}).toArray(function (err, result) { // 返回集合中所有数据
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });


//以下实例检索 name 为 "菜鸟工具" 的实例
// MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("mongoTest");
//   var whereStr = { "name": '菜鸟工具' };  // 查询条件
//   dbo.collection("mongoTest").find(whereStr).toArray(function (err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });

//我们也可以对数据库的数据进行修改，以下实例将 name 为 "菜鸟教程" 的 url 改为 https://www.runoob.com：
// MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("mongoTest");
//   var whereStr = { "name": '菜鸟工具' };  // 查询条件
//   var updateStr = { $set: { "url": "https://www.runoob111xxx.com" } };
//   dbo.collection("mongoTest").updateOne(whereStr, updateStr, function (err, res) {
//     if (err) throw err;
//     console.log("文档更新成功");
//     db.close();
//   });
// });

//如果要更新所有符合条的文档数据可以使用 updateMany()：
// MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("mongoTest");
//   var whereStr = { "type": 'en' };  // 查询条件
//   var updateStr = { $set: { "url": "https://www.runoob.com" } };
//   dbo.collection("mongoTest").updateMany(whereStr, updateStr, function (err, res) {
//     if (err) throw err;
//     console.log(res.result.nModified + " 条文档被更新");
//     db.close();
//   });
// });


//以下实例将 name 为 "菜鸟教程" 的数据删除 :
// MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("mongoTest");
//   var whereStr = { "name": '菜鸟教程' };  // 查询条件
//   dbo.collection("mongoTest").deleteOne(whereStr, function (err, obj) {
//     if (err) throw err;
//     console.log("文档删除成功");
//     db.close();
//   });
// });


// 如果要删除多条语句可以使用 deleteMany() 方法
// 以下实例将 type 为 en 的所有数据删除 :

// MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("mongoTest");
//   var whereStr = { type: "en" };  // 查询条件
//   dbo.collection("mongoTest").deleteMany(whereStr, function (err, obj) {
//     if (err) throw err;
//     console.log(obj.result.n + " 条文档被删除");
//     db.close();
//   });
// });



//查询分页
//如果要设置指定的返回条数可以使用 limit() 方法，该方法只接受一个参数，指定了返回的条数。
// MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("mongoTest");
//   dbo.collection("mongoTest").find().limit(2).toArray(function (err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });


// 我们可以使用 drop() 方法来删除集合：
// MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("mongoTest");
//   // 删除 test 集合
//   dbo.collection("site").drop(function (err, delOK) {  // 执行成功 delOK 返回 true，否则返回 false
//     if (err) throw err;
//     if (delOK) console.log("集合已删除");
//     db.close();
//   });
// });