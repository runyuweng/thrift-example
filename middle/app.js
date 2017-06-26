const Koa = require('koa');
const router = require('koa-router')();
const cors = require('koa-cors');
const koaBody = require('koa-body');

const index = require('./router/index');

const app = new Koa();

// 由于起了三个服务，端口不同，所以需要跨域
app.use(cors());

// 使用koaBody包可以在post请求时通过ctx.request.body.xxx获取参数
app.use(koaBody());

// 引入router文件中的路由
router.use('/', index.routes());
app.use(router.routes());

// 在3001端口起服务
app.listen(3001);
