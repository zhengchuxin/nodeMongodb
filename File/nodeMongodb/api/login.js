var logger = require('../logConfig');
var User = require('../user');
var Response = require('./response');

function login(req, res) {
    //打印请求报文
    // logger.info('注册' + req.body);
    var param = req.body;
    var name = param.name;
    var password = param.password;
    var response = new Response(false, '', -1);
    console.log('登录名字====' + name);
    if (name && password) {
        //1、查看数据库中是否有相同用户名
        var updatestr = { "name": name, "password" : password };
        User.find(updatestr, function (error, results) {
            if (error){
                throw error;
            } else{
                console.log(JSON.stringify(results));
                if (results.length >= 1) {
                    //2、如果有用户名，查询密码是否相同
                    if (password == results[0].password) {
                        //3、密码相同则登陆成功
                        response = new Response(true, '登陆成功', 1);
                        logger.info(response);
                        res.send(response);
                    } else {
                        response = new Response(true, '登陆失败，密码错误', -1);
                        logger.info(response);
                        res.send(response);
                    }
                } else {
                    response = new Response(false, '登陆失败，没有此用户名', -1);
                    logger.info(response);
                    res.send(response);
                }
            }
        });
    } else {
        response = new Response(false, '登录失败，用户名、密码不能为空', -1);
        logger.info(response);
        res.send(response);
    }
}

module.exports = login;