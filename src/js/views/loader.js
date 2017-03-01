'use strict';

var Text = require('../engine/video/elements/Text');

var title = new Text({
    x: 5,
    value: 'Loading...',
    fontFamily: 'Areal',
    fontSize: 30
});

var loader = [
    [
        title
    ]
];

module.exports = loader;