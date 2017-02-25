'use strict';

const CARDS = require('cards');
const DOM = require('dom');
var templates = require('./templates');

class Card {
    constructor(id){
        this.card = CARDS.id;
        this.template = DOM.fromTemplate('#card');
    }

    render(){

    }
}

module.export = Card;