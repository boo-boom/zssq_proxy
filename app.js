const express = require('express');
const logger = require('morgan');
const router = express.Router();
const app = express();
const routes = require('./src/routes');
const $axios = require('./src/utils/axios');

router.axios = $axios;
app.use(logger('dev'));
app.use('/api', routes(router));

app.listen(3005, () => console.log('server start http://localhost:3005'));