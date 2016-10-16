"use strict";

var argv = require('minimist')(process.argv.slice(2)),
    jsdom = require('jsdom'),
    paths = require('./lib/paths.js'),
    mapper = require('./lib/mapper.js'),
    state = require('./lib/state.js'),
    homepage = argv.url;

state.onComplete(() => {
    var map = JSON.stringify(mapper.getMap(), null, 4);
    console.log(map);

    process.exit(0);
});
paths.setHost(homepage);
mapper.getUrl(homepage);
