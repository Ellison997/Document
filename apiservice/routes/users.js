let express = require('express');
let router = express.Router();
let utils = require('./../common/utils')
let log = require('./../common/log')
const jwt = require("jsonwebtoken");
const { secretKey } = require('../common/constant');
let { insertStaff, queryStaffByPhoneAndPwd } = require('./dao/userDao')


/**
 * @api {GET} /users/list/:id   /users/list 获取员工列表
 * @apiDescription 获取员工列表
 * @apiName usersLogin
 * @apiParam (path参数) {Number} id 员工ID
 * @apiSampleRequest /users/list/:id
 * @apiGroup User
 * @apiVersion 1.0.0
 */
router.get('/list/:id', function(req, res, next) {
    res.json({
        code: 20000,
        msg: '获取员工列表',
        data: req.params.id
    })
});


/**
 * @api {POST} /users/addStaff   /users/addStaff 添加员工
 * @apiDescription 添加员工
 * @apiName addStaff
 * @apiParam (body参数) {String} staffName 员工姓名
 * @apiParam (body参数) {String} staffPhone 员工手机号
 * @apiParam (body参数) {String} staffState 员工状态
 * @apiParam (body参数) {String} staffPwd 登录密码
 * @apiParam (body参数) {String} staffSex 员工性别
 * @apiParam (body参数) {String} staffRoles 员工角色
 * @apiSampleRequest /users/addStaff
 * @apiGroup User
 * @apiVersion 1.0.0
 */
router.post('/addStaff', async function(req, res, next) {
    let staff = req.body;
    try {
        staff.staffPwd = utils.md5(staff.staffPwd)
    } catch (error) {
        log.error('addStaff', error)
    }

    let dbres = await insertStaff(staff)
    if (dbres != null) {
        res.json({
            code: 20000,
            msg: '添加员工成功',
            data: dbres
        })
    } else {
        res.json({
            code: 50000,
            msg: '添加员工失败',
            data: dbres
        })
    }

});





/**
 * @api {GET} /users/login/:phone/:pwd   /users/login WEB 端员工登录
 * @apiDescription WEB 端员工登录
 * @apiName usersList
 * @apiParam (path参数) {String} phone 员工手机号
 * @apiParam (path参数) {String} pwd 员工密码
 * @apiSampleRequest /users/login/:phone/:pwd
 * @apiGroup User
 * @apiVersion 1.0.0
 */
router.get('/login/:phone/:pwd', async function(req, res, next) {
    let phone = req.params.phone
    let pwd = req.params.pwd

    let staffs = await queryStaffByPhoneAndPwd(phone, utils.md5(pwd));
    if (staffs.length > 0) {
        let tokenObj = {
            staffPhone: staffs[0].staffPhone,
            staffName: staffs[0].staffName,
            staffRoles: staffs[0].staffRoles,
        };
        let token = jwt.sign(tokenObj,
            secretKey, {
                expiresIn: 60 * 60 * 30 * 24 // 授权时效三十天
            }
        );
        res.json({
            code: 20000,
            msg: '登录成功！',
            data: {
                token
            }
        });
    } else {
        res.json({
            code: 50000,
            msg: '登录失败,员工名或密码错误！',
            data: null
        })
    }

});

/**
 * @api {GET} /users/getUserInfo   /users/getUserInfo 获取登录的员工信息
 * @apiDescription 获取登录的员工信息
 * @apiName getUserInfo
 * @apiParam {String} token 访问令牌
 * @apiSampleRequest /users/getUserInfo
 * @apiGroup User
 * @apiVersion 1.0.0
 */
router.get('/getUserInfo', async function(req, res, next) {
    let token = utils.getRequestToken(req);
    let staff = null;
    try {
        staff = jwt.verify(token, secretKey);
    } catch (error) {
        log.error('getUserInfo', error)
    }


    if (staff != null) {
        res.json({
            code: 20000,
            msg: '获取员工信息',
            data: staff
        })
    } else {
        res.json({
            code: 50000,
            msg: '获取员工信息失败',
            data: null
        })
    }

});


module.exports = router;