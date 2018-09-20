/**
 * Created by Galois Zhou on 03/01/2018 01:05.
 */

class ResponseVo {
    constructor() {
        this.code = ResponseVo.CODE.SUCCESS;
        this.Msg = 'ok';
    }

    toJson(data) {
        return {
            status: this.code,
            Msg: this.Msg,
            data: JSON.parse(JSON.stringify(data)),
        }
    }

    fail(str) {
        return {
            status: ResponseVo.CODE.ERROR,
            Msg: str,
            data: null
        }
    }

    noLogin(str) {
        return {
            status: ResponseVo.CODE.NO_LOGIN,
            Msg: str,
            data: null
        }
    }
}

ResponseVo.CODE = {
    SUCCESS: 200,
    ERROR: 500,
    AUTH_FAILED: 401,
    NO_LOGIN: 403
};

module.exports = ResponseVo;