'use_strict';

var _canvas = require('../canvas');

class Text {
    constructor(cfg){
        this.x = cfg.x || 0;
        this.y = cfg.y || 0;
        this.fontSize = cfg.fontSize;
        this.fontFamily = cfg.fontFamily;
        this.color = cfg.color || '#000000';
        this.text = cfg.value || 'text';
    }

    render(offset={x:0,y:0}){
        _canvas.ctx.font = this.fontSize+'px '+this.fontFamily;
        _canvas.ctx.fillStyle = "red";
        _canvas.ctx.fillText(this.text, offset.x + this.x, offset.y + this.y + this.fontSize);
    }
}

module.exports = Text;