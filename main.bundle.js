webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input.ng-touched.ng-invalid {border:solid red 2px;}\r\ninput.ng-touched.ng-valid {border:solid green 2px;}\r\n\r\nselect.ng-touched.ng-invalid {border:solid red 2px;}\r\nselect.ng-touched.ng-valid {border:solid green 2px;}\r\n\r\n.container-bg {\r\n    background-color: #FFF3F0;\r\n}\r\n.container {\r\n   background-color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container-bg\">\n    <div class=\"container\">\n            <div class=\"jumbotron\">\n                    <h1 class=\"h1 text-center\">Fitness Calculator</h1>\n                    <p class=\"lead text-center\">Простое приложение, которое рассчитает необходимое для Вас соотношение белков, жиров и углеводов!</p>\n            </div>\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n        <h2 class=\"h2 text-center\">Форма для расчета БЖУ</h2>\n        <form #nutritionCalcForm=\"ngForm\" (ngSubmit)=\"onSubmit(nutritionCalcForm)\">\n            <div class=\"form-group\">\n                <label for=\"selectGender\">Пол</label>\n                <select name=\"gender\" [(ngModel)]=\"gender\" class=\"form-control\" id=\"selectGender\">\n                    <option value=\"1\">Мужской</option>\n                    <option value=\"2\">Женский</option>\n                </select>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"inputAge\">Возраст</label>\n                <input type=\"text\" name=\"age\" [(ngModel)]=\"age\" class=\"form-control\" id=\"inputAge\" \n                placeholder=\"Сколько Вам лет?\" required pattern=\"[0-9]{1,2}\">\n                <small class=\"form-text text-muted\">Например: \"18\"</small>\n\n            </div>\n            <div class=\"form-group\">\n            <label for=\"inputHeight\">Рост</label>\n            <input type=\"text\" name=\"height\" [(ngModel)]=\"height\" class=\"form-control\" id=\"inputHeight\" \n            placeholder=\"Введите Ваш рост в см\" required pattern=\"[0-9]{3}\">\n            <small class=\"form-text text-muted\">Введите Ваш рост в см. Например: \"162\"</small>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"inputWeight\">Вес</label>\n                <input type=\"text\" name=\"weight\" [(ngModel)]=\"weight\" class=\"form-control\" id=\"inputWeight\" \n                placeholder=\"Введите Ваш вес в кг\" required pattern=\"[0-9]{2,3}\">\n                <small class=\"form-text text-muted\">Введите Ваш вес в кг. Например: \"55\"</small>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"selectActivity\">Уровень активности</label>\n                <select name=\"activity\" [(ngModel)]=\"activity\" class=\"form-control\" id=\"selectActivity\"\n                required>\n                    <option value=\"1.2\">Малая активность</option>\n                    <option value=\"1.3\">Средняя активность (1-2 трен./нед.)</option>\n                    <option value=\"1.5\">Высокая активность (3-4 трен./нед.)</option>\n                    <option value=\"1.7\">Очень высокая активность (более 5 трен./нед.)</option>\n                </select>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"selectGoal\">Цель</label>\n                <select name=\"goal\" [(ngModel)]=\"goal\" class=\"form-control\" id=\"selectGoal\" required>\n                    <option value=\"1\">Набор массы</option>\n                    <option value=\"2\">Похудение</option>\n                </select>\n            </div>\n            <button type=\"button\" class=\"btn btn-outline-secondary\" style=\"width: 33%;\" (click)=\"nutritionCalcForm.reset(); hideResults = true;\">Сбросить</button>\n            <button type=\"submit\" [disabled]=\"nutritionCalcForm.invalid\" class=\"btn btn-outline-primary\" style=\"width: 65%;\">Расчитать!</button>\n        </form>\n        </div>\n        <div class=\"col-md-6\">\n            <div class=\"result-block\" [hidden]=\"hideResults\">\n                <h2 class=\"h2 text-center\">Ваш результат</h2>                \n                    <div class=\"alert alert-primary text-center\">\n                        <h4 class=\"alert-heading\" role=\"alert\">Базовый обмен веществ</h4>\n                        <p class=\"lead\">{{kilocalories}} ккал</p>\n                    </div>\n                    <div class=\"alert alert-primary text-center\">\n                            <h4 class=\"alert-heading\" role=\"alert\">Каллорийность для Вашей цели</h4>\n                            <p class=\"lead\">{{totalKilocaloties}} ккал</p>\n                    </div>\n                    <div class=\"alert alert-success text-center\">\n                            <h4 class=\"alert-heading\" role=\"alert\">Белки</h4>\n                            <p class=\"lead\">{{protein}} г.</p>\n                    </div>\n                    <div class=\"alert alert-success text-center\">\n                            <h4 class=\"alert-heading\" role=\"alert\">Жиры</h4>\n                            <p class=\"lead\">{{fats}} г.</p>\n                    </div>\n                    <div class=\"alert alert-success text-center\">\n                            <h4 class=\"alert-heading\" role=\"alert\">Углеводы</h4>\n                            <p class=\"lead\">{{carbohydrates}} г.</p>\n                    </div>               \n            </div>            \n        </div>\n    </div>\n    <hr>\n    <footer class=\"footer\">\n            <p>© Dmyhun@gmail.com 2017</p>\n    </footer>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        //service
        this.hideResults = true;
    }
    AppComponent.prototype.onSubmit = function (form) {
        this.hideResults = false;
        this.calculate();
    };
    AppComponent.prototype.calculate = function () {
        this.fats = this.weight;
        switch (this.gender) {
            case "1": {
                this.kilocalories = Math.round((66 + this.weight * 13.7 + 5 * this.height - 6.8 * this.age) * Number(this.activity));
                switch (this.activity) {
                    case "1.2": {
                        this.protein = Math.round(this.weight * 2);
                        break;
                    }
                    case "1.3": {
                        this.protein = Math.round(this.weight * 2.1);
                        break;
                    }
                    case "1.5": {
                        this.protein = Math.round(this.weight * 2.3);
                        break;
                    }
                    case "1.7": {
                        this.protein = Math.round(this.weight * 2.5);
                        break;
                    }
                    default: {
                        break;
                    }
                }
                break;
            }
            case "2": {
                this.kilocalories = Math.round((655 + 9.6 * this.weight + 1.8 * this.height - 4.7 * this.age) * Number(this.activity));
                switch (this.activity) {
                    case "1.2": {
                        this.protein = Math.round(this.weight * 1);
                        break;
                    }
                    case "1.3": {
                        this.protein = Math.round(this.weight * 1.5);
                        break;
                    }
                    case "1.5": {
                        this.protein = Math.round(this.weight * 2);
                        break;
                    }
                    case "1.7": {
                        this.protein = Math.round(this.weight * 2.5);
                        break;
                    }
                    default: {
                        break;
                    }
                }
                break;
            }
            default: {
                break;
            }
        }
        switch (this.goal) {
            case "1": {
                this.totalKilocaloties = this.kilocalories + 250;
                break;
            }
            case "2": {
                this.totalKilocaloties = this.kilocalories - 250;
                break;
            }
            default: {
                break;
            }
        }
        this.carbohydrates = Math.round((this.totalKilocaloties - this.fats * 9 - this.protein * 4) / 4);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map