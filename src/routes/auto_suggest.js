module.exports = router => {
  router.get('/auto_suggest', async(req, res) => {
    try {
      const result = await router.axios({
        url: '/books/auto-suggest',
        data: {
          query: req.query.query,
          packageName: 'com.ifmoc.ZhuiShuShenQi'
        }
      }, 'b01')
      res.send(result)
    } catch (err) {
      res.send({ code: -100, msg: err.message })
    }
  })
}
