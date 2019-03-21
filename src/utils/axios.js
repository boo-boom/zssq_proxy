const axios = require('axios')
const tool = require('./tool')

module.exports = (options, curl = 'api', scheme = 'https') => {
  const formatParams = (opt) => {
    const requestData = {
      url: opt.url,
      method: opt.method || 'get',
      baseURL: `${scheme}://${curl}.zhuishushenqi.com`,
      headers: {
        'User-Agent': tool.randomUserAgent()
      }
    }
    if (requestData.method === 'get') {
      requestData.params = opt.data;
    } else {
      requestData.data = opt.data;
    }
    return requestData;
  }

  if (Object.prototype.toString.call(options) !== '[object Array]') {
    return new Promise((resolve, reject) => {
      axios(formatParams(options)).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  } else {
    const requestArr = options.map(item => {
      return axios(formatParams(item))
    });
    return new Promise((resolve, reject) => {
      axios.all(requestArr).then(axios.spread((...arg) => {
        const content = arg.map(item => {
          if (item.data.ok) {
            return item.data
          }
          return {}
        })
        resolve(content)
      })).catch(err => {
        reject(err)
      })
    })
  }
}
