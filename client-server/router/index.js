const router = require('koa-router')();

router.get('/', async (ctx, next) => {
	console.log(123);
  return ctx.body = {
      code: 'S01',
      msg: 'success'
  };
});


router.get('/verify', async (ctx, next) => {
  this.body = 'verifying...';
});

module.exports = router;
