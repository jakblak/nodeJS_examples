"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var io = require('socket.io-client');
var HomeComponent = (function () {
    function HomeComponent() {
        this.socket = io.connect('http://localhost:8000');
        // this.socket = io.connect();
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket.emit('event1', {
            msg: 'Client to server, can you hear me server?'
        });
        this.socket.on('event2', function (data) {
            console.log(data.msg);
            _this.socket.emit('event3', {
                msg: 'Yes, its working for me!!'
            });
        });
        this.socket.on('event4', function (data) {
            console.log(data.msg);
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ch-home',
            styleUrls: ['home.styles.css'],
            templateUrl: 'home.template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map