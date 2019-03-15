module.exports = router => {
  /**
   * 热门推荐
   */
  router.get('/hot_recommend', async(req, res) => {
    try {
      const result = await router.axios({
        url: '/book/hot-word'
      })
      res.send(result)
    } catch (err) {
      res.send({ code: -100, msg: err.message })
    }
  })
}
