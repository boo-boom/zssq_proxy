module.exports = router => {
  router.get('/booklist', async(req, res) => {
    try {
      const result = await router.axios({
        url: '/category/booklist',
        data: {
          node: req.query.id,
          size: req.query.limit,
          st: req.query.start
        }
      }, 'b')
      res.send(result)
    } catch (err) {
      res.send({ code: -100, msg: err.message })
    }
  })
}
