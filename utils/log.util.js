/**
 * Created by ryankl on 09/20/2018 15:36.
 */

const log4js = require('log4js');

const config = require('../conf/config');

class Logger {

    constructor() {
        let _configure = {
            appenders: {
                [Logger.LOGGER_APPENDER]: { type: Logger.LOGGER_TYPE, filename: Logger.LOGGER_FILE_PATH }
            },
            categories: { default: { appenders: [Logger.LOGGER_APPENDER], level: Logger.LOGGER_LEVEL } }
        };
        if (Logger.LOGGER_CONSOLE) {
            _configure.appenders.console = { type: 'console' };
            _configure.categories.default.appenders.push('console');
        }
        log4js.configure(_configure);
        this.logger = log4js.getLogger(Logger.LOGGER_APPENDER);
    }

    trace() {
        this.logger.trace(this._build(arguments));
    }

    debug() {
        this.logger.debug(this._build(arguments));

    }

    info() {
        this.logger.info(this._build(arguments));
    }

    warn() {
        this.logger.warn(this._build(arguments));
    }

    error() {
        this.logger.error(this._build(arguments));
        try {
            throw new Error('### SYSTEM TRACE ERROR!!!');
        } catch (err) {
            this.logger.error(this._build([err]));
        }
    }

    fatal() {
        this.logger.fatal(this._build(arguments));
        try {
            throw new Error('### SYSTEM TRACE FALTAL!!!');
        } catch (err) {
            this.logger.fatal(this._build([err]));
        }
    }

    _build(messages) {
        let _messages = [];
        try {
            throw new Error();
        } catch (err) {
            try {
                let preProcess = err.stack.split('\n')[3];
                let preMethod = preProcess.substring(preProcess.indexOf('at ') + 3, preProcess.indexOf('(') - 1);
                let preFilePath = preProcess.substring(preProcess.indexOf('(') + 1, preProcess.lastIndexOf(')')).replace(process.cwd(), '.');
                if (preMethod == 'Object.<anonymous>') {
                    preMethod = '_';
                } else {
                    preMethod += '()';
                }
                _messages.push(preFilePath || '_', preMethod || '_');
            } catch (e) {
                _messages.push('_', '_');
            }
        }

        for (let i = 0; i < messages.length; i++) {
            if (messages[i] && messages[i].stack) {
                _messages.push(messages[i].stack);
            } else if (messages[i] && typeof messages[i] === 'object') {
                _messages.push(JSON.stringify(messages[i]));
            } else {
                _messages.push(messages[i]);
            }
        }

        return _messages.join('        ');
    }
}

Logger.LOGGER_TYPE = config.log.type || 'file';
Logger.LOGGER_FILE_PATH = config.log.filePath || '/tmp';
Logger.LOGGER_APPENDER = config.log.appender || 'console';
Logger.LOGGER_LEVEL = config.log.level || 'info';
Logger.LOGGER_CONSOLE = config.log.console || false;

const logger = new Logger();

module.exports.logger = logger;