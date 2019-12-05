var logger = require('../logConfig');
var TestProduct = require('../product');
var Response = require('./response');

var ObjectID = require('mongodb').ObjectID;


function updateProduct(req, res) {
    //打印请求报文 
    logger.info(req.body);
    var param = req.body;
    var productId = param.productId;
    var productName = param.productName;
    var productType = param.productType;
    var productPrice = param.productPrice;
    var productImg = param.productImg ;
    var productDes = param.productDes;
    var response = new Response(false, '', -1, []);
    if (productId != '') {

        var _id = new ObjectID(productId);
        var newProduct = { 'productName': productName, 'productType': productType, 'productPrice': productPrice, 'productImg': productImg, 'productDes': productDes };
        console.log('_id = +' + _id);
        console.log('xxxx = +' + JSON.stringify(newProduct));
        TestProduct.findByIdAndUpdate(_id, { $set: newProduct }, function (error, results) {

            console.log('xxxx===' +  JSON.stringify(results));

            if (error) throw error;
            response = new Response(true, '更新成功', 1, results);
            logger.info(response);
            res.send(response);

        });
    } else {
        res.send('没有商品id');
    }
}
module.exports = updateProduct;

