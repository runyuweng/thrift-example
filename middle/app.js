const Koa = require('koa');
const router = require('koa-router')();
const cors = require('koa-cors');
const koaBody = require('koa-body');

const index = require('./router/index');

const app = new Koa();

app.use(cors());
app.use(koaBody());

router.use('/', index.routes());

app.use(router.routes());

app.listen(3001);
