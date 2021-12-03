(self["webpackChunkcadEmpresa"] = self["webpackChunkcadEmpresa"] || []).push([["src_app_pages_detalle-reserva_detalle-reserva_module_ts"],{

/***/ 8411:
/*!*************************************************************************!*\
  !*** ./src/app/pages/detalle-reserva/detalle-reserva-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetalleReservaPageRoutingModule": () => (/* binding */ DetalleReservaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _detalle_reserva_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detalle-reserva.page */ 7231);




const routes = [
    {
        path: '',
        component: _detalle_reserva_page__WEBPACK_IMPORTED_MODULE_0__.DetalleReservaPage
    }
];
let DetalleReservaPageRoutingModule = class DetalleReservaPageRoutingModule {
};
DetalleReservaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetalleReservaPageRoutingModule);



/***/ }),

/***/ 3957:
/*!*****************************************************************!*\
  !*** ./src/app/pages/detalle-reserva/detalle-reserva.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetalleReservaPageModule": () => (/* binding */ DetalleReservaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _detalle_reserva_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detalle-reserva-routing.module */ 8411);
/* harmony import */ var _detalle_reserva_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detalle-reserva.page */ 7231);







let DetalleReservaPageModule = class DetalleReservaPageModule {
};
DetalleReservaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _detalle_reserva_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetalleReservaPageRoutingModule
        ],
        declarations: [_detalle_reserva_page__WEBPACK_IMPORTED_MODULE_1__.DetalleReservaPage]
    })
], DetalleReservaPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_detalle-reserva_detalle-reserva_module_ts.js.map