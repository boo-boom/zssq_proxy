const express = require('express');
const ip = require('ip');
const compression = require('compression');
const logger = require('morgan');
const app = express();
const router = express.Router();
const routes = require('./src/routes');
const $axios = require('./src/utils/axios');

router.axios = $axios;
// 设置允许跨域访问该服务
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4000');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Content-Type', 'application/json;charset=utf-8');
  res.header('Access-Control-Max-Age', 3600);
  next();
});
app.use(logger('dev'));
app.use(compression());
app.use('/api', routes(router));

app.listen(3005, () => console.log(`server start http://${ip.address()}:3005`))
