var util = require('util');

var obj = {
    a: 5,
    b: 6,
    inspect: function() {
        return 5 * 6;
    }
}

console.log( util.inspect(obj) );