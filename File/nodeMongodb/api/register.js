var logger = require('../logConfig');
var User = require('../user');
var Response = require('./response');

function register(req, res) {
    //打印请求报文
    // logger.info('注册' + req.body);
    var param = req.body;
    var name = param.name;
    var password = param.password;
    var phone = param.phone;
    var response = new Response(false, '', -1);
    console.log(name);
    if (name && password && phone) {
        //1、查看数据库中是否有相同用户名
        var updatestr = { "name": name, "password" : password };
        User.find(updatestr, function (error, results) {
            if (error){
                throw error;
            } else{
                console.log(JSON.stringify(results));
                if (results.length >= 1) {
                    response = new Response(false, '注册失败，用户名重复', -1);
                    //打印响应报文
                    res.send(response);
                } else {
                    User.insertMany(updatestr,function (error, results) {
                        console.log('xxxx+' + JSON.stringify(results));
                        if (results.length == 1) {
                            response = new Response(false, '注册成功', 1);
                            logger.info(response);
                            res.send(response);
                        } else {
                            response = new Response(false, '注册失败', -1);
                            logger.info(response);
                            res.send(response);
                        }
                    })
                }
            }
        });
    } else {
        response = new Response(false, '注册失败，用户名、密码、用户号不能为空', -1);
        logger.info(response);
        res.send(response);
    }
}

module.exports = register;