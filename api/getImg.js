var imgUrl = "https://image.tmdb.org"
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
      // 使用axios获取远程图像数据
      const response = await axios.get(imgUrl, { responseType: 'arraybuffer' });

      // 设置响应头，告诉浏览器返回的是图片数据
      res.writeHead(200, {
          'Content-Type': 'image/jpeg',
          'Content-Length': response.data.length
      });

      // 将获取到的图像数据直接输出到浏览器
      res.end(response.data, 'binary');
    } catch (error) {
        console.error('Error fetching image:', error);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(`${error}`);
    }
};
