const brotli = require('brotli');
const fs = require('fs');

module.exports = class BrotliDecompression {
    constructor() { };

    async decompressUsmap() {
        // Usmap magic is 0x30C4
        
        const output = fs.readFileSync('./mappings/mappings.usmap');
        console.log(output.toJSON());
    }
};