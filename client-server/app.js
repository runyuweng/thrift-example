const Koa = require('koa');
const router = require('koa-router')();
const cors = require('koa-cors');

const index = require('./router/index');

const app = new Koa();

app.use(cors());

router.use('/', index.routes());

app.use(router.routes());

app.listen(3001);
