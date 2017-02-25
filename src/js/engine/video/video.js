'use strict';

var _canvas = require('./canvas');
var scenes = require('./scenes/scenesManager');

var video = {
    init: function(appWrapper, vidoSettings){
        _canvas.init(appWrapper, vidoSettings);
        video.scenes = scenes;
        video.canvas = _canvas.canvas;
    }
}

module.exports = video;