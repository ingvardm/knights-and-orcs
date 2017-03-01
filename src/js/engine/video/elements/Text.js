'use_strict';

var _canvas = require('../canvas');

class Text {
    constructor(cfg){
        this.x = cfg.x || 0;
        this.y = cfg.y || 0;
        this.fontSize = cfg.fontSize;
        this.fontFamily = cfg.fontFamily;
        this.color = cfg.color || '#000000';
        this.value = cfg.value || 'text';
    }

    render(offset={x:0,y:0}){
        _canvas.ctx.font = this.fontSize+'px '+this.fontFamily;
        _canvas.ctx.fillStyle = this.color;
        _canvas.ctx.fillText(this.value, offset.x + this.x, offset.y + this.y + this.fontSize);
    }
}

module.exports = Text;