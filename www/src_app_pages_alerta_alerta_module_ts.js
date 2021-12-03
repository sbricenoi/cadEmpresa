(self["webpackChunkcadEmpresa"] = self["webpackChunkcadEmpresa"] || []).push([["src_app_pages_alerta_alerta_module_ts"],{

/***/ 9976:
/*!*******************************************************!*\
  !*** ./src/app/pages/alerta/alerta-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertaPageRoutingModule": () => (/* binding */ AlertaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _alerta_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alerta.page */ 6600);




const routes = [
    {
        path: '',
        component: _alerta_page__WEBPACK_IMPORTED_MODULE_0__.AlertaPage
    }
];
let AlertaPageRoutingModule = class AlertaPageRoutingModule {
};
AlertaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AlertaPageRoutingModule);



/***/ }),

/***/ 7482:
/*!***********************************************!*\
  !*** ./src/app/pages/alerta/alerta.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertaPageModule": () => (/* binding */ AlertaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _alerta_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alerta-routing.module */ 9976);
/* harmony import */ var _alerta_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alerta.page */ 6600);
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ 4687);








let AlertaPageModule = class AlertaPageModule {
};
AlertaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _alerta_routing_module__WEBPACK_IMPORTED_MODULE_0__.AlertaPageRoutingModule
        ],
        declarations: [_alerta_page__WEBPACK_IMPORTED_MODULE_1__.AlertaPage],
        providers: [_ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__.CallNumber]
    })
], AlertaPageModule);



/***/ }),

/***/ 6600:
/*!*********************************************!*\
  !*** ./src/app/pages/alerta/alerta.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertaPage": () => (/* binding */ AlertaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_alerta_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./alerta.page.html */ 5836);
/* harmony import */ var _alerta_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alerta.page.scss */ 167);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ 4687);
/* harmony import */ var src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/geolocation.service */ 4375);
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/notification.service */ 2013);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ 3071);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);










let AlertaPage = class AlertaPage {
    constructor(menu, router, toastController, callNumber, _geo, _notification, _user) {
        this.menu = menu;
        this.router = router;
        this.toastController = toastController;
        this.callNumber = callNumber;
        this._geo = _geo;
        this._notification = _notification;
        this._user = _user;
        this.segundos = 10;
        this.confirma = true;
        this.inicio = false;
    }
    ngOnInit() {
        if (!this._user.empresa) {
            console.log("sin empresa seleccionada");
            this.router.navigate(['/bienvenida']);
        }
        console.log(this._user.rut);
    }
    openMenu() {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    }
    alerta() {
        this.segundos = 10;
        this.conteo();
    }
    conteo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.confirma = true;
            this.inicio = true;
            yield this.delay(1);
            this.segundos--;
            yield this.delay(1);
            this.segundos--;
            yield this.delay(1);
            this.segundos--;
            yield this.delay(1);
            this.segundos--;
            yield this.delay(1);
            this.segundos--;
            yield this.delay(1);
            this.segundos--;
            yield this.delay(1);
            this.segundos--;
            yield this.delay(1);
            this.segundos--;
            yield this.delay(1);
            this.segundos--;
            yield this.delay(1);
            this.segundos--;
            this.inicio = false;
            if (this.confirma) {
                this.enviar();
            }
            else {
                console.log("se cancelo");
            }
        });
    }
    delay(n) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise(function (resolve) {
                setTimeout(resolve, n * 1000);
            });
        });
    }
    enviar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let input = { usuario: this._user.rut };
            this._geo.generaAlerta(input).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                console.log(res);
                if (res.resultado == "OK") {
                    this.router.navigate(['/detalle-alerta/' + res.alerta]);
                    const toast = yield this.toastController.create({
                        header: 'Emergencia Alertada',
                        message: 'Ha sido Enviada la alerta',
                        position: 'bottom',
                        duration: 3000,
                        animated: true,
                        translucent: true
                    });
                    yield toast.present();
                }
                else {
                    const toast = yield this.toastController.create({
                        header: 'Emergencia NO Alertada',
                        message: 'INTENTALO NUEVAMENTE',
                        position: 'bottom',
                        duration: 3000,
                        animated: true,
                        translucent: true
                    });
                    yield toast.present();
                }
            }));
            this.llamar();
        });
    }
    cancelar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                header: 'Emergencia Cancelada',
                message: 'No se ha alertado a ninguna entidad',
                position: 'bottom',
                duration: 3000,
                animated: true,
                translucent: true
            });
            yield toast.present();
            this.confirma = false;
            this.inicio = false;
        });
    }
    llamar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            var respuesta;
            this.callNumber.callNumber("+56964506888", true)
                .then(res => respuesta = res)
                .catch(err => respuesta = err);
        });
    }
};
AlertaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__.CallNumber },
    { type: src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_3__.GeolocationService },
    { type: src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_4__.NotificationService },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService }
];
AlertaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-alerta',
        template: _raw_loader_alerta_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_alerta_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AlertaPage);



/***/ }),

/***/ 167:
/*!***********************************************!*\
  !*** ./src/app/pages/alerta/alerta.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".new-background-color {\n  --background: #5501bc;\n}\n\nion-content {\n  --background: transparent;\n}\n\nion-toolbar ion-button {\n  --background:transparent;\n}\n\nion-title.md.title-default.hydrated {\n  color: #fff;\n  text-align: left;\n}\n\n.alerta {\n  background: red;\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  color: #fff;\n  font-size: xx-large;\n  margin: 10% 0 0px 25%;\n}\n\nbutton:hover {\n  background: #f44336;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsZXJ0YS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKOztBQUNBO0VBQ0kseUJBQUE7QUFFSjs7QUFBQTtFQUNJLHdCQUFBO0FBR0o7O0FBREE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFJSjs7QUFEQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFJSjs7QUFGQTtFQUNJLG1CQUFBO0FBS0oiLCJmaWxlIjoiYWxlcnRhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXctYmFja2dyb3VuZC1jb2xvcntcclxuICAgIC0tYmFja2dyb3VuZDogIzU1MDFiYztcclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBcclxufVxyXG5pb24tdG9vbGJhciBpb24tYnV0dG9ue1xyXG4gICAgLS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG59XHJcbmlvbi10aXRsZS5tZC50aXRsZS1kZWZhdWx0Lmh5ZHJhdGVkIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmFsZXJ0YSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgbWFyZ2luOiAxMCUgMCAwcHggMjUlO1xyXG59XHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjQ0MzM2O1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ 5836:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/alerta/alerta.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar  class=\"new-background-color\">\n    <ion-title>\n      Alerta   \n    </ion-title>\n    <ion-button slot=\"end\" (click)=\"openMenu()\">\n      <ion-icon  name=\"menu-outline\"></ion-icon>     \n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <button class=\"alerta\" (click)=\"alerta()\" > Alertar </button>\n\n  <div *ngIf=\"inicio\"  style=\"text-align: center;\">\n    <p>se enviará una alerta en:</p>\n    <h1>{{segundos}}</h1>\n    <p>si desea cancelar haga click en el siguiente boton</p>\n    <ion-button expand=\"full\" color=\"primary\" (click)=\"cancelar()\" > Cancelar </ion-button>\n  </div>\n  \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_alerta_alerta_module_ts.js.map