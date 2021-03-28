const UsmapDownloader = require('./lib/UsmapDownloader');
const mappingsGrabber = new UsmapDownloader();

const BrotliDecompression = require('./lib/BrotliDecompression');
const decompressor = new BrotliDecompression();

module.exports = class UsmapJS {
    constructor() { };

    async start() {
        await mappingsGrabber.grabUsmap();
        await decompressor.decompressUsmap();
    };
};