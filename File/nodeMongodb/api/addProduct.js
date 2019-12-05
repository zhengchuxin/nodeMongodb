var logger = require('../logConfig');
var TestProduct = require('../product');
var Response = require('./response');


function addProduct(req, res) {
    //打印请求报文
    logger.info(req.body);
    var param = req.body;
    var productName = param.productName;
    var productPrice = param.productPrice;
    var productType = param.productType;
    var productImg = param.productImg;
    var productDes = param.productDes;
    var response = new Response(false, '', -1);
    if (productName && productPrice && productType && productImg && productDes) {

        var updatestr = { "productName": productName, "productPrice" : productPrice, "productType" : productType, "productImg" : productImg, "productDes" : productDes };
        console.log('xxxx = +' + updatestr);
        TestProduct.insertMany(updatestr,function (error, results) {
            console.log('插入商品+' + JSON.stringify(results));
            if (results.length == 1) {
                response = new Response(false, '插入商品成功', 1);
                logger.info(response);
                res.send(response);
            } else {
                response = new Response(false, '插入商品失败', -1);
                logger.info(response);
                res.send(response);
            }
        })
    } else {
        response = new Response(false, '有参数为空', -1);
        logger.info(response);
        res.send(response);
    }
}

module.exports = addProduct;
