const Koa = require('koa');
const router = require('koa-router')();

const index = require('./router/index');

const app = new Koa();

router.use('/', index.routes());

app.use(router.routes());

app.listen(3000);
