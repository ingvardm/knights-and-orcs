'use strict';

var engine = require('./engine/engine');
var views = require('./views/index');
const config = require('./config');

var appContainer = document.querySelector('#app');

const APP = {
    init: function () {
        engine.initializeSubsystems(appContainer, config.engineConfig);
        engine.video.scenes.addScene('loader', views.loader);
        engine.video.scenes.setScene('loader');
        engine.video.scenes.start();

        engine.resources.add('sounds', 'audio', {
            click:'/res/sounds/click.mp3',
            click2:'/res/sounds/click2.mp3'
        });
        engine.resources.add('images', 'image', {
            background:'/res/img/bg.png'
        });
        engine.resources.onload = function(){
            engine.video.scenes.addScene('home', views.home);
            engine.video.scenes.addScene('game', views.game.content);
            engine.video.scenes.setScene('home');
        }
        engine.resources.load();
    },
}

module.exports = APP;
