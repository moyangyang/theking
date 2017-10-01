
// 加载模块 
var express = require('express');
var router = express.Router();

// 加载对应的控制器
var index = require('../controllers/index')
/* GET home page. */
router.get('/', index.index);

module.exports = router;
