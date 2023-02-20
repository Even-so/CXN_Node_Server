const express = require("express");
const userCtrl = require("../controller/user"); //数据操做
const userValidator = require("../validator/user"); //数据检验
const auth = require("../middleware/auth"); //token认证

const router = express.Router();

// Registration 用户注册
router.post("/users", userValidator.register, userCtrl.register);

// Authentication 用户登录
router.post("/users/login", userValidator.login, userCtrl.login);

// Get Current User 获取当前登录用户
router.get("/user", auth, userCtrl.getCurrentUser);

// Update User 更新用户
router.put("/user", userCtrl.updateUser);

module.exports = router;
