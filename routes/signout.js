/**
 *
 * Project:myblog
 * file name:signout
 * Created by xiaohui on 2017/3/12
 * Email:a6551142@163.com
 *
 */

var express = require('express');
var router = express.Router();

var checkLogin = require('../middlewares/check').checkLogin;


// GET /signout 登出
router.get('/', checkLogin, function(req, res, next) {
    // 清空 session 中用户信息
    req.session.user = null;
    req.flash('success', '登出成功');
    // 登出成功后跳转到主页
    res.redirect('/posts');
});

module.exports = router;