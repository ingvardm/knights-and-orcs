'use strict';

var _C = {
    init: (appWrapper, settings={}) => {
        const CANVAS_ELEMENT = document.createElement('CANVAS');
        appWrapper.appendChild(CANVAS_ELEMENT);
        _C.canvas = CANVAS_ELEMENT;
        _C.backgroundColor = settings.backgroundColor || '#ffffff';
        _C.canvas.width = settings.resolution.x || 640;
        _C.canvas.height = settings.resolution.y || 480;
        _C.ctx =  _C.canvas.getContext('2d');
    },

    clear: () => {
        _C.ctx.fillStyle = _C.backgroundColor;
        _C.ctx.fillRect(0, 0, _C.canvas.width, _C.canvas.height);
    }
}

module.exports = _C;