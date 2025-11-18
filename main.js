"use strict";
var Validations;
(function (Validations) {
    Validations.ValidateText = (text) => {
        return (text.length > 3) ? true : false;
    };
    const ValidateDate = (date) => {
        return (isNaN(date.valueOf())) ? false : true;
    };
})(Validations || (Validations = {}));
console.log(Validations.ValidateText("Hola"));
//# sourceMappingURL=main.js.map