const express = require("express");
const router = express.Router();
const articleCtrl = require("../controller/article"); //数据操做
const articleValidator = require("../validator/article"); //数据检验
const auth = require("../middleware/auth"); //token认证

// Feed Articles
// router.get("/", async (req, res, next) => {
//     try {
//         // 处理请求
//         res.send("get /articles/");
//     } catch (err) {
//         next(err);
//     }
// });
router.get("/", articleCtrl.listArticles);

// Feed Articles
router.get("/feed", async (req, res, next) => {
    try {
        // 处理请求
        res.send("get /articles/feed");
    } catch (err) {
        next(err);
    }
});

// Get Article
router.get("/:articleId", articleValidator.getArticle, articleCtrl.getArticle);
// Create Article 创建文章
router.post("/", auth, articleValidator.createArticle, articleCtrl.createArticle);

// Update Article
router.put("/:articleId", auth, articleValidator.updateArticle, articleCtrl.updateArticle);

// Delete Article
router.delete("/:slug", async (req, res, next) => {
    try {
        // 处理请求
        res.send("delete /articles/:slug");
    } catch (err) {
        next(err);
    }
});

// Add Comments to an Article
router.post("/:slug/comments", async (req, res, next) => {
    try {
        // 处理请求
        res.send("post /articles/:slug/comments");
    } catch (err) {
        next(err);
    }
});

// Get Comments from an Article
router.get("/:slug/comments", async (req, res, next) => {
    try {
        // 处理请求
        res.send("get /articles/:slug/comments");
    } catch (err) {
        next(err);
    }
});

// Delete Comment
router.delete("/:slug/comments/:id", async (req, res, next) => {
    try {
        // 处理请求
        res.send("delete /articles/:slug/comments/:id");
    } catch (err) {
        next(err);
    }
});

// Favorite Article
router.post("/:slug/favorite", async (req, res, next) => {
    try {
        // 处理请求
        res.send("post /articles/:slug/favorite");
    } catch (err) {
        next(err);
    }
});

// Unfavorite Article
router.delete("/:slug/favorite", async (req, res, next) => {
    try {
        // 处理请求
        res.send("delete /articles/:slug/favorite");
    } catch (err) {
        next(err);
    }
});

module.exports = router;
