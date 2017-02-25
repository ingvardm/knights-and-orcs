'use strict';

var video = require('./video/video');

var _E={
    init: function(appWrapper, settings){
        _E.video = video;
        video.init(appWrapper, settings.video);
        video.canvas.addEventListener('click', _E.handleClick);
    },

    handleClick: (e) => {
        let layers = video.scenes.getActiveScene().layers;

        for(let i = layers.length; i>0; i--){
            let shouldBreak = false;
            let layer = layers[i-1];
            for(let j = 0; j < layer.length; j++){
                let child = layer[j];
                if(e.clientX > child.x 
                    && e.clientX < child.x + child.width 
                    && e.clientY > child.y 
                    && e.clientY < child.y + child.height 
                    && child.handleClick){
                        child.handleClick();
                        shouldBreak = true;
                        break;
                }
            }
            if(shouldBreak) break;
        }
    }
}

module.exports = _E;