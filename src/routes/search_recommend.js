module.exports = (router) => {
  /**
   * 搜索推荐关键字
   */
  router.get('/search_recommend', async (req, res) => {
    try {
      const result = await router.axios({
        url: '/books/search-recommend'
      }, 'b01')
      res.send(result.data)
    } catch (err) {
      res.send({ code: -100, msg: err.message })
    }
  })
}
