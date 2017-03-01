'use strict';

var video = require('./video/index');
var sound = require('./sound/index');
var input = require('./input/index');
var Store = require('./Store');
var resources = require('./resources/index');

var initializeSubsystems = (appWrapper, engineConfig) => {
    engineConfig.subsystems.forEach((s) => _E[s].init(appWrapper, engineConfig));
}

var _E = {
    video,
    sound,
    input,
    Store,
    resources,
    initializeSubsystems,
}

module.exports = _E;