module.exports = (router) => {
  /**
   * 首页接口
   * @api /jingxuan
   * @param {string} type 类型 press，jx，vip，male，female
   */
  router.get('/jingxuan', async (req, res) => {
    console.log(req.query)
    try {
      const result = await router.axios({
        url: '/category/group-minlist',
        data: { type: req.query.type }
      }, 'b')
      res.send(result.data)
    } catch (err) {
      res.send({ code: -100, msg: err.message })
    }
  })
}
