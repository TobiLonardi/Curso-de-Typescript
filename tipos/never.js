"use strict";
(function () {
    var error = function (message) {
        throw new Error(message);
    };
    var result = error('Error fatal');
    console.log(result);
})();
