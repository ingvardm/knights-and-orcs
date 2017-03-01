'use strict';

var Library = require('./Library');

var _libs = [];

var _handleLibReady = function(key){
    let idx = _libs.indexOf(key);
    idx > -1 && _libs.splice(idx, 1);
    !_libs.length && resources.onload && resources.onload();
}

var resources = {
    add: (key, type, res = {}) => {
        if(!resources[key]){
            resources[key] = new Library(type, res);
            _libs.push(key);
            resources[key].onready = () => _handleLibReady(key);
        }
    },
    
    remove: (key) => {
        delete resources[key];
    },

    load: () => {
        _libs.forEach((key) => resources[key].load());
    },

    onload: null,
}

module.exports = resources;