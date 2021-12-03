(self["webpackChunkcadEmpresa"] = self["webpackChunkcadEmpresa"] || []).push([["src_app_pages_scaner_scaner_module_ts"],{

/***/ 8036:
/*!***********************************************************************************!*\
  !*** ./node_modules/@capacitor-community/barcode-scanner/dist/esm/definitions.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportedFormat": () => (/* binding */ SupportedFormat)
/* harmony export */ });
var SupportedFormat;
(function (SupportedFormat) {
    // 1D Product
    SupportedFormat["UPC_A"] = "UPC_A";
    SupportedFormat["UPC_E"] = "UPC_E";
    SupportedFormat["UPC_EAN_EXTENSION"] = "UPC_EAN_EXTENSION";
    SupportedFormat["EAN_8"] = "EAN_8";
    SupportedFormat["EAN_13"] = "EAN_13";
    // 1D Industrial
    SupportedFormat["CODE_39"] = "CODE_39";
    SupportedFormat["CODE_39_MOD_43"] = "CODE_39_MOD_43";
    SupportedFormat["CODE_93"] = "CODE_93";
    SupportedFormat["CODE_128"] = "CODE_128";
    SupportedFormat["CODABAR"] = "CODABAR";
    SupportedFormat["ITF"] = "ITF";
    SupportedFormat["ITF_14"] = "ITF_14";
    // 2D
    SupportedFormat["AZTEC"] = "AZTEC";
    SupportedFormat["DATA_MATRIX"] = "DATA_MATRIX";
    SupportedFormat["MAXICODE"] = "MAXICODE";
    SupportedFormat["PDF_417"] = "PDF_417";
    SupportedFormat["QR_CODE"] = "QR_CODE";
    SupportedFormat["RSS_14"] = "RSS_14";
    SupportedFormat["RSS_EXPANDED"] = "RSS_EXPANDED";
})(SupportedFormat || (SupportedFormat = {}));
//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 7157:
/*!*****************************************************************************!*\
  !*** ./node_modules/@capacitor-community/barcode-scanner/dist/esm/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportedFormat": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.SupportedFormat),
/* harmony export */   "BarcodeScanner": () => (/* binding */ BarcodeScanner)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 8384);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 8036);

const BarcodeScanner = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('BarcodeScanner', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor-community_barcode-scanner_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 4257)).then(m => new m.BarcodeScannerWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 4963:
/*!*******************************************************!*\
  !*** ./src/app/pages/scaner/scaner-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScanerPageRoutingModule": () => (/* binding */ ScanerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _scaner_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scaner.page */ 4799);




const routes = [
    {
        path: '',
        component: _scaner_page__WEBPACK_IMPORTED_MODULE_0__.ScanerPage
    }
];
let ScanerPageRoutingModule = class ScanerPageRoutingModule {
};
ScanerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ScanerPageRoutingModule);



/***/ }),

/***/ 9846:
/*!***********************************************!*\
  !*** ./src/app/pages/scaner/scaner.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScanerPageModule": () => (/* binding */ ScanerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _scaner_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scaner-routing.module */ 4963);
/* harmony import */ var _scaner_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scaner.page */ 4799);







let ScanerPageModule = class ScanerPageModule {
};
ScanerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _scaner_routing_module__WEBPACK_IMPORTED_MODULE_0__.ScanerPageRoutingModule
        ],
        declarations: [_scaner_page__WEBPACK_IMPORTED_MODULE_1__.ScanerPage]
    })
], ScanerPageModule);



/***/ }),

/***/ 4799:
/*!*********************************************!*\
  !*** ./src/app/pages/scaner/scaner.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScanerPage": () => (/* binding */ ScanerPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_scaner_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./scaner.page.html */ 4289);
/* harmony import */ var _scaner_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scaner.page.scss */ 2304);
/* harmony import */ var _detalle_reserva_detalle_reserva_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../detalle-reserva/detalle-reserva.page */ 7231);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor-community/barcode-scanner */ 7157);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ 3071);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);









let ScanerPage = class ScanerPage {
    constructor(modal, alert, menu, _user, router) {
        this.modal = modal;
        this.alert = alert;
        this.menu = menu;
        this._user = _user;
        this.router = router;
        this.result = null;
        this.scanActive = false;
    }
    ngOnInit() {
        if (!this._user.empresa) {
            console.log("sin empresa seleccionada");
            this.router.navigate(['/bienvenida']);
        }
    }
    openMenu() {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    }
    ngAfterViewInit() {
        _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_3__.BarcodeScanner.prepare();
    }
    ngOnDestroy() {
        this.stopScanner();
    }
    reserva() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            //var rut = this.obtenerData('https://wwwwasdasd.com?RUN=17768997-1&type=CEDULA&serial=1233243453465');
            const modal = yield this.modal.create({
                component: _detalle_reserva_detalle_reserva_page__WEBPACK_IMPORTED_MODULE_2__.DetalleReservaPage,
                animated: true,
                mode: 'ios',
                backdropDismiss: false,
                cssClass: 'reserva-modal',
                componentProps: {
                    'rut': this.result,
                },
            });
            return yield modal.present();
        });
    }
    startScanner() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const allowed = yield this.checkPermission();
            if (allowed) {
                this.scanActive = true;
                const result = yield _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_3__.BarcodeScanner.startScan();
                if (result.hasContent) {
                    this.result = yield this.obtenerData(result.content);
                    this.scanActive = false;
                    this.reserva();
                }
            }
        });
    }
    stopScanner() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_3__.BarcodeScanner.stopScan();
            this.scanActive = false;
        });
    }
    checkPermission() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                const status = yield _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_3__.BarcodeScanner.checkPermission({ force: true });
                if (status.granted) {
                    resolve(true);
                }
                else if (status.denied) {
                    const alert = yield this.alert.create({
                        header: 'No permission',
                        message: 'Please allow camera access in your settings ',
                        buttons: [{
                                text: 'No',
                                role: 'cancel'
                            },
                            {
                                text: 'Open Settings',
                                handler: () => {
                                    _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_3__.BarcodeScanner.openAppSettings();
                                    resolve(false);
                                }
                            }]
                    });
                }
                else {
                    resolve(false);
                }
            }));
        });
    }
    obtenerData(data) {
        console.log(data);
        let variables = data.split('?');
        let campos = variables[1].split('&');
        let arr = [];
        for (let a = 0; a < campos.length; a++) {
            let dato = campos[a].split("=");
            if (dato[0].toLowerCase() == "run") {
                arr.push({ 'rut': dato[1] });
            }
        }
        console.log(arr);
        return arr[0].rut;
    }
};
ScanerPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
ScanerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-scaner',
        template: _raw_loader_scaner_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_scaner_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ScanerPage);



/***/ }),

/***/ 2304:
/*!***********************************************!*\
  !*** ./src/app/pages/scaner/scaner.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".new-background-color {\n  --background: #5501bc;\n}\n\nion-content {\n  --background: transparent;\n}\n\nion-toolbar ion-button {\n  --background:transparent;\n}\n\nion-title.md.title-default.hydrated {\n  color: #fff;\n  text-align: left;\n}\n\nion-button {\n  --background: #c200d4;\n}\n\n.iniciar {\n  height: 50px;\n  position: absolute;\n  top: 40%;\n  width: 100%;\n}\n\n.cerrar {\n  height: 40px;\n  position: absolute;\n  bottom: 15%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjYW5lci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKOztBQUNBO0VBQ0kseUJBQUE7QUFFSjs7QUFBQTtFQUNJLHdCQUFBO0FBR0o7O0FBREE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFJSjs7QUFEQTtFQUNJLHFCQUFBO0FBSUo7O0FBRkE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQUtKOztBQUhBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFNSiIsImZpbGUiOiJzY2FuZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ldy1iYWNrZ3JvdW5kLWNvbG9ye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNTUwMWJjO1xyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IFxyXG59XHJcbmlvbi10b29sYmFyIGlvbi1idXR0b257XHJcbiAgICAtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbn1cclxuaW9uLXRpdGxlLm1kLnRpdGxlLWRlZmF1bHQuaHlkcmF0ZWQge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5pb24tYnV0dG9ue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjYzIwMGQ0O1xyXG59XHJcbi5pbmljaWFye1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjQwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jZXJyYXJ7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206MTUlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */");

/***/ }),

/***/ 4289:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/scaner/scaner.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar  class=\"new-background-color\">\n    <ion-title>\n      Scanner   \n    </ion-title>\n    <ion-button slot=\"end\" (click)=\"openMenu()\">\n      <ion-icon  name=\"menu-outline\"></ion-icon>     \n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\" [style.--background]=\"scanActive ? '#00000000':'#fff'\">\n  <ion-button expand=\"block\" (click)=\"reserva()\" >Mostrar Reserva</ion-button>\n\n\n  <ion-button class=\"iniciar\" expand=\"block\" (click)=\"startScanner()\" [hidden]=\"scanActive\" >Escanear <ion-icon name=\"scan-outline\"></ion-icon></ion-button>\n  <ion-button class=\"cerrar\" expand=\"block\" (click)=\"stopScanner()\" [hidden]=\"!scanActive\" >Cerrar <ion-icon name=\"close-outline\"></ion-icon></ion-button>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_scaner_scaner_module_ts.js.map