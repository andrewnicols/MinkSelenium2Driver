(function() {
    var syn = {};

    syn.click = function(options, element, callback) {
        return window.syn.click.call(this, element, options, callback);
    };

    syn.dblclick = function(options, element, callback) {
        return window.syn.dblclick.call(this, element, options, callback);
    };

    syn.drag = function(options, from, callback) {
        return window.syn.drag.call(this, from, options, callback);
    };

    syn.move = function(options, from, callback) {
        return window.syn.move.call(this, from, options, callback);
    };

    syn.type = function(options, element, callback) {
        return window.syn.type.call(this, element, options, callback);
    };

    syn.key = function(options, element, callback) {
        return window.syn.key.call(this, element, options, callback);
    };

    syn.trigger = function(element, type, options) {
        return window.syn.trigger.call(this, type, options, element);
    };

    window.Syn = syn;
})();
