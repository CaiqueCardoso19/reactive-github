(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet>\n</router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"search-content\">\n  <input type=\"search\" name=\"search\" class=\"search__input-field\" id=\"search\" [formControl]=\"searchForm\"\n    placeholder=\"Search\" />\n  <span class=\"search-content__hint\" *ngIf=\"hasError && searchForm.value.length > 0\">{{errorMessage}}</span>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-info/user-info.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-info/user-info.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"user-info\" *ngIf=\"userInfo\">\n  <div class=\"infos\">\n    <img class=\"avatar\" [src]=\"userInfo?.avatar_url\" alt=\"Imagem do usuário\" />\n    <div class=\"user-name\">\n      {{userInfo?.name}}\n    </div>\n  </div>\n\n  <div class=\"references\">\n    <div class=\"location\" *ngIf=\"userInfo?.location\" [attr.aria-label]=\"userInfo.location\">\n      <p>\n        <svg class=\"octicon octicon-location\" viewBox=\"0 0 12 16\" version=\"1.1\" width=\"12\" height=\"16\"\n          aria-hidden=\"true\">\n          <path fill-rule=\"evenodd\"\n            d=\"M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z\">\n          </path>\n        </svg>\n        {{userInfo?.location}}\n      </p>\n    </div>\n\n    <div class=\"company\" *ngIf=\"userInfo?.company\" [attr.aria-label]=\"userInfo.company\">\n      <p>\n        <svg class=\"octicon octicon-organization\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" height=\"16\"\n          aria-hidden=\"true\">\n          <path fill-rule=\"evenodd\"\n            d=\"M16 12.999c0 .439-.45 1-1 1H7.995c-.539 0-.994-.447-.995-.999H1c-.54 0-1-.561-1-1 0-2.634 3-4 3-4s.229-.409 0-1c-.841-.621-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.442.58 2.5 3c.058 2.41-.159 2.379-1 3-.229.59 0 1 0 1s1.549.711 2.42 2.088C9.196 9.369 10 8.999 10 8.999s.229-.409 0-1c-.841-.62-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.437.581 2.495 3c.059 2.41-.158 2.38-1 3-.229.59 0 1 0 1s3.005 1.366 3.005 4z\">\n          </path>\n        </svg>\n        {{userInfo?.company}}\n      </p>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-repos/user-repos.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-repos/user-repos.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Repositórios</h1>\n<div class=\"cards\">\n  <div class=\"card\" *ngFor=\"let repo of userRepos\">\n    <div class=\"name\" aria-label=\"nome\">\n      <svg viewBox=\"0 0 12 16\" version=\"1.1\" width=\"12\" height=\"16\" aria-hidden=\"true\">\n        <path fill-rule=\"evenodd\"\n          d=\"M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z\">\n        </path>\n      </svg>\n      <p>{{repo.name}}</p>\n    </div>\n    <div class=\"description\" aria-label=\"descrição\">\n      <p>{{repo.description}}</p>\n    </div>\n    <div class=\"stars\" aria-label=\"stars\">\n      <svg class=\"octicon octicon-star\" viewBox=\"0 0 14 16\" version=\"1.1\" width=\"14\" height=\"16\" role=\"img\">\n        <path fill-rule=\"evenodd\" d=\"M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z\">\n        </path>\n      </svg>\n      <p>{{repo.stargazers_count}}</p>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/templates/home/home.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/templates/home/home.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <header class=\"container__header\">\n    <app-search class=\"search-align\"></app-search>\n  </header>\n\n  <div class=\"container__side-bar\" *ngIf=\"userInfo\">\n    <app-user-info></app-user-info>\n  </div>\n\n  <div class=\"container__user-repos\" *ngIf=\"userInfo\">\n    <app-user-repos></app-user-repos>\n  </div>\n\n  <div class=\"container__fallback\" *ngIf=\"!userInfo\">\n    Procure algum usuário :)\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/api.ts":
/*!************************!*\
  !*** ./src/app/api.ts ***!
  \************************/
/*! exports provided: apiUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiUrl", function() { return apiUrl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const apiUrl = 'https://api.github.com';


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _templates_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/home/home.component */ "./src/app/templates/home/home.component.ts");




const routes = [{ path: '', component: _templates_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _templates_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./templates/home/home.component */ "./src/app/templates/home/home.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/user-info/user-info.component */ "./src/app/components/user-info/user-info.component.ts");
/* harmony import */ var _components_user_repos_user_repos_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/user-repos/user-repos.component */ "./src/app/components/user-repos/user-repos.component.ts");
/* harmony import */ var _components_search_search_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/search/search.service */ "./src/app/components/search/search.service.ts");
/* harmony import */ var _state_management_reducers_user_repos_reducer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./state-management/reducers/user-repos.reducer */ "./src/app/state-management/reducers/user-repos.reducer.ts");
/* harmony import */ var _state_management_reducers_user_info_reducer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./state-management/reducers/user-info.reducer */ "./src/app/state-management/reducers/user-info.reducer.ts");
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _templates_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"], _components_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_11__["UserInfoComponent"], _components_user_repos_user_repos_component__WEBPACK_IMPORTED_MODULE_12__["UserReposComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot({ userInfoState: _state_management_reducers_user_info_reducer__WEBPACK_IMPORTED_MODULE_15__["userInfoReducer"], userReposState: _state_management_reducers_user_repos_reducer__WEBPACK_IMPORTED_MODULE_14__["userReposReducer"] })
        ],
        providers: [_components_search_search_service__WEBPACK_IMPORTED_MODULE_13__["SearchService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/search/search.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".search-content {\n  padding: 13px 0 0 10px;\n}\n.search-content .search__input-field {\n  font-size: 15px;\n  display: block;\n  min-width: 300px;\n  height: 40px;\n  border: 1px solid #e8f0fe;\n  border-radius: 0.4rem;\n}\n.search-content__hint {\n  color: white;\n  font-size: 10px;\n  display: block;\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYWlxdWVyZWlzL2RldmVsb3Blci92b3RvcmFudGltL3JlYWN0aXZlLWdpdGh1Yi9zcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUNDRjtBRENFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDQ0o7QURHQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtY29udGVudCB7XG4gIHBhZGRpbmc6IDEzcHggMCAwIDEwcHg7XG5cbiAgLnNlYXJjaF9faW5wdXQtZmllbGQge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjMyLCAyNDAsIDI1NCk7XG4gICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xuICB9XG59XG5cbi5zZWFyY2gtY29udGVudF9faGludCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMHB4O1xufVxuIiwiLnNlYXJjaC1jb250ZW50IHtcbiAgcGFkZGluZzogMTNweCAwIDAgMTBweDtcbn1cbi5zZWFyY2gtY29udGVudCAuc2VhcmNoX19pbnB1dC1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U4ZjBmZTtcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xufVxuXG4uc2VhcmNoLWNvbnRlbnRfX2hpbnQge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search.service */ "./src/app/components/search/search.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var src_app_state_management_actions_user_info_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/state-management/actions/user-info.actions */ "./src/app/state-management/actions/user-info.actions.ts");
/* harmony import */ var src_app_state_management_actions_user_repos_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/state-management/actions/user-repos.actions */ "./src/app/state-management/actions/user-repos.actions.ts");









let SearchComponent = class SearchComponent {
    constructor(searchService, userStore, reposStore) {
        this.searchService = searchService;
        this.userStore = userStore;
        this.reposStore = reposStore;
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
    }
    ngOnInit() {
        this.searchForm.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(_ => this.searchUser(this.searchForm.value)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => this.setErrorMessage(error)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => error))
            .subscribe((response) => {
            this.hasError = false;
            this.userStore.dispatch(new src_app_state_management_actions_user_info_actions__WEBPACK_IMPORTED_MODULE_7__["SearchedUser"](response));
        });
        this.searchForm.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(_ => this.searchRepos(this.searchForm.value)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => this.setErrorMessage(error)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(error => error))
            .subscribe((response) => {
            this.hasError = false;
            this.reposStore.dispatch(new src_app_state_management_actions_user_repos_actions__WEBPACK_IMPORTED_MODULE_8__["SearchedUserRepos"](response));
        });
    }
    searchUser(user) {
        return this.searchService.getUsers(user);
    }
    searchRepos(user) {
        return this.searchService.getRepos(user);
    }
    setErrorMessage(error) {
        if (error.status === 404) {
            this.errorMessage = `Desculpe, usuário ${this.searchForm.value} não existe`;
        }
        else if (error.status === 0) {
            this.errorMessage = 'Favor verificar sua conexão';
        }
        else {
            'Algo de errado aconteceu';
        }
        this.hasError = true;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
    }
};
SearchComponent.ctorParameters = () => [
    { type: _search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }
];
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search.component.scss */ "./src/app/components/search/search.component.scss")).default]
    })
], SearchComponent);



/***/ }),

/***/ "./src/app/components/search/search.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/search/search.service.ts ***!
  \*****************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api */ "./src/app/api.ts");




let SearchService = class SearchService {
    constructor(_http) {
        this._http = _http;
    }
    getUsers(user) {
        return this._http.get(`${src_app_api__WEBPACK_IMPORTED_MODULE_3__["apiUrl"]}/users/${user}`);
    }
    getRepos(user) {
        return this._http.get(`${src_app_api__WEBPACK_IMPORTED_MODULE_3__["apiUrl"]}/users/${user}/repos`);
    }
};
SearchService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SearchService);



/***/ }),

/***/ "./src/app/components/user-info/user-info.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/user-info/user-info.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".user-info {\n  display: grid;\n  grid-template-columns: 50% auto;\n  grid-template-rows: 210px auto;\n  justify-items: stretch;\n  padding: 10px;\n}\n.user-info .infos {\n  grid-column: span 2;\n  grid-row: span 1;\n  margin-bottom: 20px;\n  margin-top: 10px;\n}\n.user-info .infos .avatar {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  border: 2px solid #e8f0fe;\n  box-shadow: 1px 1px 5px;\n}\n.user-info .infos .user-name {\n  padding-top: 10px;\n  height: 10;\n  font-size: 26px;\n}\n.user-info .references {\n  grid-column: span 2;\n  grid-row: span 1;\n}\n@media (min-width: 400px) {\n  .user-info {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYWlxdWVyZWlzL2RldmVsb3Blci92b3RvcmFudGltL3JlYWN0aXZlLWdpdGh1Yi9zcmMvYXBwL2NvbXBvbmVudHMvdXNlci1pbmZvL3VzZXItaW5mby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy91c2VyLWluZm8vdXNlci1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsYUFBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFFQSxzQkFBQTtFQUNBLGFBQUE7QUNERjtBREdFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNESjtBREdJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7QUNETjtBRElJO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0ZOO0FETUU7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FDSko7QURTQTtFQUNFO0lBQ0Usa0JBQUE7RUNORjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyLWluZm8vdXNlci1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItaW5mbyB7XG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMTBweCBhdXRvO1xuXG4gIGp1c3RpZnktaXRlbXM6IHN0cmV0Y2g7XG4gIHBhZGRpbmc6IDEwcHg7XG5cbiAgLmluZm9zIHtcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xuICAgIGdyaWQtcm93OiBzcGFuIDE7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuXG4gICAgLmF2YXRhciB7XG4gICAgICB3aWR0aDogMTUwcHg7XG4gICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiKDIzMiwgMjQwLCAyNTQpO1xuICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHg7XG4gICAgfVxuXG4gICAgLnVzZXItbmFtZSB7XG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgIGhlaWdodDogMTA7XG4gICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgfVxuICB9XG5cbiAgLnJlZmVyZW5jZXMge1xuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XG4gICAgZ3JpZC1yb3c6IHNwYW4gMTtcbiAgICAvLyBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA0MDBweCkge1xuICAudXNlci1pbmZvIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbiIsIi51c2VyLWluZm8ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSBhdXRvO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDIxMHB4IGF1dG87XG4gIGp1c3RpZnktaXRlbXM6IHN0cmV0Y2g7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4udXNlci1pbmZvIC5pbmZvcyB7XG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XG4gIGdyaWQtcm93OiBzcGFuIDE7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4udXNlci1pbmZvIC5pbmZvcyAuYXZhdGFyIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlOGYwZmU7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4O1xufVxuLnVzZXItaW5mbyAuaW5mb3MgLnVzZXItbmFtZSB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBoZWlnaHQ6IDEwO1xuICBmb250LXNpemU6IDI2cHg7XG59XG4udXNlci1pbmZvIC5yZWZlcmVuY2VzIHtcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcbiAgZ3JpZC1yb3c6IHNwYW4gMTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQwMHB4KSB7XG4gIC51c2VyLWluZm8ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/user-info/user-info.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/user-info/user-info.component.ts ***!
  \*************************************************************/
/*! exports provided: UserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function() { return UserInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");



let UserInfoComponent = class UserInfoComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])('userInfoState')).subscribe((userInfo) => {
            return (this.userInfo = userInfo[1]);
        });
    }
};
UserInfoComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
UserInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-info/user-info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-info.component.scss */ "./src/app/components/user-info/user-info.component.scss")).default]
    })
], UserInfoComponent);



/***/ }),

/***/ "./src/app/components/user-repos/user-repos.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/user-repos/user-repos.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cards {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n}\n.cards .card {\n  flex: 1 0 250px;\n  min-height: 90px;\n  margin: 10px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  display: block;\n  padding: 10px;\n}\n.cards .card p {\n  display: inline;\n  margin-left: 10px;\n}\n.cards .card .name {\n  font-size: 20px;\n  font-weight: 400;\n}\n.cards .card .name svg {\n  padding: 5px 0 0 5px;\n}\n.cards .card .description {\n  font-size: 13px;\n  margin-top: 5px;\n  color: #586069;\n}\n.cards .card .stars {\n  font-size: 13px;\n  color: #586069;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYWlxdWVyZWlzL2RldmVsb3Blci92b3RvcmFudGltL3JlYWN0aXZlLWdpdGh1Yi9zcmMvYXBwL2NvbXBvbmVudHMvdXNlci1yZXBvcy91c2VyLXJlcG9zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3VzZXItcmVwb3MvdXNlci1yZXBvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNDRjtBRENFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQ0NKO0FEQ0k7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNDTjtBREVJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDQU47QURFTTtFQUNFLG9CQUFBO0FDQVI7QURJSTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0ZOO0FES0k7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0hOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyLXJlcG9zL3VzZXItcmVwb3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuXG4gIC5jYXJkIHtcbiAgICBmbGV4OiAxIDAgMjUwcHg7XG4gICAgbWluLWhlaWdodDogOTBweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMTBweDtcblxuICAgIHAge1xuICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgfVxuXG4gICAgLm5hbWUge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcblxuICAgICAgc3ZnIHtcbiAgICAgICAgcGFkZGluZzogNXB4IDAgMCA1cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgIGNvbG9yOiByZ2IoODgsIDk2LCAxMDUpO1xuICAgIH1cblxuICAgIC5zdGFycyB7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBjb2xvcjogcmdiKDg4LCA5NiwgMTA1KTtcbiAgICB9XG4gIH1cbn1cbiIsIi5jYXJkcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG4uY2FyZHMgLmNhcmQge1xuICBmbGV4OiAxIDAgMjUwcHg7XG4gIG1pbi1oZWlnaHQ6IDkwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTBweDtcbn1cbi5jYXJkcyAuY2FyZCBwIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5jYXJkcyAuY2FyZCAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5jYXJkcyAuY2FyZCAubmFtZSBzdmcge1xuICBwYWRkaW5nOiA1cHggMCAwIDVweDtcbn1cbi5jYXJkcyAuY2FyZCAuZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgY29sb3I6ICM1ODYwNjk7XG59XG4uY2FyZHMgLmNhcmQgLnN0YXJzIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzU4NjA2OTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/user-repos/user-repos.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/user-repos/user-repos.component.ts ***!
  \***************************************************************/
/*! exports provided: UserReposComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserReposComponent", function() { return UserReposComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");



let UserReposComponent = class UserReposComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])('userReposState')).subscribe((response) => {
            if (response[1]) {
                response[1] = this.orderByStargazers(response[1], 'stargazers_count');
            }
            this.userRepos = response[1];
        });
    }
    orderByStargazers(object, value) {
        return object
            .sort((a, b) => (a[`${value}`] > b[`${value}`] ? 1 : b[`${value}`] > a[`${value}`] ? -1 : 0))
            .reverse();
    }
};
UserReposComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["State"] }
];
UserReposComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-repos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-repos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-repos/user-repos.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-repos.component.scss */ "./src/app/components/user-repos/user-repos.component.scss")).default]
    })
], UserReposComponent);



/***/ }),

/***/ "./src/app/state-management/actions/user-info.actions.ts":
/*!***************************************************************!*\
  !*** ./src/app/state-management/actions/user-info.actions.ts ***!
  \***************************************************************/
/*! exports provided: UPDATE_SEARCHED_USER, SearchedUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SEARCHED_USER", function() { return UPDATE_SEARCHED_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchedUser", function() { return SearchedUser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const UPDATE_SEARCHED_USER = '[User Info] Update';
class SearchedUser {
    constructor(payload) {
        this.payload = payload;
        this.type = UPDATE_SEARCHED_USER;
    }
}


/***/ }),

/***/ "./src/app/state-management/actions/user-repos.actions.ts":
/*!****************************************************************!*\
  !*** ./src/app/state-management/actions/user-repos.actions.ts ***!
  \****************************************************************/
/*! exports provided: UPDATE_USER_REPOS, SearchedUserRepos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_USER_REPOS", function() { return UPDATE_USER_REPOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchedUserRepos", function() { return SearchedUserRepos; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const UPDATE_USER_REPOS = '[User repositories] Update';
class SearchedUserRepos {
    constructor(payload) {
        this.payload = payload;
        this.type = UPDATE_USER_REPOS;
    }
}


/***/ }),

/***/ "./src/app/state-management/reducers/user-info.reducer.ts":
/*!****************************************************************!*\
  !*** ./src/app/state-management/reducers/user-info.reducer.ts ***!
  \****************************************************************/
/*! exports provided: userInfoReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userInfoReducer", function() { return userInfoReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_user_info_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/user-info.actions */ "./src/app/state-management/actions/user-info.actions.ts");


const initialState = {};
function userInfoReducer(state = initialState, action) {
    switch (action.type) {
        case _actions_user_info_actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_SEARCHED_USER"]:
            return [state, action.payload];
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/state-management/reducers/user-repos.reducer.ts":
/*!*****************************************************************!*\
  !*** ./src/app/state-management/reducers/user-repos.reducer.ts ***!
  \*****************************************************************/
/*! exports provided: userReposReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userReposReducer", function() { return userReposReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_user_repos_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/user-repos.actions */ "./src/app/state-management/actions/user-repos.actions.ts");


const initialState = {};
function userReposReducer(state = initialState, action) {
    switch (action.type) {
        case _actions_user_repos_actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_USER_REPOS"]:
            return [state, action.payload];
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/templates/home/home.component.scss":
/*!****************************************************!*\
  !*** ./src/app/templates/home/home.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background-color: rgba(246, 246, 246, 0.2);\n}\n.container .container__header {\n  grid-column: span 3;\n  background-color: #24292e;\n  height: 65px;\n  color: white;\n}\n.container .container__header .container__header--icon {\n  margin: 16px 0px 0px 10px;\n}\n.container .container__side-bar {\n  grid-column: span 1;\n  margin: 5px;\n  border-bottom: 1px solid #e8f0fe;\n}\n.container .container__side-bar ::after {\n  width: 50%;\n}\n.container .container__user-repos {\n  grid-column: span 2;\n  margin: 5px;\n}\n.container .container__fallback {\n  font-size: 30px;\n  font-weight: 500;\n  margin-top: 80px;\n  grid-column: span 2;\n  text-align: center;\n}\n@media (min-width: 768px) {\n  .container {\n    display: grid;\n    grid-template-columns: 30% 70%;\n    grid-template-rows: 65px auto;\n    grid-gap: 10px;\n    justify-items: stretch;\n  }\n  .container .container__side-bar {\n    border-right: 1px solid #e8f0fe;\n  }\n  .container .container__side-bar ::after {\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYWlxdWVyZWlzL2RldmVsb3Blci92b3RvcmFudGltL3JlYWN0aXZlLWdpdGh1Yi9zcmMvYXBwL3RlbXBsYXRlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RlbXBsYXRlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLDBDQUFBO0FDQ0Y7QURDRTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0NKO0FEQ0k7RUFDRSx5QkFBQTtBQ0NOO0FER0U7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtBQ0RKO0FER0k7RUFDRSxVQUFBO0FDRE47QURLRTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQ0hKO0FETUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNKSjtBRFFBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsOEJBQUE7SUFDQSw2QkFBQTtJQUNBLGNBQUE7SUFDQSxzQkFBQTtFQ0xGO0VET0U7SUFDRSwrQkFBQTtFQ0xKO0VET0k7SUFDRSxVQUFBO0VDTE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ2LCAyNDYsIDI0NiwgMC4yKTtcblxuICAuY29udGFpbmVyX19oZWFkZXIge1xuICAgIGdyaWQtY29sdW1uOiBzcGFuIDM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjkyZTtcbiAgICBoZWlnaHQ6IDY1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuXG4gICAgLmNvbnRhaW5lcl9faGVhZGVyLS1pY29uIHtcbiAgICAgIG1hcmdpbjogMTZweCAwcHggMHB4IDEwcHg7XG4gICAgfVxuICB9XG5cbiAgLmNvbnRhaW5lcl9fc2lkZS1iYXIge1xuICAgIGdyaWQtY29sdW1uOiBzcGFuIDE7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMzIsIDI0MCwgMjU0KTtcblxuICAgIDo6YWZ0ZXIge1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG4gIH1cblxuICAuY29udGFpbmVyX191c2VyLXJlcG9zIHtcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xuICAgIG1hcmdpbjogNXB4O1xuICB9XG5cbiAgLmNvbnRhaW5lcl9fZmFsbGJhY2sge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbi10b3A6IDgwcHg7XG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgNzAlO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjVweCBhdXRvO1xuICAgIGdyaWQtZ2FwOiAxMHB4O1xuICAgIGp1c3RpZnktaXRlbXM6IHN0cmV0Y2g7XG5cbiAgICAuY29udGFpbmVyX19zaWRlLWJhciB7XG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2IoMjMyLCAyNDAsIDI1NCk7XG5cbiAgICAgIDo6YWZ0ZXIge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NiwgMjQ2LCAyNDYsIDAuMik7XG59XG4uY29udGFpbmVyIC5jb250YWluZXJfX2hlYWRlciB7XG4gIGdyaWQtY29sdW1uOiBzcGFuIDM7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI5MmU7XG4gIGhlaWdodDogNjVweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNvbnRhaW5lciAuY29udGFpbmVyX19oZWFkZXIgLmNvbnRhaW5lcl9faGVhZGVyLS1pY29uIHtcbiAgbWFyZ2luOiAxNnB4IDBweCAwcHggMTBweDtcbn1cbi5jb250YWluZXIgLmNvbnRhaW5lcl9fc2lkZS1iYXIge1xuICBncmlkLWNvbHVtbjogc3BhbiAxO1xuICBtYXJnaW46IDVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGYwZmU7XG59XG4uY29udGFpbmVyIC5jb250YWluZXJfX3NpZGUtYmFyIDo6YWZ0ZXIge1xuICB3aWR0aDogNTAlO1xufVxuLmNvbnRhaW5lciAuY29udGFpbmVyX191c2VyLXJlcG9zIHtcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcbiAgbWFyZ2luOiA1cHg7XG59XG4uY29udGFpbmVyIC5jb250YWluZXJfX2ZhbGxiYWNrIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tdG9wOiA4MHB4O1xuICBncmlkLWNvbHVtbjogc3BhbiAyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAlIDcwJTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDY1cHggYXV0bztcbiAgICBncmlkLWdhcDogMTBweDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdHJldGNoO1xuICB9XG4gIC5jb250YWluZXIgLmNvbnRhaW5lcl9fc2lkZS1iYXIge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlOGYwZmU7XG4gIH1cbiAgLmNvbnRhaW5lciAuY29udGFpbmVyX19zaWRlLWJhciA6OmFmdGVyIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/templates/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/templates/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");



let HomeComponent = class HomeComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])('userInfoState')).subscribe((userInfo) => {
            return (this.userInfo = userInfo[1]);
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/templates/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/templates/home/home.component.scss")).default]
    })
], HomeComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/caiquereis/developer/votorantim/reactive-github/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map