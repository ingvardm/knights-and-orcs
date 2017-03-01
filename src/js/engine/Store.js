'use strict';

class Store {
    constructor(state = {}){
        this.states = [state];
        this.onchangeCallbacs  =  [];
    }

    get state(){
        if(this.states.length){
            return this.states[this.states.length-1]
        } else {
            return null
        }
    }

    set state(state = {}){
        let statesCount = this.states.length;
        let previousState = this.states[statesCount-1];
        let newState = Object.assign({}, previousState, state);
        this.states.push(newState);
        this.runOnChangeCallbacks(newState, previousState);
    }

    popState(){
        if(!(this.states.length-1)) return;
        let statesCount = this.states.length;        
        let previousState = this.states[statesCount-1];
        let newState = this.states[statesCount-2];
        this.states.pop();
        this.runOnChangeCallbacks(newState, previousState);
    }

    runOnChangeCallbacks(newState, previousState){
        this.onchangeCallbacs.forEach((callback) => callback(newState, previousState));
    }

    onchange(callback){
        this.onchangeCallbacs.push(callback);
    }
}

module.exports = Store;