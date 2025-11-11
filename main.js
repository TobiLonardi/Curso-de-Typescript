"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: "Samuel L Jackson",
        ironman: "Robert Downey Jr",
        vision: "Paul Bettany",
        activos: true,
        poder: 1500
    };
    const printAvenger = (_a) => {
        var { ironman } = _a, resto = __rest(_a, ["ironman"]);
        console.log(ironman, resto);
    };
    const avengersArr = ['Cap. America', true, 150.15];
    const [capitan, ironman,] = avengersArr;
    console.log(ironman, capitan);
})();
(() => {
    const ironman = {
        name: "ironman",
        weapon: "armor suit"
    };
    const capitanAmerica = {
        name: "capitanAmerica",
        weapon: "shield"
    };
    const thor = {
        name: "thor",
        weapon: "hammer"
    };
    const avengersArr = [ironman, capitanAmerica, thor];
    for (const avenger of avengersArr) {
        console.log(avenger);
    }
})();
(() => {
    console.log("let");
});
//# sourceMappingURL=main.js.map