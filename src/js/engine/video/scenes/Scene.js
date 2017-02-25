'use_strict';

var _canvas = require('../canvas');

class Scene {
    constructor(layers){
        this.layers = layers;
    }

    render(){
        _canvas.clear();
        this.layers.forEach((layer) => {
            layer.forEach((child) => child.render());
        });
    }
}

module.exports = Scene;