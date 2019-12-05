var logger = require('../logConfig');
var TestProduct = require('../product');
var Response = require('./response');
const ObjectId = require('mongodb').ObjectId;

function deleteProduct(req, res) {
    //打印请求报文
    logger.info(req.body);
    var param = req.body;
    var productId = param.productId;
    var response = new Response(false, '', -1);
    if (productId) {
        //1、查看数据库中是否有相同用户名
        var updatestr = { "_id": ObjectId(productId)};
        // console.log('xxxx = +' + JSON.stringify(updatestr));
        TestProduct.deleteOne(updatestr,function (error, results) {
            //3、如果没有相同用户名，并且有一条记录，则注册成功

            console.log('xxxx===' +  JSON.stringify(results));
            if (results.deletedCount == 1) {
                response = new Response(false, '删除成功', 1,null);
                logger.info(response);
                res.send(response);
            } else {
                response = new Response(false, '删除失败', -1,null);
                logger.info(response);
                res.send(response);
            }
        })
    } else {
        response = new Response(false, '删除失败，商品id为空', -1);
        logger.info(response);
        res.send(response);
    }
}

module.exports = deleteProduct;