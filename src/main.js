/**
 * Dragonfly
 * A flexible and light ui framework
 * (c) 2014 Sogou Inc. All rights reserved.
 * https://github.com/bizdevfe/Dragonfly
 */

define('main', ['require', './Button'], function (require) {
    
    var d = {};
    
    d.init = function() {
        console.log('d.init');
    };
    
    d.Button = require('Button');
    
    return d;
});