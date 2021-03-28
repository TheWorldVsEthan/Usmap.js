const mappings = require('./lib/UsmapDownloader');
const mappingsGrabber = new mappings();

module.exports = class UsmapJS {
    constructor() { };

    async start() {
        await mappingsGrabber.grabUsmap();
    };
};