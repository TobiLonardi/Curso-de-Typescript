"use strict";
(function () {
    // tipos/void.ts
    function callBatman() {
        console.log('Batiseñal activada');
        return;
    }
    var a = callBatman();
    console.log(a);
    var callSuperman = function () {
        console.log('Superman al rescate');
        return;
    };
})();
