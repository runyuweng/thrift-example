const router = require('koa-router')();
const excuate = require('../thrift/index');

router.get('/', async (ctx, next) => {
  return ctx.body = {
      code: 'S01',
      msg: 'success'
  };
});

router.post('login', async (ctx, next) => {
  console.log('login...',ctx.request.body)
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
