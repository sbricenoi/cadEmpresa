(self["webpackChunkcadEmpresa"] = self["webpackChunkcadEmpresa"] || []).push([["src_app_pages_equipos_equipos_module_ts"],{

/***/ 6029:
/*!*********************************************************!*\
  !*** ./src/app/pages/equipos/equipos-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EquiposPageRoutingModule": () => (/* binding */ EquiposPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _equipos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./equipos.page */ 3885);




const routes = [
    {
        path: '',
        component: _equipos_page__WEBPACK_IMPORTED_MODULE_0__.EquiposPage
    }
];
let EquiposPageRoutingModule = class EquiposPageRoutingModule {
};
EquiposPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EquiposPageRoutingModule);



/***/ }),

/***/ 7399:
/*!*************************************************!*\
  !*** ./src/app/pages/equipos/equipos.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EquiposPageModule": () => (/* binding */ EquiposPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _equipos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./equipos-routing.module */ 6029);
/* harmony import */ var _equipos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equipos.page */ 3885);







let EquiposPageModule = class EquiposPageModule {
};
EquiposPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _equipos_routing_module__WEBPACK_IMPORTED_MODULE_0__.EquiposPageRoutingModule
        ],
        declarations: [_equipos_page__WEBPACK_IMPORTED_MODULE_1__.EquiposPage]
    })
], EquiposPageModule);



/***/ }),

/***/ 3885:
/*!***********************************************!*\
  !*** ./src/app/pages/equipos/equipos.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EquiposPage": () => (/* binding */ EquiposPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_equipos_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./equipos.page.html */ 2617);
/* harmony import */ var _equipos_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equipos.page.scss */ 9276);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _detalle_equipo_detalle_equipo_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../detalle-equipo/detalle-equipo.page */ 7385);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http.service */ 6858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ 3071);









let EquiposPage = class EquiposPage {
    constructor(modal, menu, _http, _user, router) {
        this.modal = modal;
        this.menu = menu;
        this._http = _http;
        this._user = _user;
        this.router = router;
        this.equipos = [];
    }
    detalle(equipo) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _detalle_equipo_detalle_equipo_page__WEBPACK_IMPORTED_MODULE_2__.DetalleEquipoPage,
                animated: true,
                mode: 'ios',
                backdropDismiss: true,
                swipeToClose: true,
                componentProps: {
                    'id': equipo,
                },
                cssClass: 'equipo-modal'
            });
            return yield modal.present();
        });
    }
    ngOnInit() {
        if (!this._user.empresa) {
            console.log("sin empresa seleccionada");
            this.router.navigate(['/bienvenida']);
        }
        console.log("comienza lista");
        this.listar();
    }
    openMenu() {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    }
    listar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let input = {};
            this._http.getEquipos(input).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                console.log(res);
                if (res.resultado == "OK") {
                    for (let e = 0; e < res.equipos.length; e++) {
                        this.equipos.push(res.equipos[e]);
                    }
                }
                //console.log(this.equipos)
            }));
        });
    }
};
EquiposPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController },
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
EquiposPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-equipos',
        template: _raw_loader_equipos_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_equipos_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EquiposPage);



/***/ }),

/***/ 9276:
/*!*************************************************!*\
  !*** ./src/app/pages/equipos/equipos.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".new-background-color {\n  --background: #5501bc;\n}\n\nion-toolbar ion-button {\n  --background:transparent;\n}\n\nion-title.md.title-default.hydrated {\n  color: #fff;\n  text-align: left;\n}\n\nion-content {\n  --background: transparent;\n}\n\nion-content .listBusiness {\n  margin-top: 20px;\n}\n\nion-content .listBusiness .cardBusiness {\n  padding: 10px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.4);\n  border-radius: 10px;\n  margin-bottom: 15px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  background: #e5d1ff;\n}\n\nion-content .listBusiness .cardBusiness .round_image {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  min-width: 50px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  background-size: cover;\n}\n\nion-content .listBusiness .cardBusiness .infoBusiness {\n  width: 100%;\n  padding-left: 10px;\n  position: relative;\n}\n\nion-content .listBusiness .cardBusiness .infoBusiness .nameBusiness {\n  font-size: 16px;\n  font-weight: 600;\n  color: #5501bc;\n  display: block;\n}\n\nion-content .listBusiness .cardBusiness .infoBusiness .smallBusiness {\n  font-size: 12px;\n  color: gray;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  display: block;\n}\n\nion-content .listBusiness .cardBusiness ion-button {\n  --background: transparent;\n  font-size: 20px;\n  --box-shadow: none;\n}\n\nion-content .listBusiness .cardBusiness ion-button ion-icon {\n  color: #c200d4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVxdWlwb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFDQTtFQUNJLHdCQUFBO0FBRUo7O0FBQUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFBQTtFQUNJLHlCQUFBO0FBR0o7O0FBRkk7RUFDSSxnQkFBQTtBQUlSOztBQUhRO0VBQ0ksYUFBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFLWjs7QUFKWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsMENBQUE7RUFDQSxzQkFBQTtBQU1oQjs7QUFIWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBS2hCOztBQUpnQjtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBTXBCOztBQUpnQjtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQU1wQjs7QUFGWTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBSWhCOztBQUhnQjtFQUNJLGNBQUE7QUFLcEIiLCJmaWxlIjoiZXF1aXBvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3LWJhY2tncm91bmQtY29sb3J7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM1NTAxYmM7XHJcbn1cclxuaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbntcclxuICAgIC0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxufVxyXG5pb24tdGl0bGUubWQudGl0bGUtZGVmYXVsdC5oeWRyYXRlZCB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgXHJcbiAgICAubGlzdEJ1c2luZXNze1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgLmNhcmRCdXNpbmVzc3tcclxuICAgICAgICAgICAgcGFkZGluZzoxMHB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAwLjQpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlNWQxZmY7XHJcbiAgICAgICAgICAgIC5yb3VuZF9pbWFnZXtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMC4yKTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5pbmZvQnVzaW5lc3N7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIC5uYW1lQnVzaW5lc3N7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1NTAxYmM7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc21hbGxCdXNpbmVzc3tcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyAgICBcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDsgICAgXHJcbiAgICAgICAgICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmU7ICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiNjMjAwZDQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ 2617:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/equipos/equipos.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar  class=\"new-background-color\">\n    <ion-title>\n      Equipos   \n    </ion-title>\n    <ion-button slot=\"end\" (click)=\"openMenu()\">\n      <ion-icon  name=\"menu-outline\"></ion-icon>     \n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div class=\"banner\">\n    <img src=\"https://image.freepik.com/vector-gratis/banner-digital-futurista-tecnologia-elemento-hud_1017-26316.jpg\" />\n    <div class=\"caption ion-padding\">\n      Equipos disponibles \n    </div>\n    <!--<div class=\"search\">\n    <ion-item lines=\"none\" class=\"ion-no-padding\">\n        <ion-icon class=\"holder\" slot=\"start\" name=\"search-outline\"></ion-icon>\n        <ion-input placeholder=\"Buscar equipos\"></ion-input>\n        <ion-button slot=\"end\">\n          <ion-icon name=\"filter-outline\"></ion-icon>\n        </ion-button>\n    </ion-item>  \n    </div>-->\n  </div>\n  <div class=\"listBusiness ion-padding\">\n    <div class=\"cardBusiness\" *ngFor=\"let equipo of equipos\">\n      <div class=\"infoBusiness\">\n        <ion-label class=\"nameBusiness\">{{equipo.codigo}}</ion-label>\n        <ion-label class=\"smallBusiness\">{{equipo.direccion}} </ion-label>\n      </div>\n      <ion-button slot=\"end\" (click)=\"detalle(equipo.id)\">\n          <ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>\n      </ion-button>\n    </div>    \n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_equipos_equipos_module_ts.js.map