'use strict';

var video = require('../video/index');
var scenes = require('../video/index').scenes;

var inputArea;

var mouse = {
    init: function(appWrapper, engineConfig){
        inputArea = video.canvas;
        attachEvents(engineConfig);
    }
}

var attachEvents = function(engineConfig){
    let settings = engineConfig.input.mouse;
    settings.handleClicks && inputArea.addEventListener('click', handleClick);
}

var handleClick = (e) => {
    let layers = scenes.getActiveScene().layers;

    for(let i = layers.length; i>0; i--){
        let shouldBreak = false;
        let layer = layers[i-1];
        for(let j = 0; j < layer.length; j++){
            let child = layer[j];
            if( child.handleClick
                && e.clientX > child.x
                && e.clientX < child.x + child.width
                && e.clientY > child.y
                && e.clientY < child.y + child.height
            ){
                child.handleClick();
                shouldBreak = true;
                break;
            }
        }
        if(shouldBreak) break;
    }
}
module.exports = mouse;