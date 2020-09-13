import { chromium, firefox, webkit } from 'playwright';


module.exports = {
    browserType: chromium,
    launchConfig: {
        headless: false,
        slowMo: 10
    },
    "type": "module",
    "transform": {
        "^.+\\.js$": "babel-jest"
    }
    
};
