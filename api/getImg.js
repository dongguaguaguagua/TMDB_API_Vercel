var imgUrl = "https://api.themoviedb.org"
const http = require('http');
const axios = require('axios');
const url = require('url');
const common = require('../utility/common.js')

module.exports = async (req, res) => {
  var { url: requestUrl} = req;
  // 重定向的`/get`必须去除
  if (!requestUrl.startsWith("/img")) {
    return;
  }else{
    requestUrl = requestUrl.replace(/^\/img/, '');
  }
  // 如果`api_key`前面存在参数，则`api_key`前面是'&'，否则前面就是是'?'
  imgUrl = `https://image.tmdb.org${requestUrl}`;

  try {
    // 发送 HTTP 请求以获取 TMDb API 的响应
    const response = await axios.get(imgUrl);
    // 将 TMDb API 的响应返回给调用方
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response.data));
    console.log(imgUrl)
  }catch (error) {
    // 处理错误情况
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`${error}`);
    console.log(`${imgUrl}`);
  }
};
