const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./router");
const errorHandler = require("./middleware/error-handler");
require("./model"); //引入数据库

const app = express();
//日志
app.use(morgan("dev"));
//跨域
app.use(cors());
// 解析请求体
app.use(express.json());
app.use(express.urlencoded());

const PORT = process.env.PORT || 3000;

// 挂载路由
app.use("/api", router);

// 挂载统一处理服务端错误中间件
app.use(errorHandler());

function makeMulti(string) {
    let l = new String(string);
    l = l.substring(l.indexOf("/*") + 3, l.lastIndexOf("*/"));
    return l;
}
let string = function () {
    /*     
██   ██ ██  █████   ██████        ██████  ██ ██   ██ ██    ██ ██ 
 ██ ██  ██ ██   ██ ██    ██       ██   ██ ██ ██  ██  ██    ██ ██ 
  ███   ██ ███████ ██    ██ █████ ██████  ██ █████   ██    ██ ██ 
 ██ ██  ██ ██   ██ ██    ██       ██   ██ ██ ██  ██  ██    ██ ██ 
██   ██ ██ ██   ██  ██████        ██   ██ ██ ██   ██  ██████  ██ 
*/
};
app.listen(PORT, () => {
    console.log(makeMulti(string));
    console.log(`Server is running at http://loaclhost:${PORT}`);
});
