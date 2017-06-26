const router = require('koa-router')();
const thrift = require('thrift');
const SaveList = require('../thrift/gen-nodejs/SaveList');
const ttypes = require('../thrift/gen-nodejs/list_types');

var transport = thrift.TBufferedTransport;
var protocol = thrift.TBinaryProtocol;

router.get('/', async (ctx, next) => {
  return ctx.body = {
      code: 'S01',
      msg: 'success'
  };
});

router.post('login', async (ctx, next) => {
  console.log('login...',ctx.request.body);

  var transport = thrift.TBufferedTransport;
  var protocol = thrift.TBinaryProtocol;

  var connection = thrift.createConnection("localhost", 3002, {
    transport : transport,
    protocol : protocol
  });

  connection.on('error', function(err) {
    assert(false, err);
  });

  var client = thrift.createClient(SaveList, connection);


  client.ping(function(err, response) {
    console.log('ping in middle');
  });

  console.log('username',ctx.request.body.username);


  client.save(ctx.request.body.username, ctx.request.body.username, ctx.request.body.username, function(err, response) {
    console.log("res:",response);
  });

  return ctx.body = {
      code: 'S01',
      msg: 'success'
  };
});

module.exports = router;
