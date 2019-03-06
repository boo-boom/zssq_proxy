const axios = require('axios')

module.exports = (router) => {
  router.get('/', async (req, res) => {
    try {
      const result = await axios({
        url: '/category/statics',
        method: 'get',
        baseURL: 'https://b.zhuishushenqi.com',
      })
      res.send(result.data)
    } catch (err) {
      res.send({
        code: -100,
        msg: err.message
      })
    }
  })
}
