"use strict";
(function () {
    // tipos/arrays.ts
    var numbers = [1, 2, 3, 4, 5, false];
    numbers.push(true);
    var villians = ['Omega Rojo', 'Dormammu', 'Duende Verde'];
    villians.forEach(function (v) { return console.log(v.toUpperCase()); });
})();
