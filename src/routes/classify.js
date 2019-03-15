module.exports = (router) => {
  /**
   * 分类
   * @api /classify
   */
  router.get('/classify', async (req, res) => {
    try {
      const result = await router.axios({
        url: '/category/statics'
      }, 'b')
      res.send(result)
    } catch (err) {
      res.send({ code: -100, msg: err.message })
    }
  })
}
