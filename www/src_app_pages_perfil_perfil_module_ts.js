(self["webpackChunkcadEmpresa"] = self["webpackChunkcadEmpresa"] || []).push([["src_app_pages_perfil_perfil_module_ts"],{

/***/ 8911:
/*!*******************************************************!*\
  !*** ./src/app/pages/perfil/perfil-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilPageRoutingModule": () => (/* binding */ PerfilPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil.page */ 7992);




const routes = [
    {
        path: '',
        component: _perfil_page__WEBPACK_IMPORTED_MODULE_0__.PerfilPage
    }
];
let PerfilPageRoutingModule = class PerfilPageRoutingModule {
};
PerfilPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PerfilPageRoutingModule);



/***/ }),

/***/ 6217:
/*!***********************************************!*\
  !*** ./src/app/pages/perfil/perfil.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilPageModule": () => (/* binding */ PerfilPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _perfil_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil-routing.module */ 8911);
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perfil.page */ 7992);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/google-maps */ 6095);








let PerfilPageModule = class PerfilPageModule {
};
PerfilPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _perfil_routing_module__WEBPACK_IMPORTED_MODULE_0__.PerfilPageRoutingModule,
            _angular_google_maps__WEBPACK_IMPORTED_MODULE_7__.GoogleMapsModule
        ],
        declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_1__.PerfilPage]
    })
], PerfilPageModule);



/***/ }),

/***/ 7992:
/*!*********************************************!*\
  !*** ./src/app/pages/perfil/perfil.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilPage": () => (/* binding */ PerfilPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_perfil_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./perfil.page.html */ 3827);
/* harmony import */ var _perfil_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perfil.page.scss */ 5831);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/google-maps */ 6095);
/* harmony import */ var src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/geolocation.service */ 4375);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ 3071);







let PerfilPage = class PerfilPage {
    constructor(_geo, _user) {
        this._geo = _geo;
        this._user = _user;
        this.mapOptions = {
            center: { lat: this._geo.lat, lng: this._geo.lon },
            zoom: 14,
            minZoom: 12,
            maxZoom: 16
        };
        this.myLocation = { name: '', position: { lat: this._geo.lat, lng: this._geo.lon } };
        this.myOpt = { label: '', icon: 'https://maps.google.com/mapfiles/arrow.png' };
        this.markerOptions = [];
        this.markers = [];
    }
    ngAfterViewInit() {
        //console.log(this.markers)
        let center = {
            lat: this._geo.lat,
            lng: this._geo.lon,
        };
        this._geo.setCordenates(center, {}).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log(res.cerca);
            yield this.generarPuntos(res.cerca);
        }));
    }
    ngOnInit() {
    }
    recalcular() {
        var bounds = this.getBounds(this.markers);
        this.map.googleMap.fitBounds(bounds);
    }
    getBounds(markers) {
        let north;
        let south;
        let east;
        let west;
        for (const marker of markers) {
            // set the coordinates to marker's lat and lng on the first run.
            // if the coordinates exist, get max or min depends on the coordinates.
            north = north !== undefined ? Math.max(north, marker.position.lat) : marker.position.lat;
            south = south !== undefined ? Math.min(south, marker.position.lat) : marker.position.lat;
            east = east !== undefined ? Math.max(east, marker.position.lng) : marker.position.lng;
            west = west !== undefined ? Math.min(west, marker.position.lng) : marker.position.lng;
        }
        ;
        const bounds = { north, south, east, west };
        return bounds;
    }
    generarPuntos(puntosRes) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            //console.log("llega")
            var puntos = puntosRes;
            this.markers.push(this.myLocation);
            this.markerOptions.push(this.myOpt);
            //console.log(this.markers)
            const bounds = yield this.getBounds(this.markers);
            yield this.map.googleMap.fitBounds(bounds);
        });
    }
};
PerfilPage.ctorParameters = () => [
    { type: src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_2__.GeolocationService },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService }
];
PerfilPage.propDecorators = {
    map: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: [_angular_google_maps__WEBPACK_IMPORTED_MODULE_6__.GoogleMap,] }]
};
PerfilPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-perfil',
        template: _raw_loader_perfil_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_perfil_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PerfilPage);



/***/ }),

/***/ 5831:
/*!***********************************************!*\
  !*** ./src/app/pages/perfil/perfil.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  letter-spacing: 1px;\n  height: 65px;\n}\nion-toolbar ion-icon {\n  font-size: 1.6rem;\n  color: #5501bc;\n}\nion-toolbar .info {\n  margin-top: 10px;\n  display: flex;\n  align-items: center;\n}\nion-toolbar .info ion-avatar {\n  max-width: 51px;\n  max-height: 51px;\n  margin-left: 15px;\n}\nion-toolbar .details {\n  margin-left: 15px;\n  display: flex;\n  flex-direction: column;\n}\nion-toolbar .details h1, ion-toolbar .details p {\n  margin: 0;\n  color: #5501bc;\n  margin-left: 10px;\n}\nion-toolbar .details h1 {\n  font-size: 1.2rem;\n  font-weight: bold;\n}\nion-toolbar .details p {\n  opacity: 0.7;\n  margin-top: 3px;\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmZpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQUk7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUFFUjtBQUFJO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFFUjtBQURRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFHWjtBQUNJO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDUjtBQUFRO0VBQ0ksU0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUVaO0FBQVE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FBRVo7QUFBUTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFFWiIsImZpbGUiOiJwZXJmaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICBpb24taWNvbntcclxuICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgICAgICBjb2xvcjogIzU1MDFiYztcclxuICAgIH1cclxuICAgIC5pbmZve1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGlvbi1hdmF0YXJ7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNTFweDtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogNTFweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIC5kZXRhaWxze1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBoMSxwe1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiM1NTAxYmM7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ 3827:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfil/perfil.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar class=\"ion-padding\">\n    <div class=\"info\">\n      <ion-icon name=\"chevron-back-outline\" routerLink=\"/tabs/home\"></ion-icon>\n      \n      <span class=\"details\">\n        <h1>Perfil</h1>\n      </span>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>Tu información</ion-card-subtitle>\n      <ion-card-title>Tus datos actuales</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-label>Nombre</ion-label>\n        <ion-input value=\"{{_user.user.nombre}}\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Apellido</ion-label>\n        <ion-input  value=\"{{_user.user.apellido}}\"></ion-input>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>GPS Tiempo Real</ion-card-subtitle>\n      <ion-card-title>Tus coordenadas actuales</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n      <ion-card-subtitle>Latitud: {{_geo.lat}}</ion-card-subtitle>\n      <ion-card-subtitle>Logitud: {{_geo.lon}}</ion-card-subtitle>\n    </ion-card-content>\n  </ion-card>\n\n  <div class=\"my-google-map\">\n    <google-map [options]=\"mapOptions\"  width=\"100%\" height=\"200px\">\n      <map-marker *ngFor=\"let marker of markers;let i=index\" [position]=\"marker.position\" [options]=\"markerOptions[i]\"></map-marker>\n    </google-map>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_perfil_perfil_module_ts.js.map