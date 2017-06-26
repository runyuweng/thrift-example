const thrift = require('thrift');

exports.createConnection = function(){
  var transport = thrift.TBufferedTransport;
  var protocol = thrift.TBinaryProtocol;

  var connection = thrift.createConnection("localhost", 3002, {
    transport : transport,
    protocol : protocol
  });

  connection.on('error', function(err) {
    assert(false, err);
  });

  return connection;
}
