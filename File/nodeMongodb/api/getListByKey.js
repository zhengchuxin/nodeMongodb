var logger = require('../logConfig');
var TestProduct = require('../product');
var Response = require('./response');

function getListByKey(req, res) {
    //打印请求报文
    logger.info(req.body);
    var param = req.body;
    var productName = param.productName;//与前端约定好，不管是商品名称还是商品描述都通过 productName 字段传过来。
    var response = new Response(false, '', -1, []);
    if (productName) {
        // var updatestr = {
        //     $or: [
        //         { productName: { '$regex': productName, $options: '$i' } },
        //     ]
        // };
        var updatestr = {productName:/毛/}
        // var limitStr = {
        //     sort : { _id : -1 },// 按照 _id倒序排列
        //     limit : 2 // 查询100条
        // };
        TestProduct.find(updatestr, function (error, results) {
            console.log('查询列表商品+' + JSON.stringify(results));
            if (error) throw error;
            var response = new Response(true, '查询成功', 1, results);
            logger.info(response);
            res.send(response);
        }).limit(1)
    } else {
        response = new Response(true, '', 1, []);
        logger.info(response);
        res.send(response);
    }
}
module.exports = getListByKey;
