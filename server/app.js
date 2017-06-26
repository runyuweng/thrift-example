var thrift = require("thrift");
var SaveList = require("../thrift/gen-nodejs/SaveList");
var ttypes = require("../thrift/gen-nodejs/list_types");
var Data = require("../thrift/gen-nodejs/list_types").Data;
var List_Item = require("../thrift/gen-nodejs/list_types").List_Item;

var list = [];

var server = thrift.createServer(SaveList, {
  ping: function(result) {
    console.log("ping in server...................");
    result(null);
  },

  save: function(name, words, date, result){
    console.log('data:', name, words, date);
    list.push(
      new List_Item({
        name: name,
        words: words,
        date: date
      })
    )
    const data = new Data({
      code:'S01',
      msg:'success',
      content: list
    });
    result(null, data);
  }

});

server.listen(3002);
