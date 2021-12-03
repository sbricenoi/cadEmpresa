(self["webpackChunkcadEmpresa"] = self["webpackChunkcadEmpresa"] || []).push([["src_app_pages_bienvenida_bienvenida_module_ts"],{

/***/ 9456:
/*!***************************************************************!*\
  !*** ./src/app/pages/bienvenida/bienvenida-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BienvenidaPageRoutingModule": () => (/* binding */ BienvenidaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _bienvenida_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bienvenida.page */ 6087);




const routes = [
    {
        path: '',
        component: _bienvenida_page__WEBPACK_IMPORTED_MODULE_0__.BienvenidaPage
    }
];
let BienvenidaPageRoutingModule = class BienvenidaPageRoutingModule {
};
BienvenidaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BienvenidaPageRoutingModule);



/***/ }),

/***/ 4232:
/*!*******************************************************!*\
  !*** ./src/app/pages/bienvenida/bienvenida.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BienvenidaPageModule": () => (/* binding */ BienvenidaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _bienvenida_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bienvenida-routing.module */ 9456);
/* harmony import */ var _bienvenida_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bienvenida.page */ 6087);







let BienvenidaPageModule = class BienvenidaPageModule {
};
BienvenidaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _bienvenida_routing_module__WEBPACK_IMPORTED_MODULE_0__.BienvenidaPageRoutingModule
        ],
        declarations: [_bienvenida_page__WEBPACK_IMPORTED_MODULE_1__.BienvenidaPage]
    })
], BienvenidaPageModule);



/***/ }),

/***/ 6087:
/*!*****************************************************!*\
  !*** ./src/app/pages/bienvenida/bienvenida.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BienvenidaPage": () => (/* binding */ BienvenidaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_bienvenida_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./bienvenida.page.html */ 4590);
/* harmony import */ var _bienvenida_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bienvenida.page.scss */ 393);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/notification.service */ 2013);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ 3071);








let BienvenidaPage = class BienvenidaPage {
    constructor(_notification, router, menu, _user) {
        this._notification = _notification;
        this.router = router;
        this.menu = menu;
        this._user = _user;
    }
    ngOnInit() {
    }
    redirec(ruta) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this._user.empresa = ruta;
            this.router.navigate(['/tabs']);
        });
    }
    openMenu() {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    }
};
BienvenidaPage.ctorParameters = () => [
    { type: src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_2__.NotificationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService }
];
BienvenidaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-bienvenida',
        template: _raw_loader_bienvenida_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_bienvenida_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BienvenidaPage);



/***/ }),

/***/ 393:
/*!*******************************************************!*\
  !*** ./src/app/pages/bienvenida/bienvenida.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("img.logo {\n  margin: 15px 35%;\n}\n\np.texto-intro {\n  padding: 5px 15px;\n  text-align: center;\n  color: #4b0ab3;\n  font-size: 18px;\n  margin: 0;\n}\n\nion-card img {\n  margin: 0 30%;\n  width: 40%;\n}\n\nion-card {\n  padding: 10px;\n  width: 50%;\n  margin: 30px 25%;\n}\n\nion-card-title {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpZW52ZW5pZGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUFFSjs7QUFBQTtFQUNJLGFBQUE7RUFDQSxVQUFBO0FBR0o7O0FBREE7RUFDSSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBSUo7O0FBRkE7RUFDSSxrQkFBQTtBQUtKIiwiZmlsZSI6ImJpZW52ZW5pZGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nLmxvZ28ge1xyXG4gICAgbWFyZ2luOiAxNXB4IDM1JTtcclxufVxyXG5wLnRleHRvLWludHJvIHtcclxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM0YjBhYjM7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuaW9uLWNhcmQgaW1nIHtcclxuICAgIG1hcmdpbjogMCAzMCU7XHJcbiAgICB3aWR0aDogNDAlO1xyXG59XHJcbmlvbi1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiAzMHB4IDI1JTtcclxufVxyXG5pb24tY2FyZC10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ 4590:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bienvenida/bienvenida.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar class=\"ion-padding\" style=\"text-align:center\">\n    <h1>CAD Empresa</h1>\n    <button slot=\"end\" (click)=\"openMenu()\"> <ion-icon name=\"menu-outline\"></ion-icon></button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <img src=\"../../assets/logo/LogoCAD5.png\" class=\"logo\" width=\"30%\"/>\n  <p class=\"texto-intro\">Selecciona la empresa con la que vas a utilizar la aplicación de empresa</p>\n  <ion-card (click)=\"redirec('vitaltime')\">\n    <img src=\"https://www.vitaltime.cl/wp-content/uploads/2021/02/LOGO-VT-180.png\" width=\"50%\"/>\n    <ion-card-title>Vital Time</ion-card-title>\n  </ion-card>\n  \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_bienvenida_bienvenida_module_ts.js.map