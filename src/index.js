const UsmapDownloader = require('./lib/UsmapDownloader');
const mappingsGrabber = new UsmapDownloader();

const UsmapDecompression = require('./lib/UsmapDecompression');
const decompressor = new UsmapDecompression();

module.exports = class UsmapJS {
    constructor() { };

    async start() {
        // await mappingsGrabber.grabUsmap();
        await decompressor.decompressUsmap();
    };
};