var tmdbUrl = "https://api.themoviedb.org"
const http = require('http');
const axios = require('axios');
const url = require('url');
const querystring = require('querystring');
const common = require('../utility/common.js')

const server = http.createServer(async (req, res) => {
  // const { body } = req;
  const { url: requestUrl} = req;
  const parsedUrl = url.parse(requestUrl);

  if(parsedUrl.query===null){
    tmdbUrl = `https://api.themoviedb.org/3${requestUrl}?api_key=${common.apiKey}`;
  }else {
    tmdbUrl = `https://api.themoviedb.org/3${requestUrl}&api_key=${common.apiKey}`;
  }

  try {
    // 发送 HTTP 请求以获取 TMDb API 的响应
    const response = await axios.get(tmdbUrl);
    // 将 TMDb API 的响应返回给调用方
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response.data));
    console.log(tmdbUrl)
  }catch (error) {
    // 处理错误情况
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`${error}`);
    console.log(`${tmdbUrl}`);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function isObjectEmpty(obj) {
  if(typeof obj === "undefined"){
    return true;
  }
  return false;
}
