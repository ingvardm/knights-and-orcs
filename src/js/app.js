'use strict';

var engine = require('./engine/engine');
var Button = require('./engine/video/elements/Button');
var Text = require('./engine/video/elements/Text');
var views = require('./views/index');

var config = {
    resolution:{
        x:600,
        y:400
    }
};

var engineConfig = {
    video: {
        resolution: config.resolution
    }
};

var appContainer = document.querySelector('#app');

const APP = {
    init: function () {
        engine.init(appContainer, engineConfig);
        engine.video.scenes.addScene('home', views.home);
        engine.video.scenes.addScene('game', views.game);
        engine.video.scenes.setScene('home');
        engine.video.scenes.start();
    },
}

module.exports = APP;
