var logger = require('../logConfig');
var TestProduct = require('../product');
var Response = require('./response');

function getProductList(req, res) {
    //打印请求报文
    //1、查询数据库中是否有用户名

    TestProduct.find(function (error, results) {
        console.log('查询列表商品+' + JSON.stringify(results));
        if (error) throw error;
        var response = new Response(true, '查询成功', 1, results);
        logger.info(response);
        res.send(response);
    })


    // connection.query("SELECT * FROM product", [], function (error, results, fields) {
    //     if (error) throw error;
    //     var response = new Response(true, '查询成功', 1, results);
    //     logger.info(response);
    //     res.send(response);
    // });
}
module.exports = getProductList;

