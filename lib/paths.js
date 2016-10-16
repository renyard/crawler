"use strict";

var url = require('url'),
    host;

exports.parse = function(str) {
    if (typeof str === 'object') {
        return object;
    }
    else if (typeof str === 'string') {
        return url.parse(str);
    }
    else {
        // Handle error.
    }
};

exports.setHost = function(obj) {
    host = this.parse(obj).host;
};

exports.getHost = function() {
    return host;
};

exports.isInternal = function(obj) {
    obj = this.parse(obj);

    if (obj.host === undefined) {
        return true;
    }

    return (obj.host === host);
};

exports.normaliseUrl = function(addr) {
    var obj = url.parse(addr);

    // Remove hash to avoid counting anchor links separately.
    obj.hash = '';

    return url.format(obj);
};
