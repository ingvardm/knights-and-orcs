'use_strict';

var _canvas = require('../canvas');

class Shape {
    constructor(cfg){
        this.x = cfg.x || 0;
        this.y = cfg.y || 0;
        this.width = cfg.width || 1;
        this.height = cfg.height || 1;
        this.shape = cfg.shape || 'square';
        this.backGroundColor = cfg.backGroundColor || '#000000';
        this.backgroundImage = cfg.backgroundImage || null;
    }

    render(){
        _canvas.ctx.fillStyle = this.backGroundColor;
        _canvas.ctx.fillRect(this.x, this.y, this.width, this.height);
        if(this.backgroundImage) _canvas.ctx.drawImage(this.backgroundImage,this.x,this.y);
        let offset = {
            x: this.x,
            y: this.y
        }
        this.children && this.children.forEach((child) => child.render(offset));
    }
}

module.exports = Shape;