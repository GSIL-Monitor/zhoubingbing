
zhoubingbing
zhoubbmls@sina.com
zhoubbmls

https://www.npmjs.com/~zhoubbmls

npm config set registry https://registry.npm.taobao.org 
npm config set registry https://registry.npmjs.org

commonjs规范
在编译过程中，Node对获取的JavaScript文件 进行头尾包装。{\n js文本 \n};
(functin(require, exports, nmodule, __filename, __firname){
	exports.add = { }
})

// npm 版本管理-------------------------------------------------------------
~x.y.z: 匹配大于 x.y.z 的 z 的最新版 
^x.y.z: 匹配大于 x.y.z 的 y.z 的最新版
*: 任意版本，一般是最后一次正式发布版本


AMD -----------------------------------------------------------------------
define(id?, dependencies?, factory)

define(id?, [ 'dep1', 'dep2' ], function( dep1, dep2 ){
	return obj;
})


CMD -----------------------------------------------------------------------
define(function(require, exports, module){
	//do something
})



核心模块-将那些由纯C/C++编写的部分统一统称为内建模块 buffer crypto evals fs os 等

本地安装包 指定packjson.json文件夹
npm install <tarball file>
npm install <tarball rul>
npm install <folder>

从非官方安装
npm install underscore --registory="http://registory.url"

指定默认源

npm config set registry http://registry.npmjs.org


setTimeout() 和 setInterver() 与浏览器API是一致的
 
process.nextTick(); 执行优先 setImmediate(); 

setImmediate(); 进入下一轮循环


events ----------------------------------------------------------------

var events = require('events');
var emitter = new events.EventEmitter();

emitter.on('newListener',function(eventname, listener){ }); 当添加新的监听器时，'newListener' 事件会触发
emitter.on('removeListener',function(eventname, listener){ }); 当监听器被移除时,'removeListener' 事件被触发

emitter.emit('error');

emitter.on('some_event',function(){})
emitter.addListener(event, listener) 为指定事件添加一个监听器到监听器数组的尾部
emitter.emit('some_event');

emitter.setMaxListener(n); 设置n上限， 0则取消限制

once(event, listener)
removeListener(event, listener)
removeAllListeners([event])
listeners(event) 返回指定事件的监听器数组。

require('events').EventEmitter.listenerCount(emitter,event)

emit(event, [arg1], [arg2], [...])


EventProxy ----------------------------------------------------------------
var eventproxy = require('EventProxy');

var proxy = new eventproxy.EventProxy();

proxy.all('tempate', 'data', 'resources', function(tempate, data, resources){ })
proxy.tail('tempate', 'data', 'resources', function(tempate, data, resources){ }) //只能执行一次
proxy.emit('tempate');

proxy.after('data', 10, function(){ }) //执行10次 data 后会执行侦听器

//处理异常
exports.getContent = function (callback) {
	var ep = new EventProxy();
	ep.all('tempate', 'data', 'resources', function(tempate, data, resources){ })
	ep.fail(callback);
	fs.readFile('template.tpl', 'utf-8', ep.done('tempate'));
	db.get('some sql', ep.done('data'));
}


fs ------------------------------------------------------------------------
fs.readFile('./path', 'utf8', function(err, content){
	if(err){
		return;
	}
	//do something
})

Q -------------------------------------------------------------------------
var Q = require('q');

var readFile = function (file, encoding) {
	var deferred = Q.defer();
	fs.readFile(file, encoding, deferred.makeNodeResolver());
	return deferred.promise;
};

readFile("foo.txt", "utf-8").then(function (data) {
	// Success case
}, function (err) {
	// Failed case
});

var promise1 = readFile("file1","utf8")
var promise2 = readFile("file2","utf8")

Q.defer.prototype.all = function(promises){
	var count = promises.length;
	var that = this;
	var results = [];
	promises.forEach(function(promise,i){
		promise.then(function(data){
			count --;
			results[i] = data;
			
			if(count === 0 ){
				that.resolve(results)
			}
			
		},function(err){
			that.reject(err)
		})
	})
	return this.promise;
}
var deferred = Q.defer();
deferred.all([promise1，promise2]).then(functin(results){

},functin(err){

}) 

memeda ---------------------------------------------------------------------

var failing = require('memeda').failing;
fs.readFile('./notebook.txt', 'utf8', failing(function(err){
	console.log(err);
}).passing(function(content){
	console.log(content);
}) )


Connect ---------------------------------------------------------------------
var connect = require('connect');
var app = connect();

async ---------------------------------------------------------------------
var async = require('async');

//异步并行 无依赖
async.series([
	function(callback){
		fs.readFile('./src/txt/file1.txt','utf8',callback)
	},
	function(callback){
	
		fs.readFile('./src/txt/file2.txt','utf8',callback)
	}
],function(err, results){
	console.log(results)
})

//异步串行 依赖
async.waterfall([
	function(callback){
		fs.readFile('./src/txt/file1.txt','utf8',function(err,content){
			callback(err,content)
		})
	},
	function(arg1, callback){
		fs.readFile('./src/txt/file2.txt','utf8',function(err,content){
			callback(err,content)	
		})
	}
],function(err, results){
	console.log(results)
})

//异步串行 自动处理依赖
var deps = {
	readFile2: ['readFile1', function(obj, callback){
		callback(null,{name:'zhoubingbing'});
	}],
	readFile1: function(callback){
		var that = this;
		fs.readFile('./src/txt/file1.txt','utf8',function(err,content){
			return callback(err,content);
		})
		
	},
	startup:['readFile1','readFile2',function(file1){
		console.log(file1) -> {
			readFile1: content,
			readFile2: {name:'zhoubingbing'}
		}
	}]
}
async.auto(deps)


step ---------------------------------------------------------------------

var step = require('step');
//异步串行 依赖
step(
	function readFile1(){
		fs.readFile('./src/txt/file1.txt','utf8',this);	
	},
	function readFile2(err, content){
		fs.readFile('./src/txt/file2.txt','utf8',this);	
	},
	function done(err, content){
		console.log(content)
	}
)
//异步并行
step(
	function readFile1(){
		fs.readFile('./src/txt/file1.txt','utf8', this.parallel());	
		fs.readFile('./src/txt/file2.txt','utf8', this.parallel());
	},
	function done(err, content1, content2){
		
	}
)

step(
	function readDir(){
		fs.readdir(__dirname,this);
	},
	function readFile1(err,results){
		if (err) throw err;
		var group = this.group(); //并行
		results.forEach(function(filename){
			
			if(/\.txt$/.test(filename)){
				fs.readFile(__dirname+"\\"+filename, group()) //生成回调函数
			}
		})
	},
	function showAll(err, files){
		if (err) throw err;
		console.log(files)
	}
)












