// 路由文件目录

// 加载模块
var express = require('express');
// 定义路由
var router = express.Router();


// 加载对应的控制器
var video = require('../controllers/video');

router.get('/',video.index);



module.exports = router;  
  