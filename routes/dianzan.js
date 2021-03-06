// 路由文件目录

// 加载模块
var express = require('express');
// 定义路由
var router = express.Router();

// 加载对应的控制器
var dianzan = require('../controllers/dianzan');

var checkUserLogin = require('../middlewares/checkUserLogin');


router.post('/dianzan',checkUserLogin,dianzan.index);

// 向外暴露
module.exports = router;
