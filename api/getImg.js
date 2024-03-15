var imgUrl = "https://api.themoviedb.org"
const http = require('http');
const axios = require('axios');
const url = require('url');
const common = require('../utility/common.js')
const fs = require('fs');

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
    // // 发送 HTTP 请求以获取 TMDb API 的响应
    // const response = await axios.get(imgUrl);
    // response.setEncoding("binary");
    // response.on('data', function (chunk) {
    //   data += chunk;
    // });
    // // 当数据接收完毕之后，会触发end事件
    // response.on("end", function () {
    //   //写入文件
    //   fs.writeFile('./1.jpg', data, 'binary', (err) => {
    //     if (err) {
    //       console.log('写入文件错误')
    //     } else {
    //       console.log('写入文件成功')
    //     }
    //   })
    // });
    var content = fs.readFileSync(imgUrl,"binary");   //格式必须为 binary 否则会出错
    res.write(content,"binary"); //格式必须为 binary，否则会出错
  }catch (error) {
    // 处理错误情况
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`${error}`);
    console.log(`${imgUrl}`);
  }
};
