var express = require('express');
var router = express.Router();
let log = require('./../common/log');
let path = require('path');

/**
 * @api {GET} / / 返回前端页面
 * @apiDescription  返回前端页面
 * @apiName return index.html
 * @apiGroup Index
 * @apiVersion 1.0.0
 */
router.get('/', function(req, res, next) {
    res.json({
        code: 20000
    });
});


/**
 * @api {GET} /apidoc /apidoc 获取api文档
 * @apiDescription  获取api文档
 * @apiName apidoc
 * @apiGroup Index
 * @apiVersion 1.0.0
 */
router.get('/apidoc', function(req, res, next) {
    log.info(`http://${req.headers.host}/dist/apidoc/index.html`)
    res.redirect(`http://${req.headers.host}/dist/apidoc/index.html`)
});

module.exports = router;