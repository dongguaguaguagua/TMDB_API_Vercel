# TMDb API Vercel

让你在中国大陆快速访问TMDb的API

A vercel service to get access to TMDb in China.

## 原理

使用Vercel的serverless function利用nodejs作为后端，访问TMDb的数据后传入本地。

## 如何部署

1. 将本项目fork至私人仓库
2. 在Vercel中点击import导入仓库
3. 在environment variable中添加变量：`TMDB_API_KEY`，值为你申请到的TMDb API密钥
4. 点击deploy，等待部署完成
5. 点击domains绑定你的域名，即可使用～

## 使用指南

TMDb的数据分为json数据和图片数据。

`https://www.example.com/get/`对应的是`https://api.themoviedb.org/3/`

`https://www.example.com/img/`对应的是`https://image.tmdb.org/`

以`https://tmdb.melonhu.cn`为例：
* 访问《星球大战》电影数据：[https://tmdb.melonhu.cn/get/movie/11](https://tmdb.melonhu.cn/get/movie/11)
* 发现电影：[https://tmdb.melonhu.cn/get/discover/movie?page=1&language=zh-CN](https://tmdb.melonhu.cn/get/discover/movie?page=1&language=zh-CN)
* 访问图片：[https://tmdb.melonhu.cn/img/t/p/original/1E5baAaEse26fej7uHcjOgEE2t2.jpg](https://tmdb.melonhu.cn/img/t/p/original/1E5baAaEse26fej7uHcjOgEE2t2.jpg)
