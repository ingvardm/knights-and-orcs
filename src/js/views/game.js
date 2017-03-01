'use strict';

var engine = require('../engine/engine');
var Button = require('../engine/video/elements/Button');
var Text = require('../engine/video/elements/Text');
var Shape = require('../engine/video/elements/Shape');
var resources = require('../engine/engine').resources;

var layers = () => {
    var title = new Text({
        x: 5,
        value: 'Game',
        fontFamily: 'Areal',
        fontSize: 30
    });

    var button = new Button({
        x: 5,
        y: 30,
        height: 50,
        width: 150,
        shape: 'square',
        backGroundColor: 'transparent',
        children:[
            new Text({
                value: 'go to home',
                fontFamily: 'Areal',
                fontSize: 30
            })
        ],
        onclick: function(){
            engine.video.scenes.setScene('home');
        }
    });

    var img = new Shape({
        x: 5,
        y: 90,
        height: 150,
        width: 150,
        backgroundImage: resources.images.background
    });

    return [[title,button,img]];
}

var game = {
    get content(){
        return layers();
    }
}

module.exports = game;