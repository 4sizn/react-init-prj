const path = require('path');
const session = require('koa-session');
const fs = require('fs-extra');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Negotiator = require('negotiator');
const Router = require('koa-router');
const serve = require('koa-static');

const app = new Koa();
const router = new Router();
const sessionConfig = { maxAge: 86400000 }; // 1day

app.use(bodyParser());
app.use(session(sessionConfig, app));
app.keys = ['webviewer'];
app.use(serve(path.resolve(__dirname, './../')));
app.use(router.routes()).use(router.allowedMethods());

const gateHtml = fs.readFileSync(path.resolve('./views/index.html'), { encoding: 'utf8' });
const port = 5001;

router.get('/', (ctx) => {
  ctx.body = gateHtml;
});

router.get('/logout', (ctx) => {
  ctx.redirect('/');
});


app.listen(port, () => {
  console.log(`listening to port ${port}`);
});