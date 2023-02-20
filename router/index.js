const express = require("express");
const router = express.Router();

// 用户相关路由
router.use(require("./user"));

// 用户资料相关路由
router.use("/profiles", require("./profile"));

// 文章相关路由
router.use("/articles", require("./article"));

// 标签相关路由
router.use(require("./tag"));

// 功能相关路由
// router.use("/funtion", require("./funtion"));

// 登录相关路由
// router.use("/login", require("./login"));

module.exports = router;
