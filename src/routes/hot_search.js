module.exports = (router) => {
  /**
   * 热门搜索关键字
   */
  router.get('/hot_search', async(req, res) => {
    try {
      const result = await router.axios({
        url: '/book/search-hotwords'
      })
      res.send(result)
    } catch (err) {
      res.send({ code: -100, msg: err.message })
    }
  })
}
