webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/a/a.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-fill-remaining-space {\r\n\r\n  -webkit-box-flex: 1;\r\n\r\n      -ms-flex: 1 1 ;\r\n\r\n          flex: 1 1 ;\r\n}\r\nform\r\n{\r\n     margin-top: 5px;\r\n}\r\n .cart-form {\r\n\r\n    width: 30%;\r\n    min-width: 178px;\r\n    position: relative;\r\n    left: 30%;\r\n    top: 90px;\r\n    padding: 40px 1px;\r\n}\r\n .example-form {\r\n\r\n    width: 91%;\r\n    min-width: 178px;\r\n    margin-left: 6px;\r\n    top: 91px;\r\n    padding: 16px 26px;\r\n\r\n}\r\n  #action\r\n  {\r\n    padding: 30px;\r\n  }\r\n .example-form md-form-field, .example-form md-select\r\n{\r\n  width: 98%;\r\n    padding: 2px;\r\n}\r\n   .example-form md-select md-option \r\n   {\r\n      width:113%;\r\n      text-align: center;\r\n   }\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/a/a.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/style/picker.min.css\" />  -->\n<md-toolbar color=\"primary\">\n\n     <span>Parking App</span>\n     <div class=\"button-row\" fxLayout=\"row\" fxShow=\"false\" fxShow.gt-sm >\n      <button md-button >View Users</button>\n      <button md-button >View Bookings</button>\n      <button md-button >View FeedBack</button>\n      <button md-button >View Areas</button>\n      <button md-button >Insert Areas</button>\n    </div>\n\n    <button md-button [md-menu-trigger-for]=\"NavMenu\" fxHide=\"false\" fxHide.gt-sm>\n     <md-icon>menu</md-icon>\n    </button>\n    <md-menu x-position=\"before\" #NavMenu=\"mdMenu\" >\n      <button md-button >View Users</button>\n      <button md-button >View Bookings</button>\n      <button md-button >View FeedBack</button>\n      <button md-button >View Areas</button>\n      <button md-button >Insert Areas</button>\n    </md-menu>\n\n\n     <span class=\"example-fill-remaining-space\"></span>\n\n     <div fxLayout=\"row\" fxShow=\"false\" fxShow.gt-sm>\n         <span>User Name</span>\n     <button md-button [md-menu-trigger-for]=\"menu\">         \n        <md-icon>more_vert</md-icon>\n     </button>\n        \n     </div>\n\n     <button md-button [md-menu-trigger-for]=\"menu\"  fxHide=\"false\" fxHide.gt-sm>\n            <span>User Name</span>\n     </button>\n       <md-menu #menu=\"mdMenu\" x-position=\"before\" >\n            <button md-menu-item (click)=\"setDisplayProfile()\">\n              <md-icon>fingerprint</md-icon>\n              <span>Edit Profile</span>\n            </button>\n            <button md-menu-item  (click)=\"logout()\">\n              <md-icon>sentiment_very_satisfied</md-icon>\n              <span>Disable alerts</span>\n            </button>\n       </md-menu>    \n</md-toolbar> \n\n<owl-date-time [(ngModel)]=\"moment\" ></owl-date-time>\n<div class=\"input-control\">\n                    <label for=\"input1\">Timer Only:</label>\n                    <owl-date-time [(ngModel)]=\"input1Moment\" [type]=\"'timer'\"\n                                   [dateFormat]=\"'hh:mm'\"\n                                   [placeHolder]=\"'hh:mm'\" [inputId]=\"'input1'\"></owl-date-time>\n                </div>\n <div class=\"input-control\">\n                    <label for=\"input4\">Min-Max</label>\n                    <owl-date-time [(ngModel)]=\"input4Moment\" [type]=\"'calendar'\"\n                                   [dateFormat]=\"'YYYY-MM-DD'\" [min]=\"min\" [max]=\"max\"\n                                   [placeHolder]=\"'yyyy/mm/dd'\" [inputId]=\"'input4'\"></owl-date-time>\n                </div>\n                                   <button md-raised-button style=\"float:left;\" color=\"primary\" (click)=\"getB()\">LOG IN</button>\n<!--             \n<md-card class=\"cart-form\">\n  <md-card-title style=\"border-left:6px solid red;padding-left: 23px;color: red;\">\n        \n   LOGIN\n    </md-card-title>\n  <md-card-content>\n    <form class=\"example-form\">\n    <md-form-field class=\"example-half-width\"  color=\"accent\">\n      <input mdInput placeholder=\"USER NAME\" name=\"userName\">\n      <br>\n    </md-form-field>\n    <md-form-field class=\"example-half-width\"  color=\"accent\">\n      <input mdInput placeholder=\"EMAIL\" name=\"email\">\n      <br>\n    </md-form-field>\n    <md-form-field class=\"example-half-width\"  color=\"accent\">\n      <input mdInput placeholder=\"PASSWORD\" name=\"password\" type=\"password\">\n      <br>\n    </md-form-field>\n      <md-select placeholder=\"Favorite food\"  color=\"accent\">\n        <md-option *ngFor=\"let food of tiles\" [value]=\"food.text\">\n          {{ food.text }}\n        </md-option>\n      </md-select>\n      <md-grid-list cols=\"2\" rowHeight=\"2:1\" id=\"action\">\n       <md-grid-tile> <button md-raised-button style=\"float:left;\" color=\"primary\">LOG IN</button></md-grid-tile>\n       <md-grid-tile> <button md-raised-button style=\"float:right;\" color=\"accent\">SIGN UP</button></md-grid-tile>\n      </md-grid-list>\n\n    </form>\n    </md-card-content>\n</md-card> -->\n\n\n  \n\n\n"

/***/ }),

/***/ "../../../../../src/app/a/a.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__date_service__ = __webpack_require__("../../../../../src/app/date.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AComponent = (function () {
    function AComponent(DateService) {
        this.DateService = DateService;
        ////////////////////////Date Time////////////////////////////////////////
        this.moment = new Date();
        this.pickerColor = '#0070ba';
        this.min = new Date(2017, 7, 9);
        this.max = new Date(2017, 8, 10);
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
    }
    /////////////////////////////////////////////////////////////////////////
    AComponent.prototype.getB = function () {
        console.log(this.DateService.parseDate(this.input4Moment));
        console.log(this.DateService.parseTime(this.input1Moment));
    };
    AComponent.prototype.ngOnInit = function () {
    };
    return AComponent;
}());
AComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-a',
        template: __webpack_require__("../../../../../src/app/a/a.component.html"),
        styles: [__webpack_require__("../../../../../src/app/a/a.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__date_service__["a" /* DateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__date_service__["a" /* DateService */]) === "function" && _a || Object])
], AComponent);

var _a;
//# sourceMappingURL=a.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-fill-remaining-space {\r\n\r\n  -webkit-box-flex: 1;\r\n\r\n      -ms-flex: 1 1 ;\r\n\r\n          flex: 1 1 ;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "\n<md-toolbar color=\"primary\">\n\n     <span>Parking App</span>\n     <div class=\"button-row\" fxLayout=\"row\" fxShow=\"false\" fxShow.gt-sm >\n        <button md-button [routerLink]=\"['/admin', {outlets: {'adminOutlet': ['viewusers']}}]\">View Users <span class=\"sr-only\">(current)</span></button>\n        <button md-button [routerLink]=\"['/admin', {outlets: {'adminOutlet': ['viewbooking']}}]\">View Bookings</button>\n        <button md-button [routerLink]=\"['/admin', {outlets: {'adminOutlet': ['viewfeedback']}}]\">View FeedBack</button>\n        <button md-button [routerLink]=\"['/admin', {outlets: {'adminOutlet': ['ground']}}]\">View Areas</button>\n        <button md-button [routerLink]=\"['/admin', {outlets: {'adminOutlet': ['createslots']}}]\">Insert Areas</button>\n    </div>\n\n    <button md-button [md-menu-trigger-for]=\"NavMenu\" fxHide=\"false\" fxHide.gt-sm>\n     <md-icon>menu</md-icon>\n    </button>\n    <md-menu x-position=\"before\" #NavMenu=\"mdMenu\" >\n      <button md-button [routerLink]=\"['/admin', {outlets: {'adminOutlet': ['viewusers']}}]\">View Users <span class=\"sr-only\">(current)</span></button>\n        <button md-button [routerLink]=\"['/admin', {outlets: {'adminOutlet': ['viewbooking']}}]\">View Bookings</button>\n        <button md-button [routerLink]=\"['/admin', {outlets: {'adminOutlet': ['viewfeedback']}}]\">View FeedBack</button>\n        <button md-button [routerLink]=\"['/admin', {outlets: {'adminOutlet': ['ground']}}]\">View Areas</button>\n        <button md-button [routerLink]=\"['/admin', {outlets: {'adminOutlet': ['createslots']}}]\">Insert Areas</button>\n    </md-menu>\n\n\n     <span class=\"example-fill-remaining-space\"></span>\n\n     <div fxLayout=\"row\" fxShow=\"false\" fxShow.gt-sm>\n         <span>{{authService.userName}}</span>\n     <button md-button [md-menu-trigger-for]=\"menu\">         \n        <md-icon>more_vert</md-icon>\n     </button>\n        \n     </div>\n\n     <button md-button [md-menu-trigger-for]=\"menu\"  fxHide=\"false\" fxHide.gt-sm>\n                        <span>{{authService.userName}}</span><md-icon>more_vert</md-icon>\n\n     </button>\n       <md-menu #menu=\"mdMenu\" x-position=\"before\" >\n            <!-- <button md-menu-item (click)=\"setDisplayProfile()\">\n              <md-icon>fingerprint</md-icon>\n              <span>Edit Profile</span>\n            </button> -->\n            <button md-menu-item  (click)=\"logout()\">\n              <md-icon>power_settings_new</md-icon>\n              <span>Log Out</span>\n            </button>\n       </md-menu>    \n</md-toolbar> \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- Profile Form  -->\n<div class=\"AdminDetail\" *ngIf=\"displayForm_Profile\">\n  <form class=\"form-horizontal col-xs-12 col-md-6 col-md-offset-2\" #f=\"ngForm\" (ngSubmit)=\"onSubmitProfile(f.value)\" >\n  <fieldset >\n    <legend class=\"text-center\">PROFILE</legend>\n    <div class=\"form-group\">\n      <label for=\"inputName\" class=\"col-xs-3 control-label\">Name</label>\n      <div  class=\"col-xs-9\">\n        <input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Full Name Here\" [ngModel]=\"details.name\" required>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"inputFName\" class=\"col-xs-3 control-label\">Address</label>\n      <div class=\"col-xs-9\">\n        <input type=\"text\" class=\"form-control\" name=\"address\" placeholder=\"Address Here\" [ngModel]=\"details.address\">\n      </div>\n    </div>\n      <div class=\"form-group\">\n      <label for=\"inputnum\" class=\"col-xs-3 control-label\">Cell #</label>\n      <div class=\"col-xs-9\">\n        <input type=\"number\" class=\"form-control\" name=\"cellNum\" placeholder=\"Phone Number\" [ngModel]=\"details.cellNum\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"col-xs-10 col-md-9 col-md-offset-3\">\n        <button type=\"reset\" class=\"btn btn-warning\">Cancel</button>\n        <button type=\"submit\" class=\"btn btn-primary pull-right\">Update!</button>\n      </div>\n    </div>\n  </fieldset>\n</form>\n\n</div>\n<!-- Profile Form  -->\n\n\n\n\n\n<!-- Alert MSG  -->\n<div  *ngIf=\"isformSubmitted\">\n  <div  *ngIf=\"isCorrect;then success;else danger;\" style=\"bottom:0px;position: absolute;width: 100%;\">\n  </div>\n</div>\n<ng-template #success>\n  <div class=\"alert alert-dismissible alert-success text-center msgShow\" style=\"bottom:0px;position: absolute;width: 100%;\" >\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"changeFlag()\">&times;</button>\n  <strong> Updated successfully!</strong>\n  </div>\n</ng-template>\n<ng-template #danger>\n  <div class=\"alert alert-dismissible alert-danger text-center msgShow\" style=\"bottom:0px;position: absolute;width: 100%;\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"changeFlag()\">&times;</button>\n  <strong> Update Failure!</strong>\n  </div>\n</ng-template>\n<!-- Alert MSG  -->\n<router-outlet name=\"adminOutlet\"></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminComponent = (function () {
    function AdminComponent(router, authService, af) {
        this.router = router;
        this.authService = authService;
        this.af = af;
        this.displayForm_Profile = false;
        this.displayForm_Slots = false;
        this.isCorrect = false;
        this.isformSubmitted = false;
        this.details = { uid: "", name: "", address: "", cellNum: "", key: "" };
    }
    AdminComponent.prototype.setDisplayAreas = function () {
        this.displayForm_Profile = false;
        this.displayForm_Slots = true;
    };
    AdminComponent.prototype.setDisplayProfile = function () {
        this.displayForm_Slots = false;
        this.displayForm_Profile = false;
    };
    AdminComponent.prototype.onSubmitAreas = function (data) {
        var _this = this;
        var arr = [];
        for (var i = 0; i < data.totalSlots; i++)
            arr[i] = { blah: '' };
        this.af.list('/slots/').push({ areaName: data.areaName, totalSlot: data.totalSlots, slotsArr: arr, key: "" }).then(function (success) {
            _this.isCorrect = true;
            _this.af.list('/slots', { preserveSnapshot: true }).subscribe(function (snapshots) {
                _this.af.object('/slots/' + snapshots[snapshots.length - 1].key)
                    .update({ key: snapshots[snapshots.length - 1].key });
                _this.displayForm_Slots = false;
                _this.isformSubmitted = true;
            });
        }, function (error) {
            _this.isCorrect = false;
            _this.isformSubmitted = true;
        });
    };
    AdminComponent.prototype.onSubmitProfile = function (data) {
        var _this = this;
        this.af.object('/usersDetails/' + this.details.key)
            .update({ name: data.name, cellNum: data.cellNum, key: this.details.key }).then(function (success) {
            _this.isCorrect = true;
            _this.isformSubmitted = true;
        }, function (error) {
            _this.isCorrect = false;
            _this.isformSubmitted = true;
        });
    };
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.userName == "") {
            this.af.list('/users', { preserveSnapshot: true }).subscribe(function (snapshots) {
                snapshots.forEach(function (snapshot) {
                    if (snapshot.val().uid == _this.authService.uid) {
                        _this.authService.userName = snapshot.val().userName;
                    }
                });
            });
        }
        this.af.list('/usersDetails', { preserveSnapshot: true }).subscribe(function (snapshots) {
            snapshots.forEach(function (snapshot) {
                if (snapshot.val().uid == _this.authService.uid) {
                    _this.details = snapshot.val();
                    _this.details.key = snapshot.key;
                    _this.authService.key = snapshot.key;
                }
            });
        });
    };
    AdminComponent.prototype.changeFlag = function () {
        this.isformSubmitted = !this.isformSubmitted;
    };
    AdminComponent.prototype.logout = function () {
        var _this = this;
        this.authService.logout().then(function (success) { return _this.router.navigate(['/login']); });
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__("../../../../../src/app/admin/admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object])
], AdminComponent);

var _a, _b, _c;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/create-slots/create-slots.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " .cart-form {\r\n\r\n    width: 30%;\r\n    min-width: 178px;\r\n    position: absolute;\r\n    left: 30%;\r\n    top: 90px;\r\n    padding: 40px 1px;\r\n}\r\nmd-input-container {\r\n\r\n        width: 90%;\r\n    padding: 0px 5px 0px 15px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/create-slots/create-slots.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- SLOTS  Form  -->\n<md-card class=\"cart-form\">\n  <md-card-header style=\"border-left:6px solid red;padding-left: 23px;color: red;\">\n    <md-card-title style=\"text-align:center;\">SLOTS</md-card-title>\n  </md-card-header>\n \n  <md-card-content>\n     <form class=\"example-form\"  #f=\"ngForm\" (ngSubmit)=\"onSubmitAreas(f.value)\">\n\n    <md-input-container class=\"example-half-width\"  color=\"accent\">\n       <input mdInput placeholder=\"EMAIL\" name=\"areaName\" placeholder=\"Area Name Here\" required ngModel>\n      <br>\n    </md-input-container>\n    <md-input-container class=\"example-half-width\"  color=\"accent\">\n       <input mdInput type=\"number\"  name=\"totalSlots\" placeholder=\"total Slots here\" ngModel>\n      <br>\n    </md-input-container>\n\n      <md-grid-list cols=\"2\" rowHeight=\"2:1\" id=\"action\">\n       <md-grid-tile colspan=\"1\"> <button md-raised-button style=\"float:left; width:100%;\" color=\"warn\" type=\"reset\">Cancel</button></md-grid-tile>\n       <md-grid-tile colspan=\"1\"> <button md-raised-button style=\"float:left; width:100%;\" type=\"submit\" color=\"primary\" >Update!</button></md-grid-tile>\n      </md-grid-list>\n\n    </form>\n  </md-card-content>\n\n</md-card>\n\n\n<!-- SLOTS Form  --><!-- Alert MSG  -->\n<div  *ngIf=\"isformSubmitted\">\n  <div  *ngIf=\"isCorrect;then success;else danger;\" style=\"bottom:0px;position: absolute;width: 100%;\">\n  </div>\n</div>\n<ng-template #success>\n  <div class=\"alert alert-dismissible alert-success text-center msgShow\" style=\"bottom:0px;position: absolute;width: 100%;\" >\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"changeFlag()\">&times;</button>\n  <strong> Updated successfully!</strong>\n  </div>\n</ng-template>\n<ng-template #danger>\n  <div class=\"alert alert-dismissible alert-danger text-center msgShow\" style=\"bottom:0px;position: absolute;width: 100%;\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"changeFlag()\">&times;</button>\n  <strong> Update Failure!</strong>\n  </div>\n</ng-template>\n<!-- Alert MSG  -->"

/***/ }),

/***/ "../../../../../src/app/admin/create-slots/create-slots.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateSlotsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateSlotsComponent = (function () {
    function CreateSlotsComponent(authService, af) {
        this.authService = authService;
        this.af = af;
        this.isCorrect = false;
        this.isformSubmitted = false;
    }
    CreateSlotsComponent.prototype.ngOnInit = function () {
    };
    CreateSlotsComponent.prototype.onSubmitAreas = function (data) {
        var _this = this;
        var arr = [];
        for (var i = 0; i < data.totalSlots; i++)
            arr[i] = { blah: '' };
        this.af.list('/slots/').push({ areaName: data.areaName, totalSlot: data.totalSlots, slotsArr: arr, key: "" }).then(function (success) {
            _this.isCorrect = true;
            _this.af.list('/slots', { preserveSnapshot: true }).subscribe(function (snapshots) {
                _this.af.object('/slots/' + snapshots[snapshots.length - 1].key)
                    .update({ key: snapshots[snapshots.length - 1].key });
                _this.isformSubmitted = true;
            });
        }, function (error) {
            _this.isCorrect = false;
            _this.isformSubmitted = true;
        });
    };
    return CreateSlotsComponent;
}());
CreateSlotsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create-slots',
        template: __webpack_require__("../../../../../src/app/admin/create-slots/create-slots.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/create-slots/create-slots.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object])
], CreateSlotsComponent);

var _a, _b;
//# sourceMappingURL=create-slots.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/view-all-feedbacks/view-all-feedbacks.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".msgShow{\r\n    position: fixed;\r\n    margin-top: 5px;\r\n    bottom: 0px;\r\n    width: 100%;\r\n}\r\n#logoutBtn\r\n{\r\n    color:red;\r\n}\r\n#editPbtn:hover\r\n{\r\n    cursor: pointer;\r\n}\r\n.footer\r\n{\r\n    margin-top:34px; \r\n}\r\n.footerbtn\r\n{\r\n    font-weight: bolder;       \r\n    float:right;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n.date\r\n{\r\n    font-weight: bolder;       \r\n    float:left;\r\n    clear:both;\r\n    color: #ADAD0C;\r\n}\r\n.companyName\r\n{\r\n    text-align:center;\r\n    font-size: 15px;\r\n        padding-left: 27%;\r\n}\r\n#container\r\n{\r\n    background-color: honeydew;\r\n    padding: 20px 29px 14px 59px;\r\n     border:1px ridge #dfdfdf;\r\n    margin-top: 8px;\r\n     box-shadow: -1px 4px 5px 0 rgba(0, 0, 0, 0.2), 3px 6px 5px 0 rgba(0, 0, 0, 0.19); \r\n}\r\nmd-card\r\n{\r\n    text-align: center;\r\n}\r\n.hh2\r\n{\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n    padding: 2px 0px;\r\n    margin:0px 0px 2px 0px;\r\n    width:100%;\r\n\r\n    \r\n}\r\n.example-card .content\r\n{\r\n    font-size: 20px;\r\n    padding: 2px 0px;\r\n    margin:0px 0px 2px 0px;\r\n    width:100%;\r\n    text-align: center;\r\n} \r\n#container .list-item\r\n{\r\n    \r\n    margin-top: 15px;\r\n    padding-left: 25px;\r\n    width:100%; \r\n   font-weight: 500;\r\n\r\n}\r\n.example-card\r\n{\r\n    width: 95%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/view-all-feedbacks/view-all-feedbacks.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <legend class=\"text-center\">FEEDBACKS</legend>\n    <md-grid-list cols=\"2\" rowHeight=\"300px\">\n  <md-grid-tile  *ngFor=\"let post of (GetNotificationService.notifications$ | async); let index=index; \">\n      <md-card class=\"example-card\" >\n        <md-card-header >\n           \n        </md-card-header>\n        <md-card-content >\n         <p class=\"hh2\">{{post.owner}}</p>\n            <span class=\"content\">{{post.text}}</span>\n          \n        </md-card-content>\n        <md-card-actions>\n            <i class=\"h6 date\"><b>Date</b>:{{post.date}}</i>\n             <button md-raised-button color=\"primary\" class=\" footerbtn\" (click)=\"loadModal(index,post)\" *ngIf=\"post?.replied=='no'\" data-target=\"#replyModal\" data-toggle=\"modal\" >Reply</button>\n            <button md-button  class=\" footerbtn\" disabled *ngIf=\"post?.replied=='yes'\" >Replied</button>   \n        </md-card-actions>\n        </md-card>\n  </md-grid-tile>\n\n</md-grid-list>\n<!-- \n    <div class=\"col-xs-12 col-md-8 col-md-offset-2\" id=\"container\"  *ngFor=\"let post of (GetNotificationService.notifications$ | async); let index=index; \">\n     \n\n      <div class=\"row\">\n\n          <h2 class=\"h2\">{{post.text}}</h2>   \n          <div class=\"listgroup list-group\">\n            <p class=\"list-item\"> {{post.details}}</p>      \n          </div>\n          \n        <div class=\"footer\" >\n           \n          <i class=\"h6 date\"><b>Date</b>:{{post.date}}</i>\n          <span class=\"companyName\">{{post.owner}}</span>\n            <button class=\"btn btn-primary footerbtn\" (click)=\"loadModal(index,post)\" *ngIf=\"post?.replied=='no'\" data-target=\"#replyModal\" data-toggle=\"modal\" >Reply</button>\n            <button class=\"btn btn-success footerbtn\" disabled *ngIf=\"post?.replied=='yes'\" >Applied</button>   \n     \n        </div>\n    </div>\n     \n   </div>\n -->\n<div class=\"modal fade col-xs-12\" tabindex=\"-1\" id=\"replyModal\"\n        data-keyboard=\"false\" data-backdrop=\"static\">\n    <div class=\"modal-dialog modal-sm\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                \n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"resetModal()\">\n                    &times;\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <form #f=\"ngForm\" (ngSubmit)=\"onReply(f.value)\" >\n                  <md-input-container style=\"width:80%;\"  color=\"accent\">\n                    <input mdInput placeholder=\"Reply\" name=\"reply\" [(ngModel)]=\"reply\" required>\n                        <br>\n                    </md-input-container>\n                    <button md-icon-button type=\"submit\" color=\"primary\" data-dismiss=\"modal\">\n                         <md-icon>send</md-icon>\n                        \n                            </button>\n                    </form>    \n            </div>\n        </div>\n    </div>\n</div>\n<!-- Alert MSG  -->\n<div  *ngIf=\"isformSubmitted\">\n  <div  *ngIf=\"isCorrect;then success;else danger;\" style=\"bottom:0px;position: absolute;width: 100%;\">\n  </div>\n</div>\n<ng-template #success>\n  <div class=\"alert alert-dismissible alert-success text-center msgShow\" style=\"bottom:0px;position: absolute;width: 100%;\" >\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"changeFlag()\">&times;</button>\n  <strong> Feedback successfully!</strong>\n  </div>\n</ng-template>\n<ng-template #danger>\n  <div class=\"alert alert-dismissible alert-danger text-center msgShow\" style=\"bottom:0px;position: absolute;width: 100%;\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"changeFlag()\">&times;</button>\n  <strong> Feedback Failure!</strong>\n  </div>\n</ng-template>\n<!-- Alert MSG  -->"

/***/ }),

/***/ "../../../../../src/app/admin/view-all-feedbacks/view-all-feedbacks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewAllFeedbacksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__get_notification_service__ = __webpack_require__("../../../../../src/app/get-notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__date_service__ = __webpack_require__("../../../../../src/app/date.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewAllFeedbacksComponent = (function () {
    function ViewAllFeedbacksComponent(authService, GetNotificationService, af, DateService) {
        this.authService = authService;
        this.GetNotificationService = GetNotificationService;
        this.af = af;
        this.DateService = DateService;
        this.isCorrect = false;
        this.isloading = true;
        this.isformSubmitted = false;
        this.index = 0;
    }
    ViewAllFeedbacksComponent.prototype.ngOnInit = function () {
    };
    ViewAllFeedbacksComponent.prototype.resetModal = function () {
        this.index = 0;
        this.feeds$ = "";
    };
    ViewAllFeedbacksComponent.prototype.loadModal = function (index, post) {
        this.feeds$ = post;
        this.index = index;
    };
    ViewAllFeedbacksComponent.prototype.onReply = function (data) {
        var _this = this;
        console.log(data, ",", this.index, ",", this.feeds$.key);
        this.af.object('/feedbacks/' + this.feeds$.key).update({ replied: 'yes' });
        this.af.list('/feedbacks/' + this.feeds$.key).push({ reply: data.reply, Replier: this.authService.userName, date: this.DateService.getCurrentDate(), adminUid: this.authService.uid }).then(function (success) {
            _this.isCorrect = true;
            _this.index = 0;
            _this.feeds$ = "";
            _this.isformSubmitted = true;
        }, function (error) {
            _this.isCorrect = false;
            _this.index = 0;
            _this.feeds$ = "";
            _this.isformSubmitted = true;
        });
        ;
    };
    return ViewAllFeedbacksComponent;
}());
ViewAllFeedbacksComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-view-all-feedbacks',
        template: __webpack_require__("../../../../../src/app/admin/view-all-feedbacks/view-all-feedbacks.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/view-all-feedbacks/view-all-feedbacks.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__get_notification_service__["a" /* GetNotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__get_notification_service__["a" /* GetNotificationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__date_service__["a" /* DateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__date_service__["a" /* DateService */]) === "function" && _d || Object])
], ViewAllFeedbacksComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=view-all-feedbacks.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/view-booking/view-booking.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/view-booking/view-booking.component.html":
/***/ (function(module, exports) {

module.exports = "<md-progress-bar mode=\"indeterminate\" color=\"warn\" *ngIf=\"GetAllBookingsService.counter>GetAllBookingsService.srNo.length-1\"></md-progress-bar>\n\n<!-- View Booking List  -->\n<div class=\"bookingView\" >\n<table class=\"table table-striped table-hover \">\n  <thead>\n    <tr>\n      <th>Sr#</th>\n      <th>Resident Name</th>\n      <th>Area Name</th>\n      <th>Slot #</th>\n      <th>Start Date</th>\n      <th>Start Time</th>\n      <th>End Time</th>\n      <th>End Date</th>\n      <th>Actions</th>\n    </tr>\n  </thead>\n  <tbody >\n     {{GetAllBookingsService.startCounter()}}\n    <ng-container *ngFor=\"let bhabha of (GetAllBookingsService.srNo );let j=index;\">\n      \n    <tr *ngFor=\"let detail of (GetAllBookingsService.AllparticularareasSlotsData$[j] | async);let i=index;\">\n      \n      <ng-container *ngIf=\"detail?.startDate\">\n    {{GetAllBookingsService.incCounter()}}\n      \n      <td>{{GetAllBookingsService.counter}}</td>\n      <td>{{detail.resident}}</td>\n      <td>{{detail.areaName}}</td>\n      <td>{{GetAllBookingsService.displayIndex[GetAllBookingsService.counter-1]}}</td>\n      <td>{{detail.startDate}}</td>\n      <td>{{detail.startTime}}</td>\n      <td>{{detail.endTime}}</td>\n      <td>{{detail.endDate}}</td>   \n      <td> <button md-raised-button style=\"float:left;\" color=\"accent\" data-target=\"#confirmCancelAction\" data-toggle=\"modal\" (click)=\"loadAlert(detail,i)\">CANCEL</button></td>\n      \n    </ng-container>\n         \n    </tr>\n    </ng-container>\n  \n   <!--Alert Cancel-->\n        <div class=\"modal fade col-xs-12\" tabindex=\"-1\" id=\"confirmCancelAction\" data-keyboard=\"false\" data-backdrop=\"static\">\n            <div class=\"modal-dialog modal-lg\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"resetAlert()\">\n                            &times;\n                        </button>\n                        <h4 class=\"modal-title\" style=\"text-align:center; color:red;\">Confirmation</h4>\n                    </div>\n                    <div class=\"modal-body\">\n                      DO YOU WANT TO CANCEL BOOKING NO:{{index+1}}\n                    </div>\n                    <div class=\"modal-footer\">\n                     <md-grid-list cols=\"2\" rowHeight=\"2:1\" id=\"action\">\n                         <md-grid-tile colspan=\"1\"> <button md-raised-button style=\"float:left; width:100%;\" color=\"primary\" class=\"close\" data-dismiss=\"modal\" (click)=\"resetAlert()\">Close</button></md-grid-tile>\n                         <md-grid-tile colspan=\"1\"> <button md-raised-button style=\"float:right; width:100%;\" color=\"accent\" (click)=\"cancelBooking()\" data-dismiss=\"modal\">Cancel</button></md-grid-tile>\n                    </md-grid-list>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n      <!--Alert Cancel-->\n  </tbody>\n</table> \n</div>\n<!-- View Booking List  -->\n\n\n"

/***/ }),

/***/ "../../../../../src/app/admin/view-booking/view-booking.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewBookingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__get_all_bookings_service__ = __webpack_require__("../../../../../src/app/get-all-bookings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewBookingComponent = (function () {
    function ViewBookingComponent(AuthService, GetAllBookingsService) {
        this.AuthService = AuthService;
        this.GetAllBookingsService = GetAllBookingsService;
        this.index = -1;
        this.counter = 0;
        this.displayedColumns = ['Sr#', 'Resident Name', 'Area Name', 'Slot #', 'Start Date', 'Start Time', 'End Time', 'End Date', 'Actions'];
    }
    ViewBookingComponent.prototype.ngOnInit = function () {
        this.GetAllBookingsService.startCounter();
    };
    ViewBookingComponent.prototype.getCounter = function () {
        return this.counter++;
    };
    ViewBookingComponent.prototype.cancelBooking = function () {
        if (this.detail) {
            console.log(this.detail);
            if (this.GetAllBookingsService.deleteBooking(this.detail)) {
                this.resetAlert();
                this.counter--;
            }
        }
    };
    ViewBookingComponent.prototype.resetAlert = function () {
        this.index = -1;
        this.detail = "";
    };
    ViewBookingComponent.prototype.loadAlert = function (detail, i) {
        this.index = i;
        this.detail = detail;
    };
    return ViewBookingComponent;
}());
ViewBookingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-view-booking',
        template: __webpack_require__("../../../../../src/app/admin/view-booking/view-booking.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/view-booking/view-booking.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__get_all_bookings_service__["a" /* GetAllBookingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__get_all_bookings_service__["a" /* GetAllBookingsService */]) === "function" && _b || Object])
], ViewBookingComponent);

var _a, _b;
//# sourceMappingURL=view-booking.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/view-residents/view-residents.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/view-residents/view-residents.component.html":
/***/ (function(module, exports) {

module.exports = "<md-progress-bar mode=\"indeterminate\" color=\"warn\" *ngIf=\"showSpinner\"></md-progress-bar>\n\n<table class=\"table table-striped table-hover \">\n  <thead>\n    <tr>\n      <th>Sr#</th>\n      <th>Resident Name</th>\n      <th>Phone #</th>\n    </tr>\n  </thead>\n  <tbody *ngFor=\"let detail of (GetAllUsersService.user$|async);let i=index;\"  >\n       <tr>\n\n          <td>{{i+1}}</td>\n          <td>{{detail.name}}</td>\n          <td>{{detail.cellNum}}</td>     \n     </tr>\n\n  </tbody>\n</table> \n<!-- View Students List  -->"

/***/ }),

/***/ "../../../../../src/app/admin/view-residents/view-residents.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewResidentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__get_all_users_service__ = __webpack_require__("../../../../../src/app/get-all-users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__get_areas_service__ = __webpack_require__("../../../../../src/app/get-areas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewResidentsComponent = (function () {
    function ViewResidentsComponent(GetAllUsersService, GetAreasService, authService) {
        this.GetAllUsersService = GetAllUsersService;
        this.GetAreasService = GetAreasService;
        this.authService = authService;
        this.showSpinner = true;
    }
    ViewResidentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.GetAllUsersService.user$.subscribe(function () { return _this.showSpinner = false; });
    };
    return ViewResidentsComponent;
}());
ViewResidentsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-view-residents',
        template: __webpack_require__("../../../../../src/app/admin/view-residents/view-residents.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/view-residents/view-residents.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__get_all_users_service__["a" /* GetAllUsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__get_all_users_service__["a" /* GetAllUsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__get_areas_service__["a" /* GetAreasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__get_areas_service__["a" /* GetAreasService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], ViewResidentsComponent);

var _a, _b, _c;
//# sourceMappingURL=view-residents.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_fromPromise__ = __webpack_require__("../../../../rxjs/add/observable/fromPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__date_service__ = __webpack_require__("../../../../../src/app/date.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__get_all_users_service__ = __webpack_require__("../../../../../src/app/get-all-users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__get_notification_service__ = __webpack_require__("../../../../../src/app/get-notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__delete_logs_service__ = __webpack_require__("../../../../../src/app/delete-logs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__get_areas_service__ = __webpack_require__("../../../../../src/app/get-areas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__get_all_bookings_service__ = __webpack_require__("../../../../../src/app/get-all-bookings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__resident_resident_component__ = __webpack_require__("../../../../../src/app/resident/resident.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ground_ground_component__ = __webpack_require__("../../../../../src/app/ground/ground.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__a_a_component__ = __webpack_require__("../../../../../src/app/a/a.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__b_b_component__ = __webpack_require__("../../../../../src/app/b/b.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_flex_layout__ = __webpack_require__("../../../flex-layout/@angular/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ng_pick_datetime__ = __webpack_require__("../../../../ng-pick-datetime/picker.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ng_pick_datetime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_ng_pick_datetime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__admin_view_booking_view_booking_component__ = __webpack_require__("../../../../../src/app/admin/view-booking/view-booking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__admin_view_residents_view_residents_component__ = __webpack_require__("../../../../../src/app/admin/view-residents/view-residents.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__resident_view_feedback_view_feedback_component__ = __webpack_require__("../../../../../src/app/resident/view-feedback/view-feedback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__resident_set_feedback_set_feedback_component__ = __webpack_require__("../../../../../src/app/resident/set-feedback/set-feedback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__resident_view_user_bookings_view_user_bookings_component__ = __webpack_require__("../../../../../src/app/resident/view-user-bookings/view-user-bookings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__admin_view_all_feedbacks_view_all_feedbacks_component__ = __webpack_require__("../../../../../src/app/admin/view-all-feedbacks/view-all-feedbacks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__admin_create_slots_create_slots_component__ = __webpack_require__("../../../../../src/app/admin/create-slots/create-slots.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_19__admin_admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_20__resident_resident_component__["a" /* ResidentComponent */],
            __WEBPACK_IMPORTED_MODULE_21__ground_ground_component__["a" /* GroundComponent */],
            __WEBPACK_IMPORTED_MODULE_22__a_a_component__["a" /* AComponent */],
            __WEBPACK_IMPORTED_MODULE_23__b_b_component__["a" /* BComponent */],
            __WEBPACK_IMPORTED_MODULE_28__admin_view_booking_view_booking_component__["a" /* ViewBookingComponent */],
            __WEBPACK_IMPORTED_MODULE_29__admin_view_residents_view_residents_component__["a" /* ViewResidentsComponent */],
            __WEBPACK_IMPORTED_MODULE_30__resident_view_feedback_view_feedback_component__["a" /* ViewFeedbackComponent */],
            __WEBPACK_IMPORTED_MODULE_31__resident_set_feedback_set_feedback_component__["a" /* SetFeedbackComponent */],
            __WEBPACK_IMPORTED_MODULE_32__resident_view_user_bookings_view_user_bookings_component__["a" /* ViewUserBookingsComponent */],
            __WEBPACK_IMPORTED_MODULE_33__admin_view_all_feedbacks_view_all_feedbacks_component__["a" /* ViewAllFeedbacksComponent */],
            __WEBPACK_IMPORTED_MODULE_34__admin_create_slots_create_slots_component__["a" /* CreateSlotsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* RouterModule */].forRoot([
                {
                    path: 'login',
                    pathMatch: 'full',
                    component: __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */]
                },
                {
                    path: 'admin',
                    component: __WEBPACK_IMPORTED_MODULE_19__admin_admin_component__["a" /* AdminComponent */],
                    children: [
                        {
                            path: 'ground',
                            component: __WEBPACK_IMPORTED_MODULE_21__ground_ground_component__["a" /* GroundComponent */],
                            outlet: 'adminOutlet'
                        },
                        {
                            path: 'viewbooking',
                            component: __WEBPACK_IMPORTED_MODULE_28__admin_view_booking_view_booking_component__["a" /* ViewBookingComponent */],
                            outlet: 'adminOutlet'
                        },
                        {
                            path: 'viewusers',
                            component: __WEBPACK_IMPORTED_MODULE_29__admin_view_residents_view_residents_component__["a" /* ViewResidentsComponent */],
                            outlet: 'adminOutlet'
                        },
                        {
                            path: 'createslots',
                            component: __WEBPACK_IMPORTED_MODULE_34__admin_create_slots_create_slots_component__["a" /* CreateSlotsComponent */],
                            outlet: 'adminOutlet'
                        },
                        {
                            path: 'viewfeedback',
                            component: __WEBPACK_IMPORTED_MODULE_33__admin_view_all_feedbacks_view_all_feedbacks_component__["a" /* ViewAllFeedbacksComponent */],
                            outlet: 'adminOutlet'
                        },
                    ]
                },
                {
                    path: 'resident',
                    component: __WEBPACK_IMPORTED_MODULE_20__resident_resident_component__["a" /* ResidentComponent */],
                    children: [
                        {
                            path: 'ground',
                            component: __WEBPACK_IMPORTED_MODULE_21__ground_ground_component__["a" /* GroundComponent */],
                            outlet: 'userOutlet'
                        },
                        {
                            path: 'userbooking',
                            component: __WEBPACK_IMPORTED_MODULE_32__resident_view_user_bookings_view_user_bookings_component__["a" /* ViewUserBookingsComponent */],
                            outlet: 'userOutlet'
                        },
                        {
                            path: 'viewfeedback',
                            component: __WEBPACK_IMPORTED_MODULE_30__resident_view_feedback_view_feedback_component__["a" /* ViewFeedbackComponent */],
                            outlet: 'userOutlet'
                        },
                        {
                            path: 'setfeedback',
                            component: __WEBPACK_IMPORTED_MODULE_31__resident_set_feedback_set_feedback_component__["a" /* SetFeedbackComponent */],
                            outlet: 'userOutlet'
                        }
                    ]
                },
                {
                    path: 'a',
                    pathMatch: 'full',
                    component: __WEBPACK_IMPORTED_MODULE_22__a_a_component__["a" /* AComponent */]
                },
                {
                    path: '',
                    pathMatch: 'full',
                    redirectTo: '/login'
                } /*,
                {
                  path:'**',
                  redirectTo:'/login'
                }*/
            ]),
            __WEBPACK_IMPORTED_MODULE_24__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_24__angular_material__["h" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_24__angular_material__["l" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_24__angular_material__["e" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_24__angular_material__["b" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_24__angular_material__["g" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_25__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_24__angular_material__["f" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_24__angular_material__["d" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_26__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_24__angular_material__["j" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_27_ng_pick_datetime__["DateTimePickerModule"],
            __WEBPACK_IMPORTED_MODULE_24__angular_material__["k" /* MdTableModule */],
            __WEBPACK_IMPORTED_MODULE_24__angular_material__["i" /* MdProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_24__angular_material__["c" /* MdDialogModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_14__get_notification_service__["a" /* GetNotificationService */], __WEBPACK_IMPORTED_MODULE_13__get_all_users_service__["a" /* GetAllUsersService */], __WEBPACK_IMPORTED_MODULE_17__get_all_bookings_service__["a" /* GetAllBookingsService */], __WEBPACK_IMPORTED_MODULE_12__date_service__["a" /* DateService */], __WEBPACK_IMPORTED_MODULE_15__delete_logs_service__["a" /* DeleteLogsService */], __WEBPACK_IMPORTED_MODULE_16__get_areas_service__["a" /* GetAreasService */], __WEBPACK_IMPORTED_MODULE_11__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_18__auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["a" /* AngularFireDatabase */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(AuthService) {
        this.AuthService = AuthService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        return this.AuthService.getisLoggedIn();
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__delete_logs_service__ = __webpack_require__("../../../../../src/app/delete-logs.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(firebaseAuth, DeleteLogsService) {
        var _this = this;
        this.firebaseAuth = firebaseAuth;
        this.isLoggedIn = false;
        this.uid = "";
        this.key = "";
        this.userName = "";
        this.user = firebaseAuth.authState;
        if (!this.isLoggedIn)
            this.user.subscribe(function (i) {
                if (i) {
                    _this.isLoggedIn = true;
                    _this.uid = i.uid;
                }
            });
    }
    AuthService.prototype.getisLoggedIn = function () {
        var _this = this;
        return new Promise(function (resolve) {
            try {
                _this.user.subscribe(function (i) {
                    if (i) {
                        _this.isLoggedIn = true;
                        _this.uid = i.uid;
                    }
                    resolve(_this.isLoggedIn);
                });
            }
            catch (e) { }
        });
    };
    AuthService.prototype.signup = function (email, password) {
        var _this = this;
        var result = "void";
        return new Promise(function (resolve, reject) {
            _this.firebaseAuth
                .auth
                .createUserWithEmailAndPassword(email, password)
                .then(function (value) {
                _this.uid = value.uid;
                console.log('uid inserted', _this.uid);
                resolve(_this.uid);
            })
                .catch(function (err) {
                reject(err.message);
            });
        });
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.firebaseAuth
                .auth
                .signInWithEmailAndPassword(email, password)
                .then(function (success) {
                _this.isLoggedIn = true;
                console.log('Nice, it worked!');
                resolve(_this.isLoggedIn);
            })
                .catch(function (err) {
                reject(err.message);
                console.log('Something went wrong:', err.message);
            });
        });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return this.firebaseAuth
            .auth
            .signOut().then(function (success) { return _this.isLoggedIn = false; });
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__delete_logs_service__["a" /* DeleteLogsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__delete_logs_service__["a" /* DeleteLogsService */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/b/b.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/b/b.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  b works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/b/b.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BComponent = (function () {
    function BComponent() {
    }
    BComponent.prototype.ngOnInit = function () {
    };
    return BComponent;
}());
BComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-b',
        template: __webpack_require__("../../../../../src/app/b/b.component.html"),
        styles: [__webpack_require__("../../../../../src/app/b/b.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BComponent);

//# sourceMappingURL=b.component.js.map

/***/ }),

/***/ "../../../../../src/app/date.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DateService = (function () {
    function DateService() {
        this.datePipe = new __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"]('en-US');
    }
    DateService.prototype.getCurrentTime = function () {
        return "" + this.datePipe.transform(new Date(), 'HH:mm');
    };
    DateService.prototype.getTimeDate = function () {
        return "" + new Date();
    };
    DateService.prototype.getCurrentDate = function () {
        return this.datePipe.transform(new Date(), 'MM/dd/yyyy');
    };
    DateService.prototype.getArrayDate = function (date) { return date.split('/'); };
    DateService.prototype.getArrayTime = function (time) { return time.split(':'); };
    DateService.prototype.parseDate = function (timeStamp) {
        return "" + this.datePipe.transform(timeStamp, 'MM/dd/yyyy');
    };
    DateService.prototype.parseTime = function (timeStamp) {
        return "" + this.datePipe.transform(timeStamp, 'HH:mm');
    };
    return DateService;
}());
DateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], DateService);

//# sourceMappingURL=date.service.js.map

/***/ }),

/***/ "../../../../../src/app/delete-logs.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteLogsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__get_all_bookings_service__ = __webpack_require__("../../../../../src/app/get-all-bookings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DeleteLogsService = (function () {
    function DeleteLogsService(af, GetAllBookingsService) {
        var _this = this;
        this.af = af;
        this.GetAllBookingsService = GetAllBookingsService;
        this.dateToday = new __WEBPACK_IMPORTED_MODULE_2__angular_common__["DatePipe"]('en-US').transform(new Date(), 'MM/dd/yyyy');
        this.date = new __WEBPACK_IMPORTED_MODULE_2__angular_common__["DatePipe"]('en-US');
        this.af.list('/slots', { preserveSnapshot: true }).subscribe(function (snapshots) {
            snapshots.forEach(function (snapshot) {
                _this.af.list('/slots/' + snapshot.key + '/slotsArr', { preserveSnapshot: true }).subscribe(function (snapshots) {
                    snapshots.forEach(function (snapshot1) {
                        _this.af.list('/slots/' + snapshot.key + '/slotsArr/' + snapshot1.key, { preserveSnapshot: true }).subscribe(function (snapshots) {
                            snapshots.forEach(function (snapshot2) {
                                var temp = snapshot2.val();
                                var tempString = '/slots/' + snapshot.key + '/slotsArr/' + snapshot1.key + "/" + snapshot2.key;
                                if (_this.date.transform(snapshot2.val().endDate, 'MM/dd/yyyy') < _this.dateToday) {
                                    _this.deleteBooking('' + tempString, temp);
                                }
                                else if (_this.date.transform(snapshot2.val().endDate, 'MM/dd/yyyy') == _this.dateToday) {
                                    var c = snapshot2.val().endTime.split(':');
                                    var currentTime = _this.getCurrentTime().split(':');
                                    if (c[0] < currentTime[0]) {
                                        _this.deleteBooking('' + tempString, temp);
                                    }
                                    else if (c[0] == currentTime[0]) {
                                        if (c[1] <= currentTime[1]) {
                                            _this.deleteBooking('' + tempString, temp);
                                        }
                                    }
                                }
                            });
                        });
                    });
                });
            });
        });
    }
    DeleteLogsService.prototype.getCurrentTime = function () {
        var t = "" + new Date();
        var a = t.split(" ");
        if (a)
            return a[4];
        else
            return "none";
    };
    ;
    DeleteLogsService.prototype.deleteBooking = function (path, temp) {
        var _this = this;
        this.af.object(path + '/').remove().then(function (success) {
            console.log("Deleted:", temp);
            _this.GetAllBookingsService.resetData();
        }, function (error) { return console.log("Failed to deleted:", temp); });
    };
    return DeleteLogsService;
}());
DeleteLogsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__get_all_bookings_service__["a" /* GetAllBookingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__get_all_bookings_service__["a" /* GetAllBookingsService */]) === "function" && _b || Object])
], DeleteLogsService);

var _a, _b;
//# sourceMappingURL=delete-logs.service.js.map

/***/ }),

/***/ "../../../../../src/app/get-all-bookings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetAllBookingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__get_areas_service__ = __webpack_require__("../../../../../src/app/get-areas.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetAllBookingsService = (function () {
    function GetAllBookingsService(af, GetAreasService) {
        this.af = af;
        this.GetAreasService = GetAreasService;
        this.booking = [];
        this.slotsKey = [];
        this.bookingsKey = [];
        this.AllparticularareasSlotsData$ = [];
        this.srNo = [];
        this.displayIndex = [];
        this.counter = -1;
        this.loadData();
    }
    GetAllBookingsService.prototype.startCounter = function () {
        this.counter = 0;
    };
    GetAllBookingsService.prototype.incCounter = function () {
        this.counter++;
    };
    GetAllBookingsService.prototype.resetData = function () {
        this.booking = [];
        this.slotsKey = [];
        this.bookingsKey = [];
        this.AllparticularareasSlotsData$ = [];
        this.srNo = [];
        this.displayIndex = [];
        this.counter = -1;
        this.loadData();
        this.startCounter();
    };
    GetAllBookingsService.prototype.loadData = function () {
        var _this = this;
        var count = 1;
        this.af.list('/slots', { preserveSnapshot: true }).subscribe(function (snapshots) {
            snapshots.forEach(function (snapshot) {
                var _loop_1 = function (i) {
                    _this.AllparticularareasSlotsData$.push(_this.af.list('/slots/' + snapshot.key + '/slotsArr/' + i + '/'));
                    console.log(typeof _this.AllparticularareasSlotsData$);
                    _this.af.list('/slots/' + snapshot.key + '/slotsArr/' + i + '/', { preserveSnapshot: true }).subscribe(function (snapshots) {
                        snapshots.forEach(function (snapshot) {
                            if (snapshot.val().areaName) {
                                _this.booking.push(snapshot.val());
                                _this.bookingsKey.push(snapshot.key);
                                _this.displayIndex.push(i);
                                _this.srNo.push(count++);
                                _this.slotsKey.push({ areaName: snapshot.val().areaName, slotKey: i, childSlotKey: snapshot.key });
                            }
                            else {
                                _this.booking.push("-1");
                                _this.srNo.push(-1);
                            }
                        });
                    });
                };
                for (var i = 0; i < snapshot.val().totalSlot; i++) {
                    _loop_1(i);
                }
                console.log(_this.booking, ",", _this.srNo);
            });
        });
    };
    GetAllBookingsService.prototype.deleteBooking = function (data) {
        var _this = this;
        var output = false;
        if (data) {
            var slotsKey = "";
            for (var i = 0; i < this.slotsKey.length; i++) {
                if (data.areaName == this.slotsKey[i].areaName && data.key == this.slotsKey[i].childSlotKey) {
                    slotsKey = this.slotsKey[i].slotKey;
                }
            }
            if (slotsKey !== "") {
                this.af.object('/slots/' + data.areaKey + '/slotsArr/' + slotsKey + "/" + data.key).remove().then(function (success) {
                    output = true;
                    _this.resetData();
                }, function (error) { return output = false; });
            }
            console.log('/slots/' + data.areaKey + '/slotsArr/' + slotsKey + "/" + data.key);
        }
        return output;
    };
    return GetAllBookingsService;
}());
GetAllBookingsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__get_areas_service__["a" /* GetAreasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__get_areas_service__["a" /* GetAreasService */]) === "function" && _b || Object])
], GetAllBookingsService);

var _a, _b;
//# sourceMappingURL=get-all-bookings.service.js.map

/***/ }),

/***/ "../../../../../src/app/get-all-users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetAllUsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GetAllUsersService = (function () {
    function GetAllUsersService(af) {
        var _this = this;
        this.af = af;
        this.usersUid = [];
        this.userList = [];
        this.userkey = [];
        this.user$ = this.af.list('/usersDetails_resident/');
        this.af.list('/users', { preserveSnapshot: true }).subscribe(function (snapshots) {
            snapshots.forEach(function (snapshot) {
                if (snapshot.val().type == "Student") {
                    _this.usersUid.push(snapshot.val().uid);
                    _this.userkey.push(snapshot.key);
                }
            });
        });
        var index = 0;
        this.af.list('/usersDetails_student', { preserveSnapshot: true }).subscribe(function (snapshots) {
            snapshots.forEach(function (snapshot) {
                if (snapshot.val().uid == _this.usersUid[index]) {
                    _this.userList.push(snapshot.val());
                    index++;
                }
            });
        });
    }
    return GetAllUsersService;
}());
GetAllUsersService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], GetAllUsersService);

var _a;
//# sourceMappingURL=get-all-users.service.js.map

/***/ }),

/***/ "../../../../../src/app/get-areas.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetAreasService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GetAreasService = (function () {
    function GetAreasService(af) {
        var _this = this;
        this.af = af;
        this.areasKey = [];
        this.areasSlots = []; //FirebaseListObservable array;
        this.AllparticularareasSlots$ = [];
        this.AllparticularareasSlotsData$ = [];
        var localparticularareasSlots$ = [];
        this.areas$ = this.af.list('/slots');
        this.af.list('/slots', { preserveSnapshot: true }).subscribe(function (snapshots) {
            snapshots.forEach(function (snapshot) {
                _this.areasKey.push(snapshot.key);
                for (var i = 0; i < snapshot.val().totalSlot; i++) {
                    localparticularareasSlots$.push(_this.af.list('/slots/' + snapshot.key + '/slotsArr/' + i, { preserveSnapshot: true }));
                    _this.AllparticularareasSlots$.push(_this.af.list('/slots/' + snapshot.key + '/slotsArr/' + i, { preserveSnapshot: true }));
                    _this.areasSlots.push(localparticularareasSlots$);
                    localparticularareasSlots$ = [];
                }
            });
        });
    }
    return GetAreasService;
}());
GetAreasService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], GetAreasService);

var _a;
//# sourceMappingURL=get-areas.service.js.map

/***/ }),

/***/ "../../../../../src/app/get-notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetNotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GetNotificationService = (function () {
    function GetNotificationService(af) {
        var _this = this;
        this.af = af;
        this.length = 0;
        this.notifications$ = this.af.list('/feedbacks');
        this.af.list('/feedbacks', { preserveSnapshot: true }).subscribe(function (snapshots) {
            snapshots.forEach(function (snapshot) {
                _this.length++;
            });
        });
    }
    return GetNotificationService;
}());
GetNotificationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], GetNotificationService);

var _a;
//# sourceMappingURL=get-notification.service.js.map

/***/ }),

/***/ "../../../../../src/app/ground/ground.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".area\r\n{\r\n   border:2px ridge #dfdfdf;\r\n    margin-top: 20px;\r\n    text-align: center;\r\n     box-shadow: -1px 4px 8px 0 rgba(0, 0, 0, 0.2), 5px 6px 10px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n.area > p\r\n{\r\n    background-color: #026;\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n    padding: 40px 0px;\r\n    margin:0px 0px 0px 0px;\r\n    width:100%;\r\n    color:white;\r\n    font-size: 28px;\r\n    background-image: url(" + __webpack_require__("../../../../../src/assets/grass.png") + ");\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ground/ground.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  ground works!\n</p>\n<!-- Ground View  -->\n\n  <div class=\"jobView col-xs-offset-3\">\n     <div class=\"row\">\n         <div class=\"col-xs-3\" id=\"container\" *ngFor=\"let area of (GetAreasService.areas$ | async); let index=index;\">\n     \n       \n              <div  class=\"area\" >\n                <p clickable data-target=\"#loginModal\" data-toggle=\"modal\" (click)=\"loadSlots(area)\">\n                  {{area.areaName|uppercase}}\n                </p>\n              </div>\n        </div>\n    </div>\n   </div>\n<!-- Ground View  -->\n\n<!-- Slots View  -->\n<div class=\"modal fade col-xs-12\" tabindex=\"-1\" id=\"loginModal\"\n        data-keyboard=\"false\" data-backdrop=\"static\">\n    <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"resetSlot()\">\n                    &times;\n                </button>\n                <h4 class=\"modal-title\">{{this.area.name}}</h4>\n            </div>\n            <div class=\"modal-body\">\n              <span class=\"well text-center col-xs-12\" style=\"padding:20px;\" *ngIf=\"error!='hide'\">{{error}}</span>\n <form #f=\"ngForm\" (ngSubmit)=\"onBook(f.value)\" >\n\n<table class=\"table table-striped table-hover \">\n  <thead>\n    <tr>\n      <th>Slot #</th>\n      <th>Start Date</th>\n      <th>Start Time</th>\n      <th>End Time</th>\n      <th>End Date</th>\n      <th>Status</th>\n      <th>Check Availability</th>\n      <th>Book</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let i of sd; let ind=index;\" >\n      <td >{{ind+1}}</td>\n      <td ><owl-date-time name=\"startDate\" [(ngModel)]=\"sd[ind]\" [type]=\"'calendar'\" [dateFormat]=\"'YYYY-MM-DD'\" [placeHolder]=\"'yyyy/mm/dd'\" [inputId]=\"'input'+ind\" ></owl-date-time></td>\n      <td><owl-date-time [(ngModel)]=\"st[ind]\" [type]=\"'timer'\" [dateFormat]=\"'HH:mm'\" [placeHolder]=\"'hh:mm'\"   name=\"startTime\" [inputId]=\"'input'+(ind+2)\"></owl-date-time></td>\n      <td><owl-date-time [(ngModel)]=\"et[ind]\" [type]=\"'timer'\" [dateFormat]=\"'HH:mm'\" [placeHolder]=\"'hh:mm'\"  name=\"endTime\" [inputId]=\"'input'+(ind+4)\"></owl-date-time></td>      \n      <td><owl-date-time name=\"endDate\" [(ngModel)]=\"ed[ind]\" [type]=\"'calendar'\" [dateFormat]=\"'YYYY-MM-DD'\" [placeHolder]=\"'yyyy/mm/dd'\" [inputId]=\"'input'+(ind+6)\"></owl-date-time></td>\n      <td  *ngIf=\"area.isAvail && ind==area.slotsIndex ; then showAvail; else showDashAvail\"></td>\n      <td><button class=\"btn btn-warning\" (click)=\"check(ind)\" type=\"button\">Check</button></td>\n      <td><button class=\"btn btn-primary\"(click)=\"setIndex(ind)\" type=\"submit\" [disabled]=\"!enablebook && ind==area.slotsIndex || enablebook && ind!=area.slotsIndex  || !enablebook && ind!=area.slotsIndex \">Book</button></td>\n      <ng-template #showAvail >\n        <td [ngClass]=\"availableClasses\">{{area.availText}}</td>\n      </ng-template>\n      <ng-template #showDashAvail>\n        <td *ngIf=\"!area.isAvail && ind==area.slotsIndex ; then showNotAvail; else showDash\"></td>\n      </ng-template>\n       <ng-template #showDash>\n        <td > ---</td>\n      </ng-template>\n       <ng-template #showNotAvail>\n         <td [ngClass]=\"availableClasses\">{{area.availText}}</td>\n      </ng-template>\n    </tr>\n    </tbody>\n  \n</table> \n </form>     </div>\n        </div>\n    </div>\n</div>\n<!--\n  <input type=\"date\" placeholder=\"start date Here\" name=\"startDate\" [(ngModel)]=\"sd[ind]\" required>\n  <input type=\"time\" placeholder=\"start time Here\" name=\"startTime\" [(ngModel)]=\"st[ind]\" required >\n  <input type=\"time\" placeholder=\"end time Here\"  name=\"endTime\" [(ngModel)]=\"et[ind]\" required >\n  <input type=\"date\" placeholder=\"end date Here\" name=\"endDate\" [(ngModel)]=\"ed[ind]\" required >\n  -->\n<!-- Slots View  -->\n\n\n\n\n<!-- Alert MSG  -->\n<div  *ngIf=\"isformSubmitted\">\n  <div  *ngIf=\"isBooked;then success;else danger;\" style=\"bottom:0px;position: absolute;width: 100%;\">\n  </div>\n</div>\n<ng-template #success>\n  <div class=\"alert alert-dismissible alert-success text-center msgShow\" style=\"bottom:0px;position: absolute;width: 100%;\" >\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"changeFlag()\">&times;</button>\n  <strong> Booking successfully!</strong>\n  </div>\n</ng-template>\n<ng-template #danger>\n  <div class=\"alert alert-dismissible alert-danger text-center msgShow\" style=\"bottom:0px;position: absolute;width: 100%;\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"changeFlag()\">&times;</button>\n  <strong> Booking Failure!</strong>\n  </div>\n</ng-template>\n<!-- Alert MSG  -->\n"

/***/ }),

/***/ "../../../../../src/app/ground/ground.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__get_areas_service__ = __webpack_require__("../../../../../src/app/get-areas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__date_service__ = __webpack_require__("../../../../../src/app/date.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__get_all_bookings_service__ = __webpack_require__("../../../../../src/app/get-all-bookings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var GroundComponent = (function () {
    function GroundComponent(router, authService, af, GetAreasService, DateService, GetAllBookingsService) {
        this.router = router;
        this.authService = authService;
        this.af = af;
        this.GetAreasService = GetAreasService;
        this.DateService = DateService;
        this.GetAllBookingsService = GetAllBookingsService;
        this.area = { name: "", slotsIndex: -1, isAvail: null, availText: "", key: "", slots: [], slotsAmount: 0 };
        this.sd = [];
        this.et = [];
        this.ed = [];
        this.st = [];
        this.availableClasses = {};
        this.enablebook = false;
        this.isBooked = false;
        this.isformSubmitted = false;
        this.error = "hide";
        this.date = new __WEBPACK_IMPORTED_MODULE_5__angular_common__["DatePipe"]('en-US'); //.transform(new Date(), 'MM/dd/yyyy');
        this.dateToday = new __WEBPACK_IMPORTED_MODULE_5__angular_common__["DatePipe"]('en-US').transform(new Date(), 'MM/dd/yyyy').split('/');
        this.index = 0;
    }
    GroundComponent.prototype.ngOnInit = function () {
    };
    GroundComponent.prototype.getCurrentTime = function () {
        var t = "" + new Date();
        var a = t.split(" ");
        if (a)
            return a[4];
        else
            return "none";
    };
    GroundComponent.prototype.loadSlots = function (area) {
        console.log(area);
        this.resetSlots(area.totalSlot);
        this.area.name = area.areaName;
        this.area.slotsAmount = area.totalSlot;
        this.area.key = area.key;
        this.area.slots = area.slotsArr;
        this.initSlots(area.totalSlot);
    };
    GroundComponent.prototype.displayError = function (err) {
        this.error = err;
        this.enablebook = false;
    };
    GroundComponent.prototype.check = function (index) {
        var startT = this.DateService.parseTime(this.st[index]);
        var endT = this.DateService.parseTime(this.et[index]);
        var startD = this.DateService.parseDate(this.sd[index]);
        var endD = this.DateService.parseDate(this.ed[index]);
        this.resetAvailability();
        var c = this.DateService.getArrayTime(this.DateService.parseTime(this.st[index]));
        var inputstartMints = (+c[0]) * 60 + (+c[1]);
        var d = this.DateService.getArrayTime(this.DateService.parseTime(this.et[index]));
        var inputendMints = (+d[0]) * 60 + (+d[1]);
        if ((c[0]) == '00')
            (c[0]) = "24";
        if ((d[0]) == '00')
            (d[0]) = "24";
        console.log(c);
        if (this.sd[index] == "" || this.st[index] == "" || this.ed[index] == "" || this.et[index] == "") {
            this.displayError("Please fill in all the details");
            return;
        }
        else if (c[0] >= d[0]) {
            var a = this.DateService.getArrayDate(startD);
            var b = this.DateService.getArrayDate(endD);
            if ((+a[2]) == (+b[2])) {
                if ((+a[0]) == (+b[0])) {
                    if ((+a[1]) == (+b[1])) {
                        if (c[0] > d[0] || c[1] >= d[1]) {
                            this.displayError("Please select correct timings");
                            return;
                        }
                    }
                }
            }
        }
        else if (c[0] < d[0] && d[0] == "24") {
            var a = this.DateService.getArrayDate(startD);
            var b = this.DateService.getArrayDate(endD);
            if ((+a[2]) == (+b[2])) {
                if ((+a[0]) == (+b[0])) {
                    if ((+a[1]) == (+b[1])) {
                        this.displayError("Please select correct timings or select next end day");
                        return;
                    }
                }
            }
        }
        if (startT < this.DateService.getCurrentTime() && startD == this.DateService.getCurrentDate()) {
            this.displayError("Please select correct start timings");
            return;
        }
        {
            var a = this.DateService.getArrayDate(startD);
            var b = this.DateService.getArrayDate(endD);
            if ((+a[a.length - 1]) < (+this.dateToday[this.dateToday.length - 1]) || (+b[b.length - 1]) < (+this.dateToday[this.dateToday.length - 1])) {
                this.displayError("Please select Present/Future years");
                return;
            }
            else if ((+a[a.length - 1]) > (+b[b.length - 1])) {
                this.displayError("Please select correct years");
                return;
            }
            if ((+a[0]) < (+this.dateToday[0]) || (+b[0]) < (+this.dateToday[0])) {
                this.displayError("Please select Present/Future month");
                return;
            }
            else if ((+a[0]) != (+b[0])) {
                this.displayError("Please select same  month");
                return;
            }
            if ((+a[1]) < (+this.dateToday[1]) || (+b[1]) < (+this.dateToday[1]) || (+b[1]) < (+a[1])) {
                this.displayError("Please select correct day");
                return;
            }
            console.log(a, ",", b, ",");
        }
        console.log(startD, startT, endD, endT);
        var booking$ = [];
        var temp = [];
        this.af.list('slots/' + this.area.key + '/slotsArr/' + index, { preserveSnapshot: true }).subscribe(function (snapshots) {
            snapshots.forEach(function (snapshot) {
                temp.push(snapshot.key);
                booking$.push(snapshot.val());
            });
        });
        if (booking$ == null || booking$ == undefined || typeof temp == 'string') {
            this.setAvailability(index, true, "Available");
        }
        else {
            var buffer = "any";
            for (var i = 0; i < temp.length - 1; i++) {
                if (booking$[i].startDate == startD) {
                    if (booking$[i].startTime == startT) {
                        this.setAvailability(index, false, "Not Available");
                        return;
                    }
                    else if (booking$[i].startTime < startT) {
                        var a = booking$[i].startTime.split(':');
                        var startMints = (+a[0]) * 60 + (+a[1]);
                        var b = booking$[i].endTime.split(':');
                        var endMints = (+b[0]) * 60 + (+b[1]);
                        var c_1 = this.DateService.getArrayTime(this.DateService.parseTime(this.st[index]));
                        var inputstartMints_1 = (+c_1[0]) * 60 + (+c_1[1]);
                        var d_1 = this.DateService.getArrayTime(this.DateService.parseTime(this.et[index]));
                        var inputendMints_1 = (+d_1[0]) * 60 + (+d_1[1]);
                        if ((c_1[0]) == '00')
                            (c_1[0]) = "24";
                        if ((d_1[0]) == '00')
                            (d_1[0]) = "24";
                        var tempMints = Math.abs(startMints - endMints);
                        tempMints += startMints;
                        if (booking$[i].endDate == startD) {
                            if (booking$[i].endTime <= startT) {
                                buffer = "available";
                            }
                            else {
                                buffer = "not";
                            }
                        }
                        else if (booking$[i].endDate > startD) {
                            buffer = "not";
                        }
                        // if(tempMints<=inputstartMints )
                        // {
                        //    buffer="available";
                        // }
                        // else if(tempMints>inputstartMints )
                        // {
                        //   buffer="not";
                        // }
                    }
                    else if (booking$[i].startTime > startT) {
                        if (booking$[i].startDate == endD) {
                            if (booking$[i].startTime >= endT) {
                                buffer = "available";
                            }
                            else {
                                buffer = "not";
                            }
                        }
                        else if (booking$[i].startDate < endD) {
                            buffer = "not";
                        }
                    }
                }
                else if (booking$[i].startDate < startD) {
                    if (booking$[i].endDate > startD) {
                        this.setAvailability(index, false, "Not Available");
                        return;
                    }
                    else if (booking$[i].endDate == startD) {
                        if (booking$[i].endTime > startT) {
                            this.setAvailability(index, false, "Not Available");
                            return;
                        }
                        else if (booking$[i].endTime <= startT) {
                            var a = booking$[i].startTime.split(':');
                            var startMints = (+a[0]) * 60 + (+a[1]);
                            var b = booking$[i].endTime.split(':');
                            var endMints = (+b[0]) * 60 + (+b[1]);
                            var c_2 = this.DateService.getArrayTime(this.DateService.parseTime(this.st[index]));
                            var inputstartMints_2 = (+c_2[0]) * 60 + (+c_2[1]);
                            var d_2 = this.DateService.getArrayTime(this.DateService.parseTime(this.et[index]));
                            if ((c_2[0]) == '00')
                                (c_2[0]) = "24";
                            if ((d_2[0]) == '00')
                                (d_2[0]) = "24";
                            var inputendMints_2 = (+d_2[0]) * 60 + (+d_2[1]);
                            if ((+c_2[0]) < (+d_2[0])) {
                                buffer = "available";
                            }
                            else if ((+c_2[0]) > (+d_2[0])) {
                                buffer = "not";
                            }
                            else if ((+c_2[0]) == (+d_2[0])) {
                                if ((+c_2[1]) > (+d_2[1])) {
                                    buffer = "not";
                                }
                                else if ((+c_2[1]) <= (+d_2[1])) {
                                    buffer = "available";
                                }
                            }
                            else if ((+c_2[0]) < (+d_2[0])) {
                                buffer = "available";
                            }
                        }
                    }
                }
                console.log("outside if");
            }
            if (buffer == "available" || buffer == "any") {
                this.setAvailability(index, true, "Available");
            }
            else if (buffer == "not") {
                this.setAvailability(index, false, "Not Available");
                return;
            }
        }
    };
    GroundComponent.prototype.resetSlot = function () {
        this.area.slotsIndex = -1;
        this.resetSlots(this.area.slotsAmount);
        this.initSlots(this.area.slotsAmount);
    };
    GroundComponent.prototype.initSlots = function (totalLength) {
        for (var i = 0; i < totalLength; i++) {
            this.sd.push("");
            this.ed.push("");
            this.st.push("");
            this.et.push("");
        }
    };
    GroundComponent.prototype.resetSlots = function (totalLength) {
        this.sd = [];
        this.ed = [];
        this.st = [];
        this.et = [];
    };
    GroundComponent.prototype.setIndex = function (ind) {
        this.index = ind;
    };
    GroundComponent.prototype.resetIndex = function () {
        this.index = 0;
    };
    GroundComponent.prototype.onBook = function (data) {
        var _this = this;
        var startT = this.DateService.parseTime(this.st[this.index]);
        var endT = this.DateService.parseTime(this.et[this.index]);
        var startD = this.DateService.parseDate(this.sd[this.index]);
        var endD = this.DateService.parseDate(this.ed[this.index]);
        if (startT.substring(0, 2) == '00') {
            startT = startT.replace('00', '24');
        }
        if (endT.substring(0, 2) == '00') {
            endT = endT.replace('00', '24');
        }
        this.af.list('slots/' + this.area.key + '/slotsArr/' + this.area.slotsIndex).push({ resident: this.authService.userName, rUid: this.authService.uid, areaName: this.area.name, areaKey: this.area.key, startDate: startD, endDate: endD, startTime: startT, endTime: endT, key: "" }).then(function (success) {
            _this.isBooked = true;
            _this.af.list('slots/' + _this.area.key + '/slotsArr/' + _this.area.slotsIndex + '/', { preserveSnapshot: true }).subscribe(function (snapshots) {
                _this.af.object('slots/' + _this.area.key + '/slotsArr/' + _this.area.slotsIndex + '/' + snapshots[snapshots.length - 2].key)
                    .update({ key: snapshots[snapshots.length - 2].key }).then(function (success) {
                    _this.area.isAvail = true;
                    _this.area.availText = 'Booked';
                    _this.resetSlot();
                    _this.isBooked = true;
                    _this.isformSubmitted = true;
                    _this.resetIndex();
                    _this.GetAllBookingsService.resetData();
                }, function (error) {
                    _this.resetIndex();
                    _this.isBooked = false;
                    _this.isformSubmitted = true;
                    _this.resetSlot();
                    _this.resetIndex();
                });
            });
        }, function (error) {
            _this.isBooked = false;
            _this.isformSubmitted = true;
            _this.resetSlot();
            _this.resetIndex();
        });
        console.log(this.authService.userName, this.authService.uid, this.area.name, this.area.key, startD, endD, startT, endT);
    };
    GroundComponent.prototype.changeFlag = function () {
        this.isformSubmitted = !this.isformSubmitted;
    };
    GroundComponent.prototype.setAvailability = function (index, avail, text) {
        this.area.isAvail = avail;
        this.area.availText = text;
        this.area.slotsIndex = index;
        this.availableClasses = {
            'success': this.area.isAvail && this.area.slotsIndex == index,
            'danger': !this.area.isAvail && this.area.slotsIndex == index
        };
        this.enablebook = avail;
    };
    GroundComponent.prototype.resetAvailability = function () {
        this.availableClasses = {};
        this.area.isAvail = false;
        this.area.availText = "";
        this.error = "hide";
    };
    return GroundComponent;
}());
GroundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-ground',
        template: __webpack_require__("../../../../../src/app/ground/ground.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ground/ground.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__get_areas_service__["a" /* GetAreasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__get_areas_service__["a" /* GetAreasService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__date_service__["a" /* DateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__date_service__["a" /* DateService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__get_all_bookings_service__["a" /* GetAllBookingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__get_all_bookings_service__["a" /* GetAllBookingsService */]) === "function" && _f || Object])
], GroundComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=ground.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#containerLogin\r\n{\r\n  position: absolute;\r\n  top:20%;\r\n  left:15%;\r\n  box-shadow:1px 1px 8px 2px #000DDD;\r\n\t\t\tpadding-top:5px;\r\n}\r\n.tab-content\r\n{\r\n    padding:20px 2px;\r\n    border-top: 0px;\r\n }\r\n.tab-content #LoginTab,.tab-content #SignUpTab\r\n{\r\n    padding-left: 5px;\r\n}\r\n.tab-content label\r\n{\r\n   color:#FFF;\r\n     text-shadow: 1px 3px 2px #000, 1px 2px 5px blue, 1px 2px 5px darkblue;\r\n    margin: 3px;\r\n}\r\n.tab-content input\r\n{\r\n    width:70%;\r\n    border:2px groove #54893f;\r\n    padding: 10px 2px;\r\n    margin: 3px 0px 5px 0px;\r\n    box-sizing: border-box;\r\n    transition: width 0.4s ease-in-out;\r\n    box-shadow: 2px 3px 3px #aaaaaa;\r\n}\r\n.tab-content #LoginTab input:focus\r\n{\r\n    width: 100%;\r\n    box-shadow: 2px 3px 3px blue;\r\n}\r\n.tab-content #SignUpTab input:focus\r\n{\r\n    width: 100%;\r\n    box-shadow: 2px 3px 3px green;\r\n}\r\n.tab-content .btn\r\n{\r\n    transition: width 0.4s ease-in-out;\r\n    box-shadow: 1px 3px 2px #000;\r\n    margin-top: 3px;\r\n    width:100%;\r\n\r\n}\r\n.tab-content .btn.primary:hover\r\n{\r\n    box-shadow: 1px 3px 2px #000, 1px 4px 5px blue, 1px 2px 5px darkblue;\r\n}\r\n.tab-content .btn-success:hover\r\n{\r\n    box-shadow: 1px 3px 2px #000, 1px 4px 5px green, 1px 2px 5px darkgreen;\r\n}\r\nselect\r\n{\r\n     text-align:center;\r\n    box-shadow: 1px 3px 2px #000;\r\n    background-color: #337AB7;\r\n    color:white;\r\n    font-size: 18px;\r\n    border-color: #337AB7;\r\n   margin-top:2px;\r\n}\r\n#error\r\n{\r\n    margin-bottom: 5px;\r\n}\r\n\r\n\r\n\r\n\t\t#initialStage\r\n\t\t{\r\n            font-family:'Open-sans';\r\n\t\t\tbackground-color:white;\r\n\t\t\ttext-align:center;\r\n            text-shadow: 0 0 3px #FF00DD, 0 0 5px #DD00FF;\r\n                    margin-bottom: 5px;\r\n        }\r\n                \r\n        .example-fill-remaining-space {\r\n\r\n  -webkit-box-flex: 1;\r\n\r\n      -ms-flex: 1 1 ;\r\n\r\n          flex: 1 1 ;\r\n}\r\n\r\n .cart-form {\r\n\r\n    width: 30%;\r\n    min-width: 178px;\r\n    position: absolute;\r\n    left: 30%;\r\n    top: 90px;\r\n    padding: 40px 1px;\r\n}\r\n .example-form,md-card-actions {\r\n\r\n    width: 80%;\r\n    min-width: 178px;\r\n    margin-left: 6px;\r\n    top: 91px;\r\n    padding: 16px 26px;\r\n\r\n}\r\n  #error\r\n  {\r\n    font-size: 15px;\r\n    text-align: center;\r\n    \r\n    color: blue;\r\n    text-shadow: 0px 0px 1px black;\r\n  }\r\n  #action\r\n  {\r\n    padding: 30px;\r\n  }\r\n  md-card-actions span\r\n  {\r\n    font-weight: lighter;\r\n    font-size: small;\r\n  }\r\n   md-card-actions button\r\n  {\r\n    right:0px;\r\n  }\r\n .example-form md-input-container, .example-form md-select\r\n{\r\n  width: 98%;\r\n    padding: 2px;\r\n        margin-top: 5px\r\n}\r\n   .example-form md-select md-option \r\n   {\r\n      width:113%;\r\n      text-align: center;\r\n   }\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div id=\"containerLogin\" class=\"col-xs-12 col-md-6 col-md-offset-1\">\n<div class=\"row\">\n    <div>\n        <div id=\"initialStage\"  class=\"col-xs-12 col-md-6 col-md-offset-3\">\n\t\t\t\t\t\t\t<h1 class=\"h1\">LOG IN / SIGN UP</h1>\n\t\t</div>\n    </div>\n</div>\n\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-md-6 col-md-offset-3\" >\n        \n               <ul class=\"nav nav-tabs nav-justified\">\n                   <li class=\"active\"><a href=\"#LoginTab\" data-toggle=\"tab\">Log In</a></li>\n                   <li><a href=\"#SignUpTab\" data-toggle=\"tab\">Sign Up</a></li>\n               </ul>\n                \n                 <div class=\"tab-content\">\n                      <p id=\"error\" class=\"alert alert-warning\" [hidden]=\"!error\">{{error}}</p>   \n                    <div id=\"LoginTab\" class=\"tab-pane fade in active\">\n                            <label for=\"userName\">Email</label>\n                            <br>\n                            <input type=\"text\" placeholder=\"Enter Email Here\" [(ngModel)]=\"email\">\n                             <br>\n                            <label for=\"Password\">Password</label>\n                            <br>\n                            <input type=\"password\" placeholder=\"Enter Password Here\" [(ngModel)]=\"password\">\n                            <br>\n\n                           <div class=\"row\">\n                               <div class=\"col-xs-6 col-xs-offset-2\">\n                                 <i class=\"btn btn-primary pull-right\" (click)=\"login()\"> Log In </i>\n                               </div>\n                                \n                           </div>\n                    </div>\n                        <div id=\"SignUpTab\" class=\"tab-pane fade\">\n                              <label for=\"userName\">User Name</label>\n                            <br>\n                            <input type=\"text\" placeholder=\"Enter User Name Here\" [(ngModel)]=\"userName\">\n                             <br>\n                            <label for=\"Email\">Email</label>\n                            <br>\n                            <input type=\"text\" placeholder=\"Enter Email Here\" [(ngModel)]=\"email\">\n                             <br>\n                            <label for=\"Password\">Password</label>\n                            <br>\n                            <input type=\"password\" placeholder=\"Enter Password Here\" [(ngModel)]=\"password\">\n                            <br>\n                             <label for=\"rePassword\">Re Enter Password</label>\n                            <br>\n                            <input type=\"password\" placeholder=\"Enter Password Here\" [(ngModel)]=\"repassword\">\n                            <br>\n                             <label for=\"cellNum\">Cell phone</label>\n                            <br>\n                            <input type=\"number\" placeholder=\"Cell Number Here\" [(ngModel)]=\"cellNum\">\n                            <br>\n                            <select class=\"form-control\" [(ngModel)]=\"typeSelected\" >\n                                <option *ngFor=\"let type of types;\">{{type}}</option>\n                                \n                            </select>\n                            <br>\n                            <div class=\"row\">\n                               <div class=\"col-xs-6 col-xs-offset-2\">\n                                <i class=\"btn btn-success pull-right\" (click)=\"signup()\"> Sign Up </i>\n                               </div>\n                           </div>\n                            \n                    </div>\n                </div> \n        </div>\n    </div>\n</div> -->\n\n  \n    <md-progress-bar mode=\"indeterminate\" color=\"warn\" *ngIf=\"showSpinner\"></md-progress-bar>\n        \n<md-card class=\"cart-form\" *ngIf=\"!showSignUp\" >\n  <md-card-title style=\"border-left:6px solid red;padding-left: 23px;color: red;\">\n        \n   LOGIN\n    </md-card-title>\n\t\n  <md-card-content>\n  <p *ngIf=\"error!='hide'\" id=\"error\">{{error}}</p>\n    <form class=\"example-form\"  #f=\"ngForm\" (ngSubmit)=\"onSubmitLogin(f.value)\">\n\n    <md-input-container class=\"example-half-width\"  color=\"accent\">\n      <input mdInput placeholder=\"EMAIL\" name=\"email\" [(ngModel)]=\"email\" required>\n      <br>\n    </md-input-container>\n    <md-input-container class=\"example-half-width\"  color=\"accent\">\n      <input mdInput placeholder=\"PASSWORD\" name=\"password\" type=\"password\" [(ngModel)]=\"password\" required>\n      <br>\n    </md-input-container>\n\n      <md-grid-list cols=\"2\" rowHeight=\"2:1\" id=\"action\">\n       <md-grid-tile colspan=\"2\"> <button md-raised-button style=\"float:left; width:100%;\" color=\"primary\" type=\"submit\">LOG IN</button></md-grid-tile>\n      </md-grid-list>\n\n    </form>\n    </md-card-content>\n  <md-card-actions>\n    <span>Not a member?</span> <button md-button  color=\"accent\" (click)=\"signupEnable()\"> Click here to Sign Up </button>\n    </md-card-actions>\n</md-card>\n\n\n  \n  \n               \n<md-card class=\"cart-form\" *ngIf=\"showSignUp\">\n  <md-card-title style=\"border-left:6px solid red;padding-left: 23px;color: red;\">\n        \n   SIGN UP\n    </md-card-title>\n\t\n  <md-card-content>\n  <p *ngIf=\"error!='hide'\" id=\"error\">{{error}}</p>\n    <form class=\"example-form\"  #f=\"ngForm\" (ngSubmit)=\"onSubmitLogin(f.value)\">\n  <md-input-container class=\"example-half-width\"  color=\"accent\">\n      <input mdInput placeholder=\"USER NAME\" name=\"userName\" [(ngModel)]=\"userName\" >\n      <br>\n    </md-input-container>\n    <md-input-container class=\"example-half-width\"  color=\"accent\">\n      <input mdInput placeholder=\"EMAIL\" name=\"email\" [(ngModel)]=\"email\">\n      <br>\n    </md-input-container>\n    <md-input-container class=\"example-half-width\"  color=\"accent\">\n      <input mdInput placeholder=\"PASSWORD\" name=\"password\" type=\"password\" [(ngModel)]=\"password\">\n      <br>\n    </md-input-container>\n      <md-select placeholder=\"User Role\"  color=\"accent\" [(ngModel)]=\"typeSelected\" name=\"type\">\n        <md-option *ngFor=\"let role of types\" [value]=\"role\">\n          {{ role }}\n        </md-option>\n      </md-select>\n   \n        <md-grid-list cols=\"2\" rowHeight=\"2:1\" id=\"action\">\n       <md-grid-tile colspan=\"2\"> <button md-raised-button style=\"float:left; width:100%;\" color=\"primary\"  (click)=\"signup()\">SIGN UP</button></md-grid-tile>\n      </md-grid-list>\n    \n\n    </form>\n    </md-card-content>\n  <md-card-actions>\n    <span>Already a member?</span> <button md-button  color=\"accent\" (click)=\"signupEnable()\"> Click here to Login </button>\n    </md-card-actions>\n</md-card>\n\n\n  \n  "

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(router, authService, af) {
        var _this = this;
        this.router = router;
        this.authService = authService;
        this.af = af;
        this.showSignUp = false;
        this.types = ['Admin', 'Resident'];
        this.typeSelected = this.types[0];
        this.showSpinner = false;
        this.authService.getisLoggedIn().then(function (success) {
            _this.showSpinner = true;
            if (_this.authService.isLoggedIn) {
                _this.af.list('/users', { preserveSnapshot: true }).subscribe(function (snapshots) {
                    snapshots.forEach(function (snapshot) {
                        if (snapshot.val().uid == _this.authService.uid) {
                            _this.authService.userName = snapshot.val().userName;
                            console.log('' + ['/' + snapshot.val().type.toLowerCase()]);
                            _this.router.navigate(['/' + snapshot.val().type.toLowerCase()]);
                        }
                    });
                });
            }
            else {
                _this.showSpinner = false;
                console.log(_this.authService.isLoggedIn);
            }
        });
    }
    LoginComponent.prototype.addTodo = function (email, type, uid, userName) {
        this.todos$.push({ userName: userName, type: type, uid: uid, email: email });
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.todos$ = this.af.list('/users');
    };
    LoginComponent.prototype.signup = function () {
        var _this = this;
        if (this.userName == "" || this.email == "" || this.password == "") {
            this.error = "ALL FIELDS ARE REQUIRED";
            return false;
        }
        else {
            if (this.password) {
                this.showSpinner = true;
                try {
                    var err = this.authService.signup(this.email, this.password).then(function (success) {
                        _this.addTodo(_this.email, _this.typeSelected, _this.authService.uid, _this.userName);
                        console.log("data inserted", _this.email, _this.typeSelected, _this.authService.uid, _this.userName);
                        _this.authService.userName = _this.userName;
                        if (_this.typeSelected == "Admin") {
                            _this.af.list('/usersDetails').push({ uid: _this.authService.uid, name: _this.userName, cellNum: _this.cellNum, key: "" });
                            _this.af.list('/usersDetails', { preserveSnapshot: true }).subscribe(function (snapshots) {
                                snapshots.forEach(function (snapshot) {
                                    if (snapshot.val().uid == _this.authService.uid) {
                                        _this.af.object('/usersDetails/' + snapshot.key)
                                            .update({ key: snapshot.key }).then(function (success) { return _this.onSubmitLogin('a'); });
                                    }
                                });
                            });
                        }
                        else if (_this.typeSelected == "Resident") {
                            _this.af.list('/usersDetails_resident').push({ uid: _this.authService.uid, name: _this.userName, address: "", cellNum: _this.cellNum, key: "" });
                            _this.af.list('/usersDetails_resident', { preserveSnapshot: true }).subscribe(function (snapshots) {
                                snapshots.forEach(function (snapshot) {
                                    if (snapshot.val().uid == _this.authService.uid) {
                                        _this.af.object('/usersDetails_resident/' + snapshot.key)
                                            .update({ key: snapshot.key }).then(function (success) { return _this.onSubmitLogin('a'); });
                                    }
                                });
                            });
                        }
                    }, function (error) { _this.error = error; _this.showSpinner = false; } //"Email/Password not correct!"
                    );
                }
                catch (e) { }
                finally {
                    this.showSpinner = true;
                    this.router.navigate(['/' + this.typeSelected.toLowerCase()]);
                }
            }
            else
                this.error = "Password donot match";
        }
    };
    LoginComponent.prototype.signupEnable = function () {
        this.showSignUp = !this.showSignUp;
    };
    LoginComponent.prototype.onSubmitLogin = function (data) {
        var _this = this;
        try {
            this.showSpinner = true;
            var tf = false;
            var viewed = false;
            this.authService.login(this.email, this.password).then(function (success) {
                _this.af.list('/users', { preserveSnapshot: true })
                    .subscribe(function (snapshots) {
                    snapshots.forEach(function (snapshot) {
                        if (snapshot.val().email == _this.email) {
                            _this.authService.userName = snapshot.val().userName;
                            tf = true;
                            _this.router.navigate(['/' + snapshot.val().type.toLowerCase()]);
                        }
                    });
                    viewed = true;
                });
            }, function (error) { _this.error = "Email/Password not correct!"; _this.showSpinner = false; });
        }
        catch (e) {
            this.error = e;
            this.showSpinner = false;
        }
        finally {
            if (!tf && viewed) {
                this.error = "Account not found";
                this.showSpinner = true;
                this.logout();
            }
        }
    };
    LoginComponent.prototype.logout = function () {
        this.authService.logout();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/resident/resident.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-fill-remaining-space {\r\n\r\n  -webkit-box-flex: 1;\r\n\r\n      -ms-flex: 1 1 ;\r\n\r\n          flex: 1 1 ;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/resident/resident.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n\n     <span>Parking App</span>\n     <div class=\"button-row\" fxLayout=\"row\" fxShow=\"false\" fxShow.gt-sm >\n        <button md-button [routerLink]=\"['/resident', {outlets: {'userOutlet': ['setfeedback']}}]\">Send FeedBack</button>\n        <button md-button [routerLink]=\"['/resident', {outlets: {'userOutlet': ['userbooking']}}]\">View Bookings</button>\n        <button md-button [routerLink]=\"['/resident', {outlets: {'userOutlet': ['viewfeedback']}}]\">View FeedBack</button>\n        <button md-button [routerLink]=\"['/resident', {outlets: {'userOutlet': ['ground']}}]\">View Areas</button>\n        \n    </div>\n\n    <button md-button [md-menu-trigger-for]=\"NavMenu\" fxHide=\"false\" fxHide.gt-sm>\n     <md-icon>menu</md-icon>\n    </button>\n    <md-menu x-position=\"before\" #NavMenu=\"mdMenu\" >\n      <button md-button [routerLink]=\"['/resident', {outlets: {'userOutlet': ['setfeedback']}}]\">Send FeedBack</button>\n        <button md-button [routerLink]=\"['/resident', {outlets: {'userOutlet': ['userbooking']}}]\">View Bookings</button>\n        <button md-button [routerLink]=\"['/resident', {outlets: {'userOutlet': ['viewfeedback']}}]\">View FeedBack</button>\n        <button md-button [routerLink]=\"['/resident', {outlets: {'userOutlet': ['ground']}}]\">View Areas</button>\n    </md-menu>\n\n\n     <span class=\"example-fill-remaining-space\"></span>\n\n     <div fxLayout=\"row\" fxShow=\"false\" fxShow.gt-sm>\n         <span>{{authService.userName}}</span>\n     <button md-button [md-menu-trigger-for]=\"menu\">         \n        <md-icon>more_vert</md-icon>\n     </button>\n        \n     </div>\n\n     <button md-button [md-menu-trigger-for]=\"menu\"  fxHide=\"false\" fxHide.gt-sm>\n            <span>{{authService.userName}}</span><md-icon>more_vert</md-icon>\n     </button>\n       <md-menu #menu=\"mdMenu\" x-position=\"before\" >\n            <!-- <button md-menu-item (click)=\"setDisplayProfile()\">\n              <md-icon>fingerprint</md-icon>\n              <span>Edit Profile</span>\n            </button> -->\n            <button md-menu-item  (click)=\"logout()\">\n              <md-icon>power_settings_new</md-icon>\n              <span>Log Out</span>\n            </button>\n       </md-menu>    \n</md-toolbar> \n\n\n\n<!-- Alert MSG  -->\n<div  *ngIf=\"isformSubmitted\">\n  <div  *ngIf=\"isCorrect;then success;else danger;\" style=\"bottom:0px;position: absolute;width: 100%;\">\n  </div>\n</div>\n<ng-template #success>\n  <div class=\"alert alert-dismissible alert-success text-center msgShow\" style=\"bottom:0px;position: absolute;width: 100%;\" >\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"changeFlag()\">&times;</button>\n  <strong> Updated successfully!</strong>\n  </div>\n</ng-template>\n<ng-template #danger>\n  <div class=\"alert alert-dismissible alert-danger text-center msgShow\" style=\"bottom:0px;position: absolute;width: 100%;\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"changeFlag()\">&times;</button>\n  <strong> Update Failure!</strong>\n  </div>\n</ng-template>\n<!-- Alert MSG  -->\n\n<router-outlet name=\"userOutlet\"></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/resident/resident.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResidentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResidentComponent = (function () {
    function ResidentComponent(router, authService, af) {
        this.router = router;
        this.authService = authService;
        this.af = af;
        this.details = { uid: "", name: "", address: "", cellNum: "", key: "" };
    }
    ResidentComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.userName == "") {
            this.af.list('/users', { preserveSnapshot: true }).subscribe(function (snapshots) {
                snapshots.forEach(function (snapshot) {
                    if (snapshot.val().uid == _this.authService.uid) {
                        _this.authService.userName = snapshot.val().userName;
                    }
                });
            });
        }
        this.af.list('/usersDetails', { preserveSnapshot: true }).subscribe(function (snapshots) {
            snapshots.forEach(function (snapshot) {
                if (snapshot.val().uid == _this.authService.uid) {
                    _this.details = snapshot.val();
                    _this.details.key = snapshot.key;
                    _this.authService.key = snapshot.key;
                }
            });
        });
    };
    ResidentComponent.prototype.logout = function () {
        var _this = this;
        this.authService.logout().then(function (success) { return _this.router.navigate(['/login']); });
    };
    return ResidentComponent;
}());
ResidentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-resident',
        template: __webpack_require__("../../../../../src/app/resident/resident.component.html"),
        styles: [__webpack_require__("../../../../../src/app/resident/resident.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object])
], ResidentComponent);

var _a, _b, _c;
//# sourceMappingURL=resident.component.js.map

/***/ }),

/***/ "../../../../../src/app/resident/set-feedback/set-feedback.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " .cart-form {\r\n\r\n    width: 30%;\r\n    min-width: 178px;\r\n    position: absolute;\r\n    left: 30%;\r\n    top: 90px;\r\n    padding: 40px 1px;\r\n}\r\nmd-input-container {\r\n\r\n        width: 80%;\r\n    padding: 0px 5px 0px 15px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/resident/set-feedback/set-feedback.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card class=\"cart-form\">\n  <md-card-header style=\"border-left:6px solid red;padding-left: 23px;color: red;\">\n    <md-card-title style=\"text-align:center;\">FEEDBACK</md-card-title>\n  </md-card-header>\n \n  <md-card-content>\n     <form class=\"example-form\"  #f=\"ngForm\" (ngSubmit)=\"onSubmitFeedback(f.value)\">\n\n    <md-input-container class=\"example-half-width\"  color=\"accent\">\n       <input mdInput rows=\"15\" type=\"text\" rows=\"15\" name=\"notifytext\" ngModel placeholder=\"Notification here\">\n      <br>\n    </md-input-container>\n\n\n      <md-grid-list cols=\"2\" rowHeight=\"2:1\" id=\"action\">\n       <md-grid-tile colspan=\"1\"> <button md-raised-button style=\"float:left; width:100%;\" color=\"warn\" type=\"reset\">Cancel</button></md-grid-tile>\n       <md-grid-tile colspan=\"1\"> <button md-raised-button style=\"float:left; width:100%;\" type=\"submit\" color=\"primary\" >Send  <md-icon style=\" right: 5px;top: 5px;position: absolute;\">send</md-icon> </button></md-grid-tile>\n      </md-grid-list>\n\n    </form>\n  </md-card-content>\n\n</md-card>\n\n\n\n<!-- <form class=\"form-horizontal col-xs-12 col-md-6 col-md-offset-2\" #f=\"ngForm\" (ngSubmit)=\"onSubmitFeedback(f.value)\" >\n  <fieldset >\n    <hr>\n    <legend class=\"text-center\">FEEDBACK</legend>\n    \n\n    <div class=\"form-group\">\n      <div class=\"col-xs-9 col-xs-offset-3\">\n        <textarea class=\"form-control\" rows=\"15\"  name=\"notifytext\" ngModel placeholder=\"Notification here\"></textarea>\n        <span class=\"help-block\">Feedback Description.</span>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <div class=\"col-xs-10 col-md-9 col-md-offset-3\">\n        <button type=\"reset\" class=\"btn btn-warning\">Cancel</button>\n        <button type=\"submit\" class=\"btn btn-primary pull-right\">Update!</button>\n      </div>\n    </div>\n  </fieldset>\n</form> -->\n<!-- Alert MSG  -->\n<div  *ngIf=\"isformSubmitted\">\n  <div  *ngIf=\"isCorrect;then success;else danger;\" style=\"bottom:0px;position: absolute;width: 100%;\">\n  </div>\n</div>\n<ng-template #success>\n  <div class=\"alert alert-dismissible alert-success text-center msgShow\" style=\"bottom:0px;position: absolute;width: 100%;\" >\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"changeFlag()\">&times;</button>\n  <strong> Feedback successfully!</strong>\n  </div>\n</ng-template>\n<ng-template #danger>\n  <div class=\"alert alert-dismissible alert-danger text-center msgShow\" style=\"bottom:0px;position: absolute;width: 100%;\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"changeFlag()\">&times;</button>\n  <strong> Feedback Failure!</strong>\n  </div>\n</ng-template>\n<!-- Alert MSG  -->\n"

/***/ }),

/***/ "../../../../../src/app/resident/set-feedback/set-feedback.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetFeedbackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__date_service__ = __webpack_require__("../../../../../src/app/date.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SetFeedbackComponent = (function () {
    function SetFeedbackComponent(authService, af, DateService) {
        this.authService = authService;
        this.af = af;
        this.DateService = DateService;
        this.isformSubmitted = false;
        this.isCorrect = false;
    }
    SetFeedbackComponent.prototype.ngOnInit = function () {
    };
    SetFeedbackComponent.prototype.onSubmitFeedback = function (data) {
        var _this = this;
        this.isCorrect = false;
        this.af.list('/feedbacks/').push({ text: data.notifytext, owner: this.authService.userName, date: this.DateService.getCurrentDate(), key: "" }).then(function (success) {
            _this.isCorrect = true;
            _this.af.list('/feedbacks', { preserveSnapshot: true }).subscribe(function (snapshots) {
                _this.af.object('/feedbacks/' + snapshots[snapshots.length - 1].key)
                    .update({ key: snapshots[snapshots.length - 1].key, replied: 'no' });
            });
            _this.isformSubmitted = true;
        }, function (error) {
            _this.isCorrect = false;
            _this.isformSubmitted = true;
        });
    };
    return SetFeedbackComponent;
}());
SetFeedbackComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-set-feedback',
        template: __webpack_require__("../../../../../src/app/resident/set-feedback/set-feedback.component.html"),
        styles: [__webpack_require__("../../../../../src/app/resident/set-feedback/set-feedback.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__date_service__["a" /* DateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__date_service__["a" /* DateService */]) === "function" && _c || Object])
], SetFeedbackComponent);

var _a, _b, _c;
//# sourceMappingURL=set-feedback.component.js.map

/***/ }),

/***/ "../../../../../src/app/resident/view-feedback/view-feedback.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.date\r\n{\r\n    font-weight: bolder;       \r\n    float:left;\r\n    clear:both;\r\n    color: #ADAD0C;\r\n}\r\n\r\n#container\r\n{\r\n    background-color: honeydew;\r\n    padding: 20px 29px 14px 59px;\r\n     border:1px ridge #dfdfdf;\r\n    margin-top: 8px;\r\n     box-shadow: -1px 4px 5px 0 rgba(0, 0, 0, 0.2), 3px 6px 5px 0 rgba(0, 0, 0, 0.19); \r\n}\r\nmd-card\r\n{\r\n    text-align: center;\r\n}\r\n.hh2\r\n{\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n    padding: 2px 0px;\r\n    margin:0px 0px 2px 0px;\r\n    width:100%;\r\n\r\n    \r\n}\r\n.example-card .content\r\n{\r\n    font-size: 20px;\r\n    padding: 2px 0px;\r\n    margin:0px 0px 2px 0px;\r\n    width:100%;\r\n    text-align: center;\r\n} \r\n#container .list-item\r\n{\r\n    \r\n    margin-top: 15px;\r\n    padding-left: 25px;\r\n    width:100%; \r\n   font-weight: 500;\r\n\r\n}\r\n.example-card\r\n{\r\n    width: 95%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/resident/view-feedback/view-feedback.component.html":
/***/ (function(module, exports) {

module.exports = "<md-progress-bar mode=\"indeterminate\" color=\"warn\" *ngIf=\"showSpinner\"></md-progress-bar>\n  \n<legend class=\"text-center\">FEEDBACKS</legend>\n      <md-grid-list cols=\"2\" rowHeight=\"300px\">\n        <ng-container *ngFor=\"let post of (GetNotificationService.notifications$ | async); let index=index; \">\n        <md-grid-tile *ngIf=\"post.owner==authService.userName\" >\n            <md-card class=\"example-card\" >\n\n                <md-card-content >\n                <p class=\"hh2\">{{post.owner}}</p>\n                    <span class=\"content\">{{post.text}}</span>\n                \n                </md-card-content>\n                <md-card-actions>\n                    <i class=\"h6 date\"><b>Date</b>:{{post.date}}</i>\n                </md-card-actions>\n                </md-card>\n        </md-grid-tile>\n</ng-container>\n</md-grid-list>\n\n\n    <!-- <div class=\"col-xs-12 col-md-8 col-md-offset-2\" *ngFor=\"let post of (GetNotificationService.notifications$ | async); let index=index;\">\n      <ng-container  id=\"container\">\n        <div class=\"row\" *ngIf=\"post.owner==authService.userName\">\n   \n          <div class=\"listgroup list-group\">\n            <p class=\"list-item text-center h3\"> {{post.text}}</p>      \n          </div>\n          \n        <div class=\"footer\">\n          <i class=\"h6 date\"><b>Date</b>:{{post.date}}</i>\n          <span class=\"companyName\">{{post.owner}}</span>\n       \n        </div>\n    </div>\n      </ng-container>\n     \n   </div> -->"

/***/ }),

/***/ "../../../../../src/app/resident/view-feedback/view-feedback.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewFeedbackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__get_notification_service__ = __webpack_require__("../../../../../src/app/get-notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewFeedbackComponent = (function () {
    function ViewFeedbackComponent(authService, GetNotificationService) {
        this.authService = authService;
        this.GetNotificationService = GetNotificationService;
        this.showSpinner = true;
    }
    ViewFeedbackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.GetNotificationService.notifications$.subscribe(function () { return _this.showSpinner = false; });
    };
    return ViewFeedbackComponent;
}());
ViewFeedbackComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-view-feedback',
        template: __webpack_require__("../../../../../src/app/resident/view-feedback/view-feedback.component.html"),
        styles: [__webpack_require__("../../../../../src/app/resident/view-feedback/view-feedback.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__get_notification_service__["a" /* GetNotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__get_notification_service__["a" /* GetNotificationService */]) === "function" && _b || Object])
], ViewFeedbackComponent);

var _a, _b;
//# sourceMappingURL=view-feedback.component.js.map

/***/ }),

/***/ "../../../../../src/app/resident/view-user-bookings/view-user-bookings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/resident/view-user-bookings/view-user-bookings.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- View Booking List  -->\n<div class=\"bookingView\" >\n<table class=\"table table-striped table-hover \">\n  <thead>\n    <tr>\n      <th>Sr#</th>\n      <th>Area Name</th>\n      <th>Slot #</th>\n      <th>Start Date</th>\n      <th>Start Time</th>\n      <th>End Time</th>\n      <th>End Date</th>\n      <th>Actions</th>\n    </tr>\n  </thead>\n  <tbody >\n     {{GetAllBookingsService.startCounter()}}\n    <ng-container *ngFor=\"let bhabha of (GetAllBookingsService.srNo );let j=index;\">\n  <md-progress-bar mode=\"indeterminate\" color=\"warn\" *ngIf=\"GetAllBookingsService.counter>GetAllBookingsService.srNo.length-1\"></md-progress-bar>\n\n    <tr *ngFor=\"let detail of (GetAllBookingsService.AllparticularareasSlotsData$[j] | async);let i=index;\">\n      \n      <ng-container *ngIf=\"detail?.startDate && detail?.rUid==authService.uid\">\n    {{GetAllBookingsService.incCounter()}}\n      \n      <td>{{GetAllBookingsService.counter}}</td>\n      <td>{{detail.areaName}}</td>\n      <td>{{GetAllBookingsService.displayIndex[GetAllBookingsService.counter-1]}}</td>\n      <td>{{detail.startDate}}</td>\n      <td>{{detail.startTime}}</td>\n      <td>{{detail.endTime}}</td>\n      <td>{{detail.endDate}}</td>   \n      <td> <button md-raised-button style=\"float:left;\" color=\"accent\" data-target=\"#confirmCancelAction\" data-toggle=\"modal\" (click)=\"loadAlert(detail,i)\">CANCEL</button></td>\n      \n    </ng-container>\n         \n    </tr>\n    </ng-container>\n  \n   <!--Alert Cancel-->\n        <div class=\"modal fade col-xs-12\" tabindex=\"-1\" id=\"confirmCancelAction\" data-keyboard=\"false\" data-backdrop=\"static\">\n            <div class=\"modal-dialog modal-lg\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"resetAlert()\">\n                            &times;\n                        </button>\n                        <h4 class=\"modal-title\" style=\"text-align:center; color:red;\">Confirmation</h4>\n                    </div>\n                    <div class=\"modal-body\">\n                      DO YOU WANT TO CANCEL BOOKING NO:{{index+1}}\n                    </div>\n                    <div class=\"modal-footer\">\n                     <md-grid-list cols=\"2\" rowHeight=\"2:1\" id=\"action\">\n                         <md-grid-tile colspan=\"1\"> <button md-raised-button style=\"float:left; width:100%;\" color=\"primary\" class=\"close\" data-dismiss=\"modal\" (click)=\"resetAlert()\">Close</button></md-grid-tile>\n                         <md-grid-tile colspan=\"1\"> <button md-raised-button style=\"float:right; width:100%;\" color=\"accent\" (click)=\"cancelBooking()\" data-dismiss=\"modal\">Cancel</button></md-grid-tile>\n                    </md-grid-list>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n      <!--Alert Cancel-->\n  </tbody>\n</table> \n</div>\n<!-- View Booking List  -->\n\n\n"

/***/ }),

/***/ "../../../../../src/app/resident/view-user-bookings/view-user-bookings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewUserBookingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__get_all_bookings_service__ = __webpack_require__("../../../../../src/app/get-all-bookings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewUserBookingsComponent = (function () {
    function ViewUserBookingsComponent(authService, GetAllBookingsService) {
        this.authService = authService;
        this.GetAllBookingsService = GetAllBookingsService;
        this.showSpinner = true;
        this.index = -1;
        this.counter = 0;
    }
    ViewUserBookingsComponent.prototype.ngOnInit = function () {
        this.GetAllBookingsService.startCounter();
        console.log(this.authService.userName);
    };
    ViewUserBookingsComponent.prototype.getCounter = function () {
        return this.counter++;
    };
    ViewUserBookingsComponent.prototype.cancelBooking = function () {
        if (this.detail) {
            console.log(this.detail);
            if (this.GetAllBookingsService.deleteBooking(this.detail)) {
                this.resetAlert();
                this.counter--;
            }
        }
    };
    ViewUserBookingsComponent.prototype.resetAlert = function () {
        this.index = -1;
        this.detail = "";
    };
    ViewUserBookingsComponent.prototype.loadAlert = function (detail, i) {
        this.index = i;
        this.detail = detail;
    };
    return ViewUserBookingsComponent;
}());
ViewUserBookingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-view-user-bookings',
        template: __webpack_require__("../../../../../src/app/resident/view-user-bookings/view-user-bookings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/resident/view-user-bookings/view-user-bookings.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__get_all_bookings_service__["a" /* GetAllBookingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__get_all_bookings_service__["a" /* GetAllBookingsService */]) === "function" && _b || Object])
], ViewUserBookingsComponent);

var _a, _b;
//# sourceMappingURL=view-user-bookings.component.js.map

/***/ }),

/***/ "../../../../../src/assets/grass.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "grass.bbd87dd42b5e26b04cc0.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyC-bGc2IuozdU-JJCemT5WpIUBzgnJYAxU",
        authDomain: "angularparking.firebaseapp.com",
        databaseURL: "https://angularparking.firebaseio.com",
        projectId: "angularparking",
        storageBucket: "angularparking.appspot.com",
        messagingSenderId: "338315488697"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map