(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep span.stars, ::ng-deep span.stars span {\r\n    display: block;\r\n    background: url('stars.png') 0 -16px repeat-x;\r\n    width: 160px;\r\n    height: 16px;\r\n}\r\n::ng-deep span.stars span { background-position: 0 0}\r\n::ng-deep input[type=\"text\"], ::ng-deep textarea{\r\n    padding: 15px ;\r\n    margin:10px 0;\r\n    outline:none;\r\n    resize: none;\r\n}\r\n::ng-deep input[type=\"text\"]::-webkit-input-placeholder, ::ng-deep textarea::-webkit-input-placeholder{text-align: center}\r\n::ng-deep input[type=\"text\"]::-ms-input-placeholder, ::ng-deep textarea::-ms-input-placeholder{text-align: center}\r\n::ng-deep input[type=\"text\"]::placeholder, ::ng-deep textarea::placeholder{text-align: center}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info/info.component */ "./src/app/info/info.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _info_info_component__WEBPACK_IMPORTED_MODULE_6__["InfoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
                    { path: 'info/:id', component: _info_info_component__WEBPACK_IMPORTED_MODULE_6__["InfoComponent"] }
                ])
            ],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_7__["AppService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppService = /** @class */ (function () {
    function AppService(http) {
        var _this = this;
        this.http = http;
        this.fetchPhotos = function (skip) {
            return _this.http.get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=c322d705e685edd1144876851dbb1474&text=food&extras=description%2Cowner_name%2Curl_s&per_page=30&page=" + skip + "&format=json&nojsoncallback=1");
        };
        this.setInfoInLocalStorage = function (data) {
            localStorage.setItem('photos', JSON.stringify(data));
        };
        this.getInfoFromLocalStorage = function () {
            return JSON.parse(localStorage.getItem('photos'));
        };
    }
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-5 pb-5\">\n<div class=\"row\">\n  <div class=\"col-md-3\" *ngFor=\"let pic of photos\">\n    <figure [routerLink]=\"['/info',pic.id]\" style=\"cursor:pointer\">\n      <img class=\"w-100 pb-3\" style=\"height: 40vh;\" src=\"{{pic.url_s}}\" alt=\"\">\n\n      <figcaption class=\"d-flex justify-content-center\" style=\"height: 10vh\">\n        <span class=\"stars \"><span [ngStyle]=\"{'width':getRating(pic.rating || 0)}\"></span> </span>\n      </figcaption>\n    </figure>\n  </div>\n</div>\n  <span class=\"d-flex justify-content-center\" *ngIf=\"!load\"><a class=\"btn btn-warning\" (click)=\"getPhotos()\">More Pictures</a></span>\n  <loader *ngIf=\"load\"></loader>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(appService, toastr) {
        var _this = this;
        this.appService = appService;
        this.toastr = toastr;
        this.skip = 0;
        this.photos = [];
        this.load = false;
        this.getPhotos = function () {
            var previousPhotos;
            if (_this.photos == undefined || _this.photos == null)
                previousPhotos = [];
            else
                previousPhotos = _this.appService.getInfoFromLocalStorage();
            _this.load = true;
            _this.appService.fetchPhotos(_this.skip += 1).subscribe(function (data) {
                if (data.stat == "ok") {
                    _this.photos = previousPhotos.concat(data.photos.photo);
                    _this.toastr.success('Photos has been fetched successfully!');
                }
                else if (data.stat == 'fail') {
                    _this.photos = previousPhotos;
                    _this.toastr.warning(data.message);
                }
                setTimeout(function () { _this.load = false; }, 1400);
                _this.appService.setInfoInLocalStorage(_this.photos);
            });
        };
        this.getRating = function (rating) { return rating * 10 + "%"; };
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.photos = this.appService.getInfoFromLocalStorage();
        if (this.photos == null || this.photos == undefined || this.photos.length == 0)
            this.getPhotos();
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/info/info.component.css":
/*!*****************************************!*\
  !*** ./src/app/info/info.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "figure {display: flex;flex-flow: column;justify-content: center}\r\n.box{box-shadow: 0 3px 12px rgba(0, 0, 0, 0.25);padding:10px}\r\nform .stars { background: url('stars.png') repeat-x 0 -16px; width: 160px; margin: 0 auto }\r\nform .stars input[type=\"radio\"] { position: absolute; opacity: 0; filter: alpha(opacity=0) }\r\nform .stars label {\r\n    display: block;\r\n    width: 16px;\r\n    height: 16px;\r\n    margin: 0 !important;\r\n    padding: 0 !important;\r\n    text-indent: -999em;\r\n    float: left;\r\n    position: relative;\r\n    z-index: 10;\r\n    background: transparent !important;\r\n    cursor: pointer;\r\n}\r\nform .stars input[type=\"radio\"].star-10:checked ~ span { width: 100% }\r\nform .stars input[type=\"radio\"].star-9:checked ~ span { width: 90%  }\r\nform .stars input[type=\"radio\"].star-8:checked ~ span { width: 80%  }\r\nform .stars input[type=\"radio\"].star-7:checked ~ span { width: 70%  }\r\nform .stars input[type=\"radio\"].star-6:checked ~ span { width: 60%  }\r\nform .stars input[type=\"radio\"].star-5:checked ~ span { width: 50%  }\r\nform .stars input[type=\"radio\"].star-4:checked ~ span { width: 40%  }\r\nform .stars input[type=\"radio\"].star-3:checked ~ span { width: 30%  }\r\nform .stars input[type=\"radio\"].star-2:checked ~ span { width: 20%  }\r\nform .stars input[type=\"radio\"].star-1:checked ~ span { width: 10%  }\r\nform .stars label.star-10:hover ~ span { width: 100% !important }\r\nform .stars label.star-9:hover ~ span { width: 90% !important  }\r\nform .stars label.star-8:hover ~ span { width: 80% !important  }\r\nform .stars label.star-7:hover ~ span { width: 70% !important  }\r\nform .stars label.star-6:hover ~ span { width: 60% !important  }\r\nform .stars label.star-5:hover ~ span { width: 50% !important }\r\nform .stars label.star-4:hover ~ span { width: 40% !important  }\r\nform .stars label.star-3:hover ~ span { width: 30% !important  }\r\nform .stars label.star-2:hover ~ span { width: 20% !important  }\r\nform .stars label.star-1:hover ~ span { width: 10% !important  }\r\nform .stars span {\r\n    display: block;\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    height: 16px;\r\n    background: url('stars.png') repeat-x -16px 0;\r\n    transition: width 0.3s;\r\n}"

/***/ }),

/***/ "./src/app/info/info.component.html":
/*!******************************************!*\
  !*** ./src/app/info/info.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-5\">\n  <figure *ngIf=\"pic!=undefined\">\n    <img src=\"{{pic.url_s}}\" alt=\"\" style=\"height:50vh;width:100%;\">\n    <span class=\"text-center\">\n      <h5>{{pic.title}}</h5><br>\n      <p>{{pic.description._content}}<br>\n      <i class=\"text-muted\">By : {{pic.ownername}} </i></p>\n      <div class=\" d-flex justify-content-center\"><span class=\"stars\"><span [ngStyle]=\"{'width':getRating(pic.rating ||0 )}\"></span></span></div>\n    </span><br>\n      <form id=\"ratingsForm\" class=\"d-flex flex-column p-3\">\n          <input class=\"box border-0\" type=\"text\" name=\"name\" maxlength=\"30\" [(ngModel)]=\"name\" placeholder=\"Your Name\" required /><br>\n          <div class=\"stars\">\n              <input type=\"radio\" name=\"star\" class=\"star-1\" id=\"star-1\" (click)=\"rating=1\"/>\n              <label class=\"star-1\" for=\"star-1\">1</label>\n              <input type=\"radio\" name=\"star\" class=\"star-2\" id=\"star-2\" (click)=\"rating=2\" />\n              <label class=\"star-2\" for=\"star-2\">2</label>\n              <input type=\"radio\" name=\"star\" class=\"star-3\" id=\"star-3\" (click)=\"rating=3\" />\n              <label class=\"star-3\" for=\"star-3\">3</label>\n              <input type=\"radio\" name=\"star\" class=\"star-4\" id=\"star-4\" (click)=\"rating=4\" />\n              <label class=\"star-4\" for=\"star-4\">4</label>\n              <input type=\"radio\" name=\"star\" class=\"star-5\" id=\"star-5\" (click)=\"rating=5\" />\n              <label class=\"star-5\" for=\"star-5\">5</label>\n              <input type=\"radio\" name=\"star\" class=\"star-6\" id=\"star-6\" (click)=\"rating=6\" />\n              <label class=\"star-6\" for=\"star-6\">6</label>\n              <input type=\"radio\" name=\"star\" class=\"star-7\" id=\"star-7\" (click)=\"rating=7\" />\n              <label class=\"star-7\" for=\"star-7\">7</label>\n              <input type=\"radio\" name=\"star\" class=\"star-8\" id=\"star-8\" (click)=\"rating=8\" />\n              <label class=\"star-8\" for=\"star-8\">8</label>\n              <input type=\"radio\" name=\"star\" class=\"star-9\" id=\"star-9\" (click)=\"rating=9\" />\n              <label class=\"star-9\" for=\"star-9\">9</label>\n              <input type=\"radio\" name=\"star\" class=\"star-10\" id=\"star-10\" (click)=\"rating=10\" />\n              <label class=\"star-10\" for=\"star-10\">10</label>\n              <span [ngStyle]=\"{'width':getRating(rating)}\"></span>\n          </div>\n          <textarea class=\"box border-0\" name=\"review\" placeholder=\"Your review about this picture \" cols=\"30\" [(ngModel)]=\"review\" rows=\"4\" maxlength=\"150\" required></textarea>\n          <div class=\"d-flex justify-content-center text-white\"><a class=\"btn btn-sm btn-secondary\" (click)=\"addReview()\">Post</a></div>\n      </form> \n      <div class=\"p-3\" *ngIf=\"pic.reviews!=undefined\">\n        <h6>RECENT REVIEWS</h6><br>\n        <span *ngFor=\"let r of pic.reviews\">\n          <p class=\"box\"> \n            Reviewed by : {{r.name}}<br>\n            Review : <span class=\"text-muted\">{{r.review}}</span><br> \n            <span class=\"d-inline-flex\">Rating : &nbsp;\n              <span class=\"stars \"><span [ngStyle]=\"{'width':getRating(r.rating || 0)}\"></span></span>\n            </span>\n          </p>\n        </span>\n      </div>\n  </figure>\n</div>"

/***/ }),

/***/ "./src/app/info/info.component.ts":
/*!****************************************!*\
  !*** ./src/app/info/info.component.ts ***!
  \****************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InfoComponent = /** @class */ (function () {
    function InfoComponent(appService, route, toastr) {
        var _this = this;
        this.appService = appService;
        this.route = route;
        this.toastr = toastr;
        this.photos = [];
        this.rating = 0;
        this.fetchInfo = function () {
            _this.index = _this.photos.map(function (p) { return p['id']; }).indexOf(_this.id);
            _this.pic = _this.photos[_this.index];
        };
        this.getRating = function (rating) { return rating * 10 + "%"; };
        this.addReview = function () {
            if (_this.name == null || _this.name == undefined || _this.name == '')
                _this.toastr.warning('Name Is Required');
            else if (_this.review == null || _this.review == undefined || _this.review == '')
                _this.toastr.warning('Review is Required');
            else {
                var data = { name: _this.name, review: _this.review, rating: _this.rating };
                if (_this.photos[_this.index].reviews == undefined)
                    _this.photos[_this.index]['reviews'] = [];
                if (_this.pic['rating'] == undefined || _this.pic['rating'] == null)
                    _this.pic['rating'] = _this.rating;
                else
                    _this.pic['rating'] = (_this.pic['rating'] + _this.rating) / 2;
                _this.pic['reviews'].unshift(data);
                _this.appService.setInfoInLocalStorage(_this.photos);
                _this.review = '';
                _this.name = '';
                _this.rating = 0;
                _this.toastr.success('Review has been added successfully');
            }
        };
    }
    InfoComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get('id');
        this.photos = this.appService.getInfoFromLocalStorage();
        this.fetchInfo();
    };
    InfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-info',
            template: __webpack_require__(/*! ./info.component.html */ "./src/app/info/info.component.html"),
            styles: [__webpack_require__(/*! ./info.component.css */ "./src/app/info/info.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "./src/app/shared/loader/loader.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/loader/loader.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#loader span{\r\n    line-height: 0;\r\n    font-size: 40px;\r\n    -webkit-animation-name: blink;\r\n            animation-name: blink;\r\n    -webkit-animation-duration: 1.4s;\r\n            animation-duration: 1.4s;\r\n    -webkit-animation-iteration-count:infinite;\r\n            animation-iteration-count:infinite;\r\n    -webkit-animation-fill-mode: both;\r\n            animation-fill-mode: both;\r\n}\r\n#loader span:nth-child(2) {\r\n    -webkit-animation-delay: .4s;\r\n            animation-delay: .4s;\r\n}\r\n#loader span:nth-child(3) {\r\n    -webkit-animation-delay: .8s;\r\n            animation-delay: .8s;\r\n}\r\n@-webkit-keyframes blink {\r\n    0% { opacity: .2 }\r\n    20% {opacity: 1 }\r\n    100% { opacity: .2 }\r\n}\r\n@keyframes blink {\r\n    0% { opacity: .2 }\r\n    20% {opacity: 1 }\r\n    100% { opacity: .2 }\r\n}"

/***/ }),

/***/ "./src/app/shared/loader/loader.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/loader/loader.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"loader\" class=\"text-center\"><span>.</span><span>.</span><span>.</span></div>"

/***/ }),

/***/ "./src/app/shared/loader/loader.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/loader/loader.component.ts ***!
  \***************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () { };
    LoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/shared/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.css */ "./src/app/shared/loader/loader.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/shared/loader/loader.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"]],
            exports: [_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\tests\bulbandkey\flickreviews\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map