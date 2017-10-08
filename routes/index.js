var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//私人定制
router.get('/Personal_Tailor', function(req, res, next) {
  res.render('Personal_Tailor', { title: 'Express' });
});
//学习手册
router.get('/study_manual', function(req, res, next) {
  res.render('study_manual', { title: 'Express' });
});
//考核页面
router.get('/check', function(req, res, next) {
  res.render('check', { title: 'Express' });
});
//训练营页面
router.get('/training_battalion', function(req, res, next) {
  res.render('training_battalion', { title: 'Express' });
});

module.exports = router;
