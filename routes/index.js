
// 加载模块 
var express = require('express');
var router = express.Router();

// 加载对应的控制器
var index = require('../controllers/index')
/* GET home page. */
router.get('/', index.index);
router.get('/denglu', index.denglu);
router.get('/reg', index.reg);
router.get('/likecourse',index.likecourse);
router.get('/shaixuan',index.shaixuan);
router.get('/homepage',index.homepage);
router.get('/huodong',index.huodong);

router.get('/wenzhang',index.wenzhang);

module.exports = router;
