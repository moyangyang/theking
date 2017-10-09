// index.js 和 routes/index.js是对应的

// 定义对象
var index = {};

// 定义首页方法
index.index = function(req,res ) {
	/*
		req 请求
		res 响应
	*/ 
	// 响应模板
	res.render('index')
}
index.denglu = function(req,res){
	res.render('denglu')
}
index.reg = function(req,res){
	res.render('reg')
}
index.likecourse = function(req,res){
	res.render('likecourse')
}
index.shaixuan = function(req,res){
	res.render('shaixuan')
}

index.wenzhang = function(req,res){
	res.render('wenzhang')
}

// 向外导出
module.exports =index;
