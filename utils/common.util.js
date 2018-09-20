const logger = require('../utils/log.util').logger;
const Response = require('../vo/response.vo');

class commonUtil {
    constructor() {

    };
    //错误处理
    static errHandler(msg, isLogger = false) {
        let vo = new Response();
        return new Promise((resolve, reject) => {
            let result = null;
            if (!isLogger) {
                result = vo.fail(msg);
            } else {
                logger.error(msg);
                result = vo.fail('服务器错误');
            }
            resolve(result);
        })
    };
}


module.exports = commonUtil;