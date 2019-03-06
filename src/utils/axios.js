const axios = require('axios')
const tool = require('./tool')

module.exports = (opt, curl='api') => {
  const requestData = {
    url: opt.url,
    method: opt.method || 'get',
    baseURL: `https://${curl}.zhuishushenqi.com`,
    headers: {
      'User-Agent': tool.randomUserAgent()
    }
  }
  if(requestData.method === 'get') {
    requestData.params = opt.data;
  } else {
    requestData.data = opt.data;
  }
  return axios(requestData)
}
