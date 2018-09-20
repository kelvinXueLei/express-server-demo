/**
 * Created by ryankl on 09/20/2018 01:05.
 */

const express = require('express');
const router = express.Router();
const commonUtil = require('../utils/common.util');
const IndexService = require('../services/index.service');
//search
router.get('/test', test);
//insert
router.post('/insert', insert);
//update
router.post('/update', update);
//delete
router.post('/delete', deleteItem);

/**
 * @description 查询
 * @param {number} pageNo 页码 @default 1 
 * @returns {object} 
 * @throws {服务器错误}
 */
async function test(req, res, next) {
    let service = new IndexService();
    let result = null;
    try {
        let data = {
            pageNo: req.query.pageNo || 1
        }
        result = await service.test(data);
    } catch (error) {
        result = await commonUtil.errHandler(error, true);
    }
    res.send(result);
}
/**
 * @description 插入
 * @param {string} title 标题 @default ""
 * @param {string} des 简介 @default ""
 * @returns {object}
 * @throws {服务器错误}
 */
async function insert(req, res, next) {
    let service = new IndexService();
    let result = null;
    try {
        let data = {
            title: req.body.title || "",
            des: req.body.des || ""
        }
        result = await service.insert(data);
    } catch (error) {
        result = await commonUtil.errHandler(error, true);
    }
    res.send(result);
}
/**
 * @description 更新
 * @param {string} title 标题 @default ""
 * @param {number} id 文章id
 * @returns {object}
 * @throws {服务器错误}
 */
async function update(req, res, next) {
    let service = new IndexService();
    let result = null;
    if (!req.body.id || req.body.id == "") {
        result = await commonUtil.errHandler('id不可为空');
    } else {
        try {
            let data = {
                title: req.body.title || "",
                id: req.body.id
            }
            result = await service.update(data);
        } catch (error) {
            result = await commonUtil.errHandler(error, true);
        }
    }
    res.send(result);
}
/**
 * @description 删除
 * @param {number} id 文章id
 * @returns {object}
 * @throws {服务器错误}
 */
async function deleteItem(req, res, next) {
    let service = new IndexService();
    let result = null;
    if (!req.body.id || req.body.id == "") {
        result = await commonUtil.errHandler('id不可为空');
    } else {
        try {
            let data = {
                id: req.body.id
            }
            result = await service.deleteItem(data);
        } catch (error) {
            result = await commonUtil.errHandler(error, true);
        }
    }
    res.send(result);
}



module.exports = router;