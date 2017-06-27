var thrift = require("thrift");
var SaveList = require("../thrift/gen-nodejs/SaveList");
var ttypes = require("../thrift/gen-nodejs/list_types");
var Data = require("../thrift/gen-nodejs/list_types").Data;
var List_Item = require("../thrift/gen-nodejs/list_types").List_Item;

// 直接定义一个变量用来存储客户端发送的数据
var list = [];

// 创建一个thrift服务
var server = thrift.createServer(SaveList, {

  // 在idl中定义的ping方法
  ping: function(result) {
    console.log("ping in server");
    result(null);
  },

  // 在idl中定义的save方法
  save: function(name, words, date, result){
    console.log('server get data from middle:', name, words, date);

    // 在给list push元素时需要调用 idl中的new方法，不然在new Data()时会报错
    list.push(
      new List_Item({
        name: name,
        words: words,
        date: date
      })
    )

    // 定义返回值并返回
    const data = new Data({
      code:'S01',
      msg:'success',
      content: list
    });
    result(null, data);
  }

});

server.listen(3002);
