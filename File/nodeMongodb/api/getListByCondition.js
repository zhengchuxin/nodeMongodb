var logger = require('../logConfig');
var TestProduct = require('../product');
var Response = require('./response');

function getListByCondition(req, res) {
    //打印请求报文
    logger.info(req.body);
    var param = req.body;
    var productName = param.productName;
    var productType = param.productType;
    var response = new Response(false, '', -1, []);
    if (productName) {

        var updatestr = { "productName": productName, "productType": productType };
        TestProduct.find(updatestr, function (error, results) {
            if (error) throw error;
            var response = new Response(true, 'productName查询成功', 1, results);
            logger.info(response);
            res.send(response);
        });

    } else if (productType || productType === 0) {

        var updatestr = { "productType": productType };
        TestProduct.find(updatestr, function (error, results) {
            if (error) throw error;
            var response = new Response(true, 'productType||productType===0 查询成功', 1, results);
            logger.info(response);
            res.send(response);
        });

    } else if (productName && productType) {

        var updatestr = { "productName": productName, "productType": productType };
        TestProduct.find(updatestr, function (error, results) {
            if (error) throw error;
            var response = new Response(true, 'productType||productType===0 查询成功', 1, results);
            logger.info(response);
            res.send(response);
        });
    } else {
        response = new Response(true, '', 1, []);
        logger.info(response);
        res.send(response);
    }
}

module.exports = getListByCondition;
