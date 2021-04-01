const brotli = require('brotli');
const { log } = require('./Utils');

const BinaryFile = require('binary-file');
const reader = new BinaryFile('./mappings/++Fortnite+Release-16.10-CL-15862581-Windows_br.usmap', 'r', littleEndian = true);

module.exports = class UsmapDecompression {
    constructor() { };

    async decompressUsmap() {
        let decompressedData;
        // const MAGIC = 0x30C4;

        try {
            await reader.open();
            
            const FileMagic = await (await reader.readInt16());

            const fileVersion = byteArrayToInt(reader);
            if (fileVersion != 0) return log('UsmapJS', '.usmap File Has Invalid Version: ' + fileVersion, false);

            const method = byteArrayToInt(reader);
            const compressSize = await (await reader.readInt32());
            const decompressSize = await (await reader.readInt32());

            log('UsmapJS', '.usmap Compression Size: ' + compressSize, false);
            log('UsmapJS', '.usmap Decompression Size: ' + decompressSize, false);

            // 0 -> "None"
            // 1 -> "Oodle"
            // 2 -> "Brotli"

            if (method == 0) {
                log('UsmapJS', 'Usmap Compression Type: None', true);
            }

            else if (method == 1) {
                return log('UsmapJS', 'Compression Type Not Supported Yet', true);
            }

            
            else if (method == 2) {
                return log('UsmapJS', 'Compression Type Not Supported Yet', true);
            }

            await reader.close();
        } catch(e) { console.log(e) };
    }
};

// https://stackoverflow.com/questions/62441655/how-do-i-convert-bytes-to-integers-in-javascript
const byteArrayToInt = function(byteArray) {
    var value = 0;
    for (var i = byteArray.length - 1; i >= 0; i--) value = (value * 256) + byteArray[i];
    return value;
};