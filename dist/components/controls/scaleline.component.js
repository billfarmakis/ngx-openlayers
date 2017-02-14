"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var openlayers_1 = require("openlayers");
var map_component_1 = require("../map.component");
var ControlScaleLineComponent = (function (_super) {
    __extends(ControlScaleLineComponent, _super);
    function ControlScaleLineComponent(map) {
        var _this = 
        // console.log('instancing aol-control-scaleline');
        _super.call(this) || this;
        _this.map = map;
        return _this;
    }
    ControlScaleLineComponent.prototype.ngOnInit = function () {
        this.map.instance.addControl(this);
    };
    ControlScaleLineComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-scaleline');
        this.map.instance.removeControl(this);
    };
    return ControlScaleLineComponent;
}(openlayers_1.control.ScaleLine));
ControlScaleLineComponent = __decorate([
    core_1.Component({
        selector: 'aol-control-scaleline',
        template: "<ng-content></ng-content>"
    }),
    __metadata("design:paramtypes", [map_component_1.MapComponent])
], ControlScaleLineComponent);
exports.ControlScaleLineComponent = ControlScaleLineComponent;
//# sourceMappingURL=scaleline.component.js.map