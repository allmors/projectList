/*
 * @Author: Escher1108
 * @Website: https://jkgblog.com
 * @Date: 2022-05-15 18:48:00
 * @LastEditTime: 2022-05-16 12:00:06
 * @LastEditors: Do not edit
 * @FilePath: \projectList\index.js
 * @Description: 耶斯莫拉
 */
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();


app.all('*', function (req, res, next) {
    console.log("=====================")
    console.log(req.url)
    console.log("=====================")
    res.header("Access-Control-Allow-Origin", req.headers.origin);//访问的主机名称
  	res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");//允许以下方法进行跨域请求
    next();
});

const url = 'https://jsp.fuckjs.workers.dev';
const PORT = process.env.PORT || 5001;
// const url = 'https://www.baidu.com'

// 配置
const options = {
    target: url, // 目标服务器 host
    changeOrigin: true,               // 默认false，是否需要改变原始主机头为目标URL
    ws: true,                         // 是否代理websockets
};

app.use('/', createProxyMiddleware(options));
app.listen(PORT);
