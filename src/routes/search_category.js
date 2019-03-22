/**
 * 根据关键字搜索分类
 * @api /search_category
 * @param {string} model.query 搜索关键字
 * @param {number} model.limit 分页长度
 * @param {number} model.contentType2 返回类型 1:书籍 2:漫画
 */

module.exports = (router) => {
  router.get('/search_category', async (req, res) => {
    try {
      const data = {
        'model.query': req.query.query,
        'model.limit': req.query.limit,
        'model.contentType2': req.query.type,
        'model.packageName': 'com.ifmoc.ZhuiShuShenQi',
      }
      const result = await router.axios({
        url: '/books/fuzzy-search-category',
        data
      }, 'b01')
      res.send(result)
    } catch (err) {
      res.send({ code: -100, msg: err.message })
    }
  })
}
