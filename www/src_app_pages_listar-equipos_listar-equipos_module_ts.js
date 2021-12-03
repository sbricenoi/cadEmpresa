(self["webpackChunkcadEmpresa"] = self["webpackChunkcadEmpresa"] || []).push([["src_app_pages_listar-equipos_listar-equipos_module_ts"],{

/***/ 1362:
/*!***********************************************************************!*\
  !*** ./src/app/pages/listar-equipos/listar-equipos-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListarEquiposPageRoutingModule": () => (/* binding */ ListarEquiposPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _listar_equipos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listar-equipos.page */ 6370);




const routes = [
    {
        path: '',
        component: _listar_equipos_page__WEBPACK_IMPORTED_MODULE_0__.ListarEquiposPage
    }
];
let ListarEquiposPageRoutingModule = class ListarEquiposPageRoutingModule {
};
ListarEquiposPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ListarEquiposPageRoutingModule);



/***/ }),

/***/ 7803:
/*!***************************************************************!*\
  !*** ./src/app/pages/listar-equipos/listar-equipos.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListarEquiposPageModule": () => (/* binding */ ListarEquiposPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _listar_equipos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listar-equipos-routing.module */ 1362);
/* harmony import */ var _listar_equipos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listar-equipos.page */ 6370);







let ListarEquiposPageModule = class ListarEquiposPageModule {
};
ListarEquiposPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _listar_equipos_routing_module__WEBPACK_IMPORTED_MODULE_0__.ListarEquiposPageRoutingModule
        ],
        declarations: [_listar_equipos_page__WEBPACK_IMPORTED_MODULE_1__.ListarEquiposPage]
    })
], ListarEquiposPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_listar-equipos_listar-equipos_module_ts.js.map