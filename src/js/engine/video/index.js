'use strict';

var _canvas = require('./canvas');
var scenes = require('./scenes/scenesManager');

var video = {
    init: function(appWrapper, engineConfig){
        _canvas.init(appWrapper, engineConfig.video);
        video.canvas = _canvas.canvas;
    },
    scenes
}

module.exports = video;