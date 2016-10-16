"use strict";

var jsdom = require('jsdom'),
    paths = require('./paths.js'),
    state = require('./state.js'),
    map = {},
    processed = [];

exports.getResources = function(str) {
    return new Promise((resolve, reject) => {
        jsdom.env(str, (err, window) => {
            var doc,
                links,
                assets;

            // Reject the promise on error.
            if (err) {
                reject(err);
                return;
            }

            doc = window.document;

            links = doc.querySelectorAll('a[href]');
            // Assets includes images, stylesheets and scripts.
            assets = doc.querySelectorAll('[src],link[rel=stylesheet][href]');

            // Cast to array and convert elements to URL strings.
            links = [...links].map(elm => elm.href);

            // Cast to array and convert elements to URL strings.
            assets = [...assets].map(elm => elm.src || elm.href);

            resolve({
                links: links,
                assets: assets
            });

            window.close();
        });
    });
}

exports.getUrl = function(url) {
    var promise;
    url = paths.normaliseUrl(url);

    if (paths.isInternal(url) && !processed.includes(url)) {
        processed.push(url);
        var promise = this.getResources(url).then((obj) => {
            this.addToMap(url, obj);
            obj.links.forEach(this.getUrl, this);
        });

        state.in(promise);
    }
};

exports.addToMap = function(url, obj) {
    map[url] = obj;
};

exports.getMap = function() {
    return map;
};
