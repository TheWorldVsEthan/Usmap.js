const { log, ensurePath } = require('./Utils');
const axios = require('axios');
const fs = require('fs');

module.exports = class UsmapDownloader {
    constructor() { };

    async grabUsmap() {
        const res = (await axios('https://benbotfn.tk/api/v1/mappings')).data;
        const mappingsURL = res[1].url; // Grab The Brotli Compressed Usmap

        const mappingsData = (await axios.get(mappingsURL)).data; // Download The Brotli Compressed Usmap
        const cutURL = mappingsURL.replace('https://benbotfn.tk/api/v1/mappings/', '');
        log('UsmapJS', 'Grabbed Usmap File: ' + cutURL, true);
        
        ensurePath(process.cwd() + '/mappings'); // Make Sure We Have Our Mappings Folder
        fs.writeFileSync('./mappings/mappings.usmap', mappingsData); // Write The Compressed Usmap To Our Mappings Folder
    };
};