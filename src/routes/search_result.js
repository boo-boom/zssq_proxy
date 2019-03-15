// /**
//  * 搜索结果
//  * @api /search_result
//  * @param {string} keyword 搜索关键字
//  * @param {number} start 偏移量
//  * @param {number} limit 分页长度
//  * @param {string} type 类型 book_list：书单  pic：漫画，不传则搜索书籍
//  * @param {string} cat 搜索按分类是筛选  可选
//  * @param {string} tag 搜索按标签是筛选  可选
//  * @param {boolean} isserial true：连载，false：完结，不传搜全部
//  * @param {number} price 2：vip， 3：付费   可选
//  * @param {number} wordCount 1：20万字以内，2：20万字~50万字。。。1,2：多选，20万字和20-50万字  可选
//  *
//  */

// module.exports = router => {
//   router.get('/search_result', async(req, res) => {
//     try {
//       const result = await router.axios({
//         url: '/book-list/ugcbooklist-search',
//         data: {
//           query: req.query.keyword,
//           start: req.query.start,
//           limit: req.query.limit
//         }
//       })
//       res.send(result.data)
//     } catch (err) {
//       res.send({ code: -100, msg: err.message })
//     }
//   })
// }


// ---------------------------
/**
 * 搜索结果
 * @api /search_result
 * @param {string} model.query 搜索关键字
 * @param {number} model.start 偏移量
 * @param {number} model.limit 分页长度
 * @param {number} model.contentType2 返回类型 1:书籍 2:漫画
 * @param {string} model.packageName 未知
 * @param {string} model.onlyTitle 未知
 */
module.exports = router => {
  router.get('/search_result', async(req, res) => {
    try {
      const result = await router.axios({
        url: '/books/fuzzy-search',
        data: {
          'model.query': req.query.keyword,
          'model.start': req.query.start,
          'model.limit': req.query.limit,
          'model.contentType2': req.query.type,
          'model.packageName': 'com.ifmoc.ZhuiShuShenQi',
          'model.onlyTitle': true
        }
      }, 'b01')
      res.send(result)
    } catch (err) {
      res.send({ code: -100, msg: err.message })
    }
  })
}

