'use strict';

var _resourcesToLoad = [];

var _resourceLoaded = (key, ready) => {
    let idx = _resourcesToLoad.indexOf(key);
    idx > -1 && _resourcesToLoad.splice(idx, 1);
    !_resourcesToLoad.length && ready();
}

class Library {
    constructor(type, resources){
        this.type = type;
        this.resources = resources;
        this.onready = null;
    }

    load(){
        for (let key in this.resources) {
            if(this.type === 'audio'){
                this[key] = new Audio();
                this[key].oncanplay = () => _resourceLoaded(key, this.onready);
            } else if(this.type === 'image'){
                this[key] = new Image();
                this[key].onload = () => _resourceLoaded(key, this.onready);
            }
            this[key].src = this.resources[key];
        }
    }
}

module.exports = Library;