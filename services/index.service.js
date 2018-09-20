const Service = require('./service');
const Response = require('../vo/response.vo');
const commonUtil = require('../utils/common.util');

class IndexService extends Service {
    constructor() {
        super();
    };
    /**
     * @description 查询
     * @param {object} data @example {pageNo:1}
     * @returns {object}
     * @memberof router.index.test
     * @throws {服务器错误}
     */
    async test(data) {
        let result = null;
        let vo = new Response();
        try {
            await this.connect();
            let list = await this.query('SELECT * FROM user LIMIT ?,10', [(data.pageNo - 1) * 10]);
            await this.connect();
            let [{ count }] = await this.query('SELECT COUNT(id) AS count FROM user');
            result = vo.toJson({
                pageNo: Number(data.pageNo),
                pageSize: 10,
                total: count || 0,
                list: list || []
            });
        } catch (error) {
            result = await commonUtil.errHandler(error, true);
        }
        return result;
    };
    /**
     * @description 插入
     * @param {object} data @example {title:"",des:""}
     * @returns {object}
     * @memberof router.index.insert
     * @throws {服务器错误}
     */
    async insert(data){
        let result = null;
        let vo = new Response();
        try {
            await this.connect();
            let callback = await this.query('INSERT IGNORE INTO post SET ?', data);
            if(callback.insertId!=0){
                result = vo.toJson('插入成功')
            }else{
                result = vo.fail('插入失败')
            }
        } catch (error) {
            result = await commonUtil.errHandler(error, true);
        }
        return result;
    };
    /**
     * @description 更新
     * @param {object} data @example {title:"",id:1}
     * @returns {object}
     * @memberof router.index.update
     * @throws {服务器错误}
     */
    async update(data) {
        let result = null;
        let vo = new Response();
        try {
            await this.connect();
            await this.query('UPDATE post SET title=? WHERE id=?', [data.title,data.id]);
            result = vo.toJson('更新成功');
        } catch (error) {
            result = await commonUtil.errHandler(error, true);
        }
        return result;
    };
    /**
     * @description 删除
     * @param {object} data @example {id:1}
     * @returns {object}
     * @memberof router.index.deteleItem
     * @throws {服务器错误}
     */
    async deleteItem(data){
        let result = null;
        let vo = new Response();
        try {
            await this.connect();
            await this.query('DELETE FROM post WHERE id=?', [data.id]);
            result = vo.toJson('删除成功');
        } catch (error) {
            result = await commonUtil.errHandler(error, true);
        }
        return result;
    }
}


module.exports = IndexService;