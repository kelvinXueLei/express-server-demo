/**
 * Created by ryankl on 09/20/2018 15:36.
 */

/**
 * 字符串工具类
 */
class StringUtils {
    constructor() {

    }

    /**
     *
     * @param length
     * @param mode
     *      1: 小写字母,
     *      2: 大写字母,
     *      4: 数字,
     *      default: 1
     * @returns {string}
     */
    static generateRandomChar(length, mode) {
        let _value = '';
        let _set = [];
        switch (+mode) {
            case 1:
                _set = StringUtils.alphabetLower;
                break;
            case 2:
                _set = StringUtils.alphabetUpper;
                break;
            case 4:
                _set = StringUtils.number;
                break;
            case 3:
                _set = _set.concat(StringUtils.alphabetLower, StringUtils.alphabetUpper);
                break;
            case 5:
                _set = _set.concat(StringUtils.alphabetLower, StringUtils.number);
                break;
            case 6:
                _set = _set.concat(StringUtils.alphabetUpper, StringUtils.number);
                break;
            case 7:
                _set = _set.concat(StringUtils.alphabetLower, StringUtils.alphabetUpper, StringUtils.number);
                break;
            default:
                _set = StringUtils.alphabetLower;
        }
        for (let i = 0; i < length; i++) {
            _value += _set[Math.floor(Math.random() * _set.length)];
        }
        return _value;
    }


    static stringToAscii(str) {
        return str.charCodeAt(0).toString(16);
    }

    static asciiToString(asccode) {
        return String.fromCharCode(asccode);
    }

}

StringUtils.alphabetLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
StringUtils.alphabetUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
StringUtils.number = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

module.exports = StringUtils;