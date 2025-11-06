"use strict";
(function () {
    var fullName = function (firstName, lastName, uper) {
        if (uper === void 0) { uper = false; }
        return "".concat(firstName, " ").concat(lastName || 'No last name');
        if (uper) {
            return "".concat(firstName, " ").concat(lastName || 'No last name').toUpperCase();
        }
        else {
            return "".concat(firstName, " ").concat(lastName || 'No last name');
        }
    };
    var name = fullName('Tony', "Stark", true);
    console.log(name);
})();
