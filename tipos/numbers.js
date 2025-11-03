"use strict";
(function () {
    var avengers = 10;
    console.log({ avengers: avengers });
    var villains = 20;
    console.log({ villains: villains });
    if (avengers < villains) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
})();
