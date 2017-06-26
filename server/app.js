var thrift = require("thrift");
var SaveList = require("../thrift/gen-nodejs/SaveList");
var ttypes = require("../thrift/gen-nodejs/list_types");
var Data = require("../thrift/gen-nodejs/list_types").Data;

var data = {};

var server = thrift.createServer(SaveList, {
  ping: function(result) {
    console.log("ping in server...................");
    result(null);
  },

  save: function(name, content, data, result){
    console.log('data:', name, content, data);
    result(null, new Data({code:'S01', msg:'success'}));
  }

});

server.listen(3002);
