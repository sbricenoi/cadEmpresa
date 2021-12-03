(self["webpackChunkcadEmpresa"] = self["webpackChunkcadEmpresa"] || []).push([["src_app_pages_detalle-alerta_detalle-alerta_module_ts"],{

/***/ 6795:
/*!***********************************************************************!*\
  !*** ./src/app/pages/detalle-alerta/detalle-alerta-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetalleAlertaPageRoutingModule": () => (/* binding */ DetalleAlertaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _detalle_alerta_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detalle-alerta.page */ 4543);




const routes = [
    {
        path: '',
        component: _detalle_alerta_page__WEBPACK_IMPORTED_MODULE_0__.DetalleAlertaPage
    }
];
let DetalleAlertaPageRoutingModule = class DetalleAlertaPageRoutingModule {
};
DetalleAlertaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetalleAlertaPageRoutingModule);



/***/ }),

/***/ 7810:
/*!***************************************************************!*\
  !*** ./src/app/pages/detalle-alerta/detalle-alerta.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetalleAlertaPageModule": () => (/* binding */ DetalleAlertaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _detalle_alerta_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detalle-alerta-routing.module */ 6795);
/* harmony import */ var _detalle_alerta_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detalle-alerta.page */ 4543);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/google-maps */ 6095);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-socket-io */ 5421);









const config = { url: 'http://onlineweb-sb.com:3001/prueba',
    options: { transports: ['websocket', 'polling'], path: "/prueba/", reconnection: true, timeout: 10000 } };
let DetalleAlertaPageModule = class DetalleAlertaPageModule {
};
DetalleAlertaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _detalle_alerta_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetalleAlertaPageRoutingModule,
            _angular_google_maps__WEBPACK_IMPORTED_MODULE_7__.GoogleMapsModule,
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_8__.SocketIoModule.forRoot(config)
        ],
        declarations: [_detalle_alerta_page__WEBPACK_IMPORTED_MODULE_1__.DetalleAlertaPage]
    })
], DetalleAlertaPageModule);



/***/ }),

/***/ 4543:
/*!*************************************************************!*\
  !*** ./src/app/pages/detalle-alerta/detalle-alerta.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetalleAlertaPage": () => (/* binding */ DetalleAlertaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_detalle_alerta_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./detalle-alerta.page.html */ 6465);
/* harmony import */ var _detalle_alerta_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detalle-alerta.page.scss */ 4125);
/* harmony import */ var _listar_equipos_listar_equipos_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../listar-equipos/listar-equipos.page */ 6370);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/google-maps */ 6095);
/* harmony import */ var src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/geolocation.service */ 4375);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-socket-io */ 5421);
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/http.service */ 6858);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ 3071);












let DetalleAlertaPage = class DetalleAlertaPage {
    constructor(socket, _user, _http, _geo, router, actionSheetController, route, modal, alertController, toastController) {
        this.socket = socket;
        this._user = _user;
        this._http = _http;
        this._geo = _geo;
        this.router = router;
        this.actionSheetController = actionSheetController;
        this.route = route;
        this.modal = modal;
        this.alertController = alertController;
        this.toastController = toastController;
        this.mapOptions = {
            center: { lat: this._geo.lat, lng: this._geo.lon },
            zoom: 14,
            minZoom: 12,
            maxZoom: 16
        };
        this.markerOptions = [];
        this.markers = [];
        this.historial = [];
        this.myLocation = { name: '', position: { lat: this._geo.lat, lng: this._geo.lon } };
        this.myOpt = { label: '', icon: 'https://maps.google.com/mapfiles/arrow.png' };
        this.equipoa = { name: '', position: { lat: this._geo.lat - 0.00034, lng: this._geo.lon + 0.0054 } };
        this.equipoaOp = { label: '', icon: 'https://www.google.com/mapfiles/markerA.png' };
        this.equipob = { name: '', position: { lat: this._geo.lat + 0.00024, lng: this._geo.lon - 0.0044 } };
        this.equipobOp = { label: '', icon: 'https://www.google.com/mapfiles/markerB.png' };
        this.estadoAlerta = 1;
    }
    ngOnInit() {
        this.alertaID = this.router.snapshot.paramMap.get('alerta');
        let input = {
            alerta: this.alertaID
        };
        this._http.getDetalleAlerta(input).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log(JSON.stringify(res));
            console.log(res);
            this.estadoAlerta = res.estado;
            console.log(this.estadoAlerta);
            this.lngAlerta = parseFloat(res.lng);
            this.latAlerta = parseFloat(res.lat);
            yield this.generarPuntos(res.equipos);
            yield this.recalcular();
            //this.historial = res.historial;
            /*this.historial = []
            for(let c=0;c<res.historialCount;c++){
              this.historial.push(res.historial[c]);
            }*/
            //console.log(this.historial)
        }));
        /*
        this.socket.connect();
        this.socket.fromEvent('alerta:listarHistorial').subscribe((datos:any) => {
          console.log(datos);
          this.historial = []
          for(let c=0;c<datos.length;c++){
            this.historial.push(datos[c]);
          }
    
          console.log("DATOS FINALES")
          console.log(this.historial)
        });
        
        this.socket.emit('alerta:listarHistorial', {alerta:this.alertaID});
    */
        setInterval(() => {
            if (this.alertaID != null && this.alertaID != "") {
                this._http.getHistorial(input).subscribe((res) => {
                    this.historial = [];
                    for (let c = 0; c < res.historial.length; c++) {
                        this.historial.push(res.historial[c]);
                    }
                });
            }
        }, 3000);
    }
    close() {
        this.route.navigate(['/tabs']);
    }
    deas(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _listar_equipos_listar_equipos_page__WEBPACK_IMPORTED_MODULE_2__.ListarEquiposPage,
                animated: true,
                mode: 'ios',
                backdropDismiss: true,
                swipeToClose: true,
                componentProps: {
                    'alerta': this.alertaID,
                },
                cssClass: 'listarEquipos-modal'
            });
            return yield modal.present();
        });
    }
    reanimacion() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'confirmaReanimacion',
                header: 'Confirmar!',
                message: 'Confirma si vas a ir a reanimar!!!',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    },
                    {
                        text: 'OK',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                            /*let data ={
                              alerta:this.alertaID,
                              usuario:this._user.user.rut,
                              seleccion:'reanimar',
                              equipo:null
                            }
                            console.log(data)*/
                            //this.socket.emit('alerta:ingresoHistorial', data);
                            let input = {
                                alerta: this.alertaID,
                                usuario: this._user.user.rut,
                                seleccion: 'reanimar',
                                equipo: null
                            };
                            this._http.ingresoHistorial(input).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                                console.log(res);
                                const toast = yield this.toastController.create({
                                    header: 'Gracias!!',
                                    message: 'Se ha notificado a todos',
                                    position: 'top',
                                    duration: 2000
                                });
                                yield toast.present();
                            }));
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    cancelar(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Por qué cancelas la emergencia?',
                cssClass: 'my-custom-class',
                buttons: [{
                        text: 'era una broma',
                        icon: 'alert-outline',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                            let input = { alerta: this.alertaID, tipo: 9, usuario: this._user.user.rut };
                            this._http.cancelarAlerta(input).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                                console.log(JSON.stringify(res));
                                console.log(res);
                                if (res.resultado == "OK") {
                                    const toast = yield this.toastController.create({
                                        header: 'Emergencia Cancelad',
                                        message: 'se ha cancelado la emergencia',
                                        position: 'bottom',
                                        duration: 3000,
                                        animated: true,
                                        translucent: true
                                    });
                                    yield toast.present();
                                }
                            }));
                        })
                    }, {
                        text: 'NO era una emergencia vital',
                        icon: 'notifications-off-outline',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                            let input = { alerta: this.alertaID, tipo: 8, usuario: this._user.user.rut };
                            this._http.cancelarAlerta(input).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                                console.log(JSON.stringify(res));
                                console.log(res);
                                if (res.resultado == "OK") {
                                    const toast = yield this.toastController.create({
                                        header: 'Emergencia Cancelad',
                                        message: 'se ha cancelado la emergencia',
                                        position: 'bottom',
                                        duration: 3000,
                                        animated: true,
                                        translucent: true
                                    });
                                    yield toast.present();
                                }
                            }));
                        })
                    }, {
                        text: 'Fué llevado a un centro',
                        icon: 'fitness-outline',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                            let input = { alerta: this.alertaID, tipo: 88, usuario: this._user.user.rut };
                            this._http.cancelarAlerta(input).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                                console.log(JSON.stringify(res));
                                console.log(res);
                                if (res.resultado == "OK") {
                                    const toast = yield this.toastController.create({
                                        header: 'Emergencia Cancelad',
                                        message: 'se ha cancelado la emergencia',
                                        position: 'bottom',
                                        duration: 3000,
                                        animated: true,
                                        translucent: true
                                    });
                                    yield toast.present();
                                }
                            }));
                        })
                    }, {
                        text: 'Otro Motivo',
                        icon: 'create-outline',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                            let input = { alerta: this.alertaID, tipo: 99, usuario: this._user.user.rut };
                            this._http.cancelarAlerta(input).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                                console.log(JSON.stringify(res));
                                console.log(res);
                                if (res.resultado == "OK") {
                                    const toast = yield this.toastController.create({
                                        header: 'Emergencia Cancelad',
                                        message: 'se ha cancelado la emergencia',
                                        position: 'bottom',
                                        duration: 3000,
                                        animated: true,
                                        translucent: true
                                    });
                                    yield toast.present();
                                }
                            }));
                        })
                    }, {
                        text: 'NO Cancelar Emergencia',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                        }
                    }]
            });
            yield actionSheet.present();
            const { role } = yield actionSheet.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let emergencia = { name: '', position: { lat: this.latAlerta, lng: this.lngAlerta } };
            let emergenciaOp = { label: '', icon: 'https://www.google.com/mapfiles/dd-start.png' };
            //creamos marker mi ubicación        
            this.markers.push(this.myLocation);
            this.markerOptions.push(this.myOpt);
            //creamos marker de emergencia
            this.markers.push(emergencia);
            this.markerOptions.push(emergenciaOp);
            var puntos = puntosRes;
            /*this.markers.push(this.equipoa);
            this.markerOptions.push(this.equipoaOp);
            this.markers.push(this.equipob);
            this.markerOptions.push(this.equipobOp);*/
            for (let p = 0; p < puntos.length; p++) {
                let icono = 'https://www.google.com/mapfiles/marker' + puntos[p].letra + '.png';
                let punto = {
                    name: '',
                    position: { lat: parseFloat(puntos[p].lat), lng: parseFloat(puntos[p].lng) }
                };
                let puntoOp = { label: '', icon: icono };
                this.markers.push(punto);
                this.markerOptions.push(puntoOp);
            }
            console.log(this.markers);
            const bounds = yield this.getBounds(this.markers);
            yield this.map.googleMap.fitBounds(bounds);
        });
    }
    cargarHistorial() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log("cargando");
            let input = { alerta: this.alertaID };
            /*this._http.getHistorial({}).subscribe((res)=>{
              console.log(res)
            })*/
        });
    }
};
DetalleAlertaPage.ctorParameters = () => [
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__.Socket },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService },
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_4__.HttpService },
    { type: src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_3__.GeolocationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ActionSheetController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController }
];
DetalleAlertaPage.propDecorators = {
    map: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: [_angular_google_maps__WEBPACK_IMPORTED_MODULE_11__.GoogleMap,] }]
};
DetalleAlertaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-detalle-alerta',
        template: _raw_loader_detalle_alerta_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_detalle_alerta_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DetalleAlertaPage);



/***/ }),

/***/ 4125:
/*!***************************************************************!*\
  !*** ./src/app/pages/detalle-alerta/detalle-alerta.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  letter-spacing: 1px;\n  height: 65px;\n}\nion-toolbar ion-icon {\n  font-size: 1.6rem;\n  color: #5501bc;\n}\nion-toolbar .info {\n  margin-top: 10px;\n  display: flex;\n  align-items: center;\n}\nion-toolbar .info ion-avatar {\n  max-width: 51px;\n  max-height: 51px;\n  margin-left: 15px;\n}\nion-toolbar .details {\n  margin-left: 15px;\n  display: flex;\n  flex-direction: column;\n}\nion-toolbar .details h1, ion-toolbar .details p {\n  margin: 0;\n  color: #5501bc;\n  margin-left: 10px;\n}\nion-toolbar .details h1 {\n  font-size: 1.2rem;\n  font-weight: bold;\n}\nion-toolbar .details p {\n  opacity: 0.7;\n  margin-top: 3px;\n  font-size: 0.8rem;\n}\nion-toolbar .calling ion-icon {\n  margin-right: 15px;\n  opacity: 0.7;\n}\nion-content .cancelada {\n  position: fixed;\n  z-index: 99999999;\n  top: 55px;\n  left: -10px;\n  width: 100%;\n  height: 100%;\n  background: #00000094;\n  padding: 15%;\n  text-align: center;\n}\nion-content .cancelada div {\n  width: 100%;\n  height: 60%;\n  background: #fff;\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFsbGUtYWxlcnRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQ0o7QUFBSTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQUVSO0FBQUk7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUVSO0FBRFE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUdaO0FBQ0k7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNSO0FBQVE7RUFDSSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBRVo7QUFBUTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUFFWjtBQUFRO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUVaO0FBRVE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFBWjtBQVNJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBTlI7QUFPUTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBTFoiLCJmaWxlIjoiZGV0YWxsZS1hbGVydGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICBpb24taWNvbntcclxuICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgICAgICBjb2xvcjogIzU1MDFiYztcclxuICAgIH1cclxuICAgIC5pbmZve1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGlvbi1hdmF0YXJ7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNTFweDtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogNTFweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIC5kZXRhaWxze1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBoMSxwe1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiM1NTAxYmM7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNhbGxpbmd7XHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcbiAgICBpZnJhbWV7XHJcbiAgICAgICAgLy9tYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgfVxyXG4gICAgLmNhbmNlbGFkYXtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgei1pbmRleDogOTk5OTk5OTk7XHJcbiAgICAgICAgdG9wOiA1NXB4O1xyXG4gICAgICAgIGxlZnQ6IC0xMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwOTQ7XHJcbiAgICAgICAgcGFkZGluZzoxNSU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGRpdntcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ 6465:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalle-alerta/detalle-alerta.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar class=\"ion-padding\">\n    <div class=\"info\">\n      <ion-icon (click)=\"close()\" name=\"chevron-back-outline\" routerLink=\"/equipos\"></ion-icon>\n      \n      <span class=\"details\">\n        <h1>Emergencia  {{alertaID}}</h1>\n        <p>hace 40 min</p>\n      </span>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"my-google-map\">\n    <google-map [options]=\"mapOptions\" width=\"100%\" height=\"300px\">\n      <map-marker *ngFor=\"let marker of markers;let i=index\" [position]=\"marker.position\" [options]=\"markerOptions[i]\"></map-marker>\n    </google-map>\n  </div>\n  <ion-card>\n      <ion-button (click)=\"reanimacion()\" fill=\"outline\" color=\"primary\" expand=\"full\">Reanimación</ion-button>\n      <ion-button (click)=\"deas(1)\" fill=\"outline\" color=\"secondary\" expand=\"full\">Buscar DEA</ion-button>\n      <ion-button (click)=\"cancelar(1)\" expand=\"full\" >Cancelar Emergencia</ion-button>\n    <ion-card-content>\n      <ion-list>\n        <ion-list-header>\n          Historial de acciones\n        </ion-list-header>\n\n        <ion-item *ngFor=\"let hist of historial\">\n          <ion-label>\n            <h2>{{hist.nombre}}</h2>\n            <h3>{{hist.accion}}</h3>\n            <h3>{{hist.direccion}}</h3>\n            <p>{{hist.fecha}}</p>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>    \n  </ion-card>\n  <ion-card class=\"cancelada\" *ngIf=\"estadoAlerta!=1\">\n    <div>\n      <ion-card-title>Emergencia Cancelada</ion-card-title>\n      <ion-button (click)=\"close()\" expand=\"full\">Salir</ion-button>\n    </div>    \n  </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_detalle-alerta_detalle-alerta_module_ts.js.map