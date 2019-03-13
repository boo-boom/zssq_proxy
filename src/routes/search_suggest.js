module.exports = router => {
  /**
   * 搜索联想词
   */
  router.get('/search_suggest', async(req, res) => {
    try {
      const result = await router.axios({
        url: '/books/auto-suggest',
        data: {
          query: req.query.keyword
        }
      }, 'b')
      res.send(result.data)
    } catch (err) {
      res.send({ code: -100, msg: err.message })
    }
  })
}
