'use strict';

var scenes = require('../engine/engine').video.scenes;
var resources = require('../engine/engine').resources;
var sound = require('../engine/engine').sound;
var Button = require('../engine/video/elements/Button');
var Text = require('../engine/video/elements/Text');
var Store = require('../engine/engine').Store;

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
    onclick: function(e){
        scenes.setScene('game');
    }
});

var counterText = new Text({
    x: 5,
    y: 80,
    value: '0',
    fontFamily: 'Areal',
    fontSize: 20,
    color: 'red'
});

var counterButton = new Button({
    x: 5,
    y: 110,
    height: 30,
    width: 150,
    shape: 'square',
    backGroundColor: 'green',
    children:[
        new Text({
            x: 10,
            value: 'click me',
            fontFamily: 'Areal',
            fontSize: 20,
            color: 'white'
        })
    ],
    onclick: function(){
        sound.play(resources.sounds.click, true);
        homeStore.state = {
            text:homeStore.state.text+1
        }
    }
});

var popStateButton = new Button({
    x: 5,
    y: 150,
    height: 30,
    width: 150,
    shape: 'square',
    backGroundColor: 'blue',
    children:[
        new Text({
            x: 10,
            value: 'pop state',
            fontFamily: 'Areal',
            fontSize: 20,
            color: 'white'
        })
    ],
    onclick: function(){
        sound.play(resources.sounds.click2);
        homeStore.popState();
    }
});

var homeStore = new Store({ text:0 });

homeStore.onchange(function(state){
    counterText.value = state.text;
})

var home = [
    [
        homeScreenText,
        homeScreenButton
    ],
    [
        counterText,
        counterButton,
        popStateButton
    ]
];

module.exports = home;