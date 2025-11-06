"use strict";
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName || 'No last name');
    };
    var name = fullName('Tony');
    console.log(name);
})();
