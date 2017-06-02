const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  ctx.body = 'Hello World';
});

const router = require('koa-router')();

router.get('/aa', async function (ctx, next) {
  await ctx.render('index', {
    title: 'Hello World Koa!'
  });
});
module.exports = router;

app.listen(3000);
