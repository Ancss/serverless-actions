const Koa = require('koa')
const KoaRouter = require('koa-router')
const sendFile = require('koa-sendfile')
const path = require('path')
const static = require('koa-static')
const app = new Koa()
const router = new KoaRouter()
const mount = require('koa-mount');

// Routes
router.get(`/`, async (ctx) => {
  await sendFile(ctx, path.join(__dirname,'dist', 'index.html'))
})
app.use(mount('/assets', static(path.join(__dirname,'dist','assets'))))



app.use(router.allowedMethods()).use(router.routes())

app.listen(9000, () => {
  console.log(`Server start on http://localhost:9000`);
})

