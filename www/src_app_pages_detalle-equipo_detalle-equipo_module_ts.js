(self["webpackChunkcadEmpresa"] = self["webpackChunkcadEmpresa"] || []).push([["src_app_pages_detalle-equipo_detalle-equipo_module_ts"],{

/***/ 6790:
/*!***********************************************************************!*\
  !*** ./src/app/pages/detalle-equipo/detalle-equipo-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetalleEquipoPageRoutingModule": () => (/* binding */ DetalleEquipoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _detalle_equipo_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detalle-equipo.page */ 7385);




const routes = [
    {
        path: '',
        component: _detalle_equipo_page__WEBPACK_IMPORTED_MODULE_0__.DetalleEquipoPage
    }
];
let DetalleEquipoPageRoutingModule = class DetalleEquipoPageRoutingModule {
};
DetalleEquipoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetalleEquipoPageRoutingModule);



/***/ }),

/***/ 6271:
/*!***************************************************************!*\
  !*** ./src/app/pages/detalle-equipo/detalle-equipo.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetalleEquipoPageModule": () => (/* binding */ DetalleEquipoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _detalle_equipo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detalle-equipo-routing.module */ 6790);
/* harmony import */ var _detalle_equipo_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detalle-equipo.page */ 7385);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/google-maps */ 6095);








let DetalleEquipoPageModule = class DetalleEquipoPageModule {
};
DetalleEquipoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _detalle_equipo_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetalleEquipoPageRoutingModule,
            _angular_google_maps__WEBPACK_IMPORTED_MODULE_7__.GoogleMapsModule
        ],
        declarations: [_detalle_equipo_page__WEBPACK_IMPORTED_MODULE_1__.DetalleEquipoPage]
    })
], DetalleEquipoPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_detalle-equipo_detalle-equipo_module_ts.js.map