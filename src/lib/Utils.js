const moment = require('moment');
const chalk = require('chalk');
const fs = require('fs');

module.exports = class Utils {
    static log(title, message, line, debug) {
        let time = '[' + moment().format('hh:mm:ss.SSS') + ']';
        title = chalk.hex(textToHex(title.split(' ').join('_')))(' ['+ title + '] ');

        let msg = time + title + message;
        let out = line ? `\n${msg}\n` : msg;
        console.log(out);
    };
    
    static ensurePath(path) {
        !fs.existsSync(path) && fs.mkdirSync(path);
    };

    static textToHex(text) {
        return textToHex(text);
    };
};

function textToHex(str) {
    let hash = 0;
    for (var i = 0; i < str.length; i++) hash = str.charCodeAt(i) + ((hash << 5) - hash);
    
    let hex = (hash & 0x00FFFFFF).toString(16).toUpperCase();
    return '00000'.substring(0, 6 - hex.length) + hex;
};