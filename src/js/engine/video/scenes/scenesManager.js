'use strict';

var _canvas = require('../canvas');
var Scene = require('./Scene');

var _scenes = {};
var _curentScene;

var scenesManager = {
    addScene: (id, children) => {
        _scenes[id] = new Scene(children);
    },

    setScene: (id) => {
         _curentScene = id;
    },

    getActiveScene: () => {
        return _scenes[_curentScene];
    },

    start: function(){
        render();
    }
}

var render = function(){
    _scenes[_curentScene].render();
    requestAnimationFrame(render);
}

module.exports = scenesManager;