var thrift = require("thrift");
var SaveList = require("./thrift/gen-nodejs/SaveList");
var ttypes = require("./thrift/gen-nodejs/list_types");
var Data = require("./thrift/gen-nodejs/list_types").Data;

var data = {};

var server = thrift.createServer(SaveList, {
  ping: function(result) {
    console.log("ping() in server");
    result(null);
  },

  save: function(name, content, data, result){
    console.log('data:', name, content, data);
    result(null, new Data({code:'S01', msg:'success'}));
  }

  // add: function(n1, n2, result) {
  //   console.log("add(", n1, ",", n2, ")");
  //   result(null, n1 + n2);
  // },
  //
  // calculate: function(logid, work, result) {
  //   console.log("calculate(", logid, ",", work, ")");
  //
  //   var val = 0;
  //   if (work.op == ttypes.Operation.ADD) {
  //     val = work.num1 + work.num2;
  //   } else if (work.op === ttypes.Operation.SUBTRACT) {
  //     val = work.num1 - work.num2;
  //   } else if (work.op === ttypes.Operation.MULTIPLY) {
  //     val = work.num1 * work.num2;
  //   } else if (work.op === ttypes.Operation.DIVIDE) {
  //     if (work.num2 === 0) {
  //       var x = new ttypes.InvalidOperation();
  //       x.whatOp = work.op;
  //       x.why = 'Cannot divide by 0';
  //       result(x);
  //       return;
  //     }
  //     val = work.num1 / work.num2;
  //   } else {
  //     var x = new ttypes.InvalidOperation();
  //     x.whatOp = work.op;
  //     x.why = 'Invalid operation';
  //     result(x);
  //     return;
  //   }
  //
  //   var entry = new SharedStruct();
  //   entry.key = logid;
  //   entry.value = ""+val;
  //   data[logid] = entry;
  //
  //   result(null, val);
  // },
  //
  // getStruct: function(key, result) {
  //   console.log("getStruct(", key, ")");
  //   result(null, data[key]);
  // },
  //
  // zip: function() {
  //   console.log("zip()");
  //   result(null);
  // }

});

server.listen(3002);
