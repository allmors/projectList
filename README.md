<!--
 * @Author: Escher1108
 * @Website: https://jkgblog.com
 * @Date: 2022-02-13 21:59:59
 * @LastEditTime: 2022-02-13 22:03:52
 * @LastEditors: Do not edit
 * @FilePath: \proxy\README.md
 * @Description: 耶斯莫拉
-->
English | [简体中文](README_zh-CN.md)

# proxy
HTTP request proxy, CORS cross-domain request, HTTPS support

### Function
- Support cross-domain requests (converting interfaces that do not support cross-domain requests), and directly initiate ajax, fetch
- Support HTTPS (Resolve that the remote data interface does not support HTTPS)

### Use
- Host/{URL}
- <https://cors.jsproxy.cyou/api.github.com>
- <https://cors.jsproxy.cyou/http://nginx.org/download/nginx-1.20.1.zip>


### Run
```
npm start   # start

# node app.js
# PORT=8888 node app.js
```

### Source code
- Fork: <https://github.com/Rob--W/cors-anywhere>