var OptionalChainingNamespace;
(function (OptionalChainingNamespace) {
    var _a;
    var Automobile = /** @class */ (function () {
        function Automobile(wheels) {
            this.wheels = wheels;
        }
        return Automobile;
    }());
    var car = new Automobile();
    console.log("car ", car);
    console.log("wheels ", car === null || car === void 0 ? void 0 : car.wheels);
    console.log("count ", (_a = car === null || car === void 0 ? void 0 : car.wheels) === null || _a === void 0 ? void 0 : _a.count);
})(OptionalChainingNamespace || (OptionalChainingNamespace = {}));
