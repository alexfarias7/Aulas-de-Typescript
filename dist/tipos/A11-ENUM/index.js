"use strict";
var Colors;
(function (Colors) {
    Colors[Colors["red"] = 0] = "red";
    Colors[Colors["blue"] = 1] = "blue";
    Colors[Colors["green"] = 2] = "green";
    Colors["yellow"] = "yellow";
    Colors[Colors["black"] = 1000] = "black";
})(Colors || (Colors = {}));
(function (Colors) {
    Colors["white"] = "white";
})(Colors || (Colors = {}));
console.log(Colors.green);
console.log(Colors[2]);
console.log(Colors.yellow);
console.log(Colors.black);
console.log(Colors);
function changeColor(color) {
    console.log(Colors[color]);
}
changeColor(Colors.yellow);
//# sourceMappingURL=index.js.map