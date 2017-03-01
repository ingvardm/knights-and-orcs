'use_strict';

var Shape = require('./Shape');

class Button extends Shape{
    constructor(cfg){
        super(cfg);
        this.label = cfg.label;
        this.children = cfg.children;
        this.onclick = cfg.onclick;
    }

    handleClick(){
        this.onclick();
    }
}

module.exports = Button;