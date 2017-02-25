'use strict';

var engine = require('../engine/engine');
var Button = require('../engine/video/elements/Button');
var Text = require('../engine/video/elements/Text');

var homeScreenText = new Text({
    x: 5,
    value: 'Home-menu',
    fontFamily: 'Areal',
    fontSize: 30
});

var homeScreenButton = new Button({
    x: 5,
    y: 30,
    height: 50,
    width: 150,
    shape: 'square',
    backGroundColor: 'transparent',
    children:[
        new Text({
            value: 'go to game',
            fontFamily: 'Areal',
            fontSize: 30
        })
    ],
    onclick: function(){
        engine.video.scenes.setScene('game');
    }
});

var home = [
    [
        homeScreenText,
        homeScreenButton
    ]
];

module.exports = home;