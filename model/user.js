//设计数据模型
const mongoose = require("mongoose");
const baseModel = require("./base-model.js");
//加密算法
const md5 = require("../util/md5");
const userSchema = new mongoose.Schema({
    ...baseModel,
    name: {
        type: String,
        default: null,
    }, //名称
    avatar: {
        type: String,
        required: true,
    }, //昵称
    email: {
        type: String,
        required: true,
    }, //登陆账号
    password: {
        type: String,
        required: true,
        set: (value) => md5(value),
        select: false,
    },
    roles: {
        type: Array,
        default: ["admin"],
    }, //权限
    introduction: {
        type: String,
        default: null,
    }, //介绍
    bio: {
        type: String,
        default: null,
    },
    image: {
        type: String,
        default: null,
    },
});

module.exports = userSchema;
