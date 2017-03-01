'use strict';

var mouse = require('./mouse');

var init = (appWrapper, engineConfig) => {
    Object.keys(engineConfig.input).forEach((s) => input[s].init(appWrapper, engineConfig));
}

var input = {
    mouse,
    init
}

module.exports = input;