"use strict";

var count = 0,
    done;

exports.in = function(promise) {
    count++;

    promise.then(this.out);
    promise.catch((e) => {
        console.log(e.message);
        // Exit with an error return code.
        process.exit(1);
    });
};

exports.out = function() {
    count--;

    if (count <= 0 && typeof done === 'function') {
        done();
    }
}

exports.onComplete = function(callback) {
    done = callback;
}
