'use strict';

const _defaultConfig = {

};

var _playingSounds = [];

var _backgroundSound = null;

var _playlist = [];

const sound = {
    init: (config = _defaultConfig) => {
        
    },

    play: (s, interupt = false) => {
        _playingSounds.push(s);
        s.onended = () => {
            let idx = _playingSounds.indexOf(s);
            _playingSounds.splice(idx ,1);
        }
        if(interupt && !s.paused) s.currentTime = 0;
        s.play();
    }
}

module.exports = sound;