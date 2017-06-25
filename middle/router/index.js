const router = require('koa-router')();
const excuate = require('../thrift/index');

router.get('/', async (ctx, next) => {
	console.log(123);
  return ctx.body = {
      code: 'S01',
      msg: 'success'
  };
});


router.get('verify', async (ctx, next) => {
  this.body = 'verifying...';
	console.log(excuate);
	return ctx.body = {
      code: 'S01',
      msg: 'success'
  };
});

module.exports = router;
