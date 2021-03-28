const UsmapJS = require('./src/index');
const main = new UsmapJS();

(async() => {
    await main.start();
})();