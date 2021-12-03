(self["webpackChunkcadEmpresa"] = self["webpackChunkcadEmpresa"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _pages_login_login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/login/login.page */ 3058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 2891);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.guard */ 2993);






const routes = [
    {
        path: '',
        component: _pages_login_login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    },
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 5564)).then(m => m.TabsPageModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
    },
    {
        path: 'alerta',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ionic-native_call-number___ivy_ngcc___ngx_index_js"), __webpack_require__.e("src_app_pages_alerta_alerta_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/alerta/alerta.module */ 7482)).then(m => m.AlertaPageModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
    },
    {
        path: 'equipos',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_google-maps_fesm2020_google-maps_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_equipos_equipos_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/equipos/equipos.module */ 7399)).then(m => m.EquiposPageModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 1053)).then(m => m.LoginPageModule)
    },
    {
        path: 'bienvenida',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_bienvenida_bienvenida_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/bienvenida/bienvenida.module */ 4232)).then(m => m.BienvenidaPageModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
    },
    {
        path: 'scaner',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_scaner_scaner_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/scaner/scaner.module */ 9846)).then(m => m.ScanerPageModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
    },
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ionic-native_call-number___ivy_ngcc___ngx_index_js"), __webpack_require__.e("src_app_pages_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 7994)).then(m => m.HomePageModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
    },
    {
        path: 'detalle-alerta/:alerta',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_google-maps_fesm2020_google-maps_mjs"), __webpack_require__.e("default-src_app_pages_listar-equipos_listar-equipos_page_ts"), __webpack_require__.e("src_app_pages_detalle-alerta_detalle-alerta_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/detalle-alerta/detalle-alerta.module */ 7810)).then(m => m.DetalleAlertaPageModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
    },
    {
        path: 'detalle-equipo',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_google-maps_fesm2020_google-maps_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_detalle-equipo_detalle-equipo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/detalle-equipo/detalle-equipo.module */ 6271)).then(m => m.DetalleEquipoPageModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
    },
    {
        path: 'detalle-reserva',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_detalle-reserva_detalle-reserva_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/detalle-reserva/detalle-reserva.module */ 3957)).then(m => m.DetalleReservaPageModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
    },
    {
        path: 'listar-equipos',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_listar-equipos_listar-equipos_page_ts"), __webpack_require__.e("src_app_pages_listar-equipos_listar-equipos_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/listar-equipos/listar-equipos.module */ 7803)).then(m => m.ListarEquiposPageModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
    },
    {
        path: 'perfil',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_google-maps_fesm2020_google-maps_mjs"), __webpack_require__.e("src_app_pages_perfil_perfil_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/perfil/perfil.module */ 6217)).then(m => m.PerfilPageModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_5__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
        providers: [_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 3069);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/push-notifications */ 8748);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/notification.service */ 2013);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/geolocation */ 1091);
/* harmony import */ var _services_geolocation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/geolocation.service */ 4375);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/user.service */ 3071);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/http.service */ 6858);












let AppComponent = class AppComponent {
    constructor(_user, _http, platform, _notification, menu, _geo, _route) {
        this._user = _user;
        this._http = _http;
        this.platform = platform;
        this._notification = _notification;
        this.menu = menu;
        this._geo = _geo;
        this._route = _route;
    }
    ngOnInit() {
        console.log('Initializing HomePage');
        if (this._user.validaStorage()) {
        }
        this.inicializar();
        this.locate();
    }
    inicializar() {
        if (this.platform.is('capacitor')) {
            _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_2__.PushNotifications.requestPermissions().then(result => {
                console.log("requestPermissions()");
                if (result.receive) {
                    _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_2__.PushNotifications.register();
                    this.addListeners();
                }
                else {
                    console.log("sinpermiso");
                }
            });
        }
        else {
            console.log("no es movil");
        }
    }
    closeMenu() {
        this.menu.close();
    }
    logout() {
        this._user.user = {
            rut: null,
            nombre: null,
            apellido: null
        };
        localStorage.removeItem('user');
        this.closeMenu();
    }
    addListeners() {
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_2__.PushNotifications.addListener('registration', (token) => {
            console.log(token.value);
            this._notification.token = token.value;
            let input = { token: token.value, usuario: this._user.rut };
            this._http.ingresoToken(input).subscribe((res) => {
                console.log(res);
            });
            //console.log('Push registration success, token: ' + token.value)
        });
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_2__.PushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
            //alert(JSON.stringify(notification));
            //alert(notification.notification.data.vista)
            if (notification.notification.data.vista) {
                if (notification.notification.data.id) {
                    this._route.navigateByUrl('/' + notification.notification.data.vista + "/" + notification.notification.data.id);
                }
                else {
                    this._route.navigateByUrl('/' + notification.notification.data.vista);
                }
            }
            /*{"actionId":"tap",
                "notification":{
                  "id":"0:1636941734614872%729f83c3729f83c3",
                  "data":{
                    "google.delivered_priority":"normal",
                    "google.sent_time":"1636941734597",
                    "google.ttl":"2419200",
                    "google.original_priority":"normal",
                    "id":"10001",
                    "from":"172098245835",
                    "vista":"alerta",
                      "message":"{
                        \"sound\":\"mysound\",
                        \"icon\":\"myicon\",
                        \"title\":\"LOGRADOOOOOO !!!!\",
                        \"body\":\"CSM
                        \"}",
                    "gcm.n.analytics_data":"Bundle[mParcelledData.dataSize=100]",
                    "collapse_key":"com.cadempresa.app"
                  }
                }
              }
            */
            console.log('Push action performed: ' + JSON.stringify(notification));
        });
    }
    locate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_4__.Geolocation.watchPosition({ enableHighAccuracy: true, timeout: 10000 }, (res) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                //console.log(res);
                this.coords = res.coords;
                this.center = {
                    lat: this.coords.latitude,
                    lng: this.coords.longitude,
                };
                if (this._geo.lat != this.coords.latitude || this._geo.lon != this.coords.longitude) {
                    let input = { usuario: this._user.user.rut };
                    this._geo.setCordenates(this.center, input).subscribe((res) => {
                        this._geo.points = res.cerca;
                        console.log(res);
                    });
                }
            }));
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService },
    { type: _services_http_service__WEBPACK_IMPORTED_MODULE_7__.HttpService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform },
    { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.MenuController },
    { type: _services_geolocation_service__WEBPACK_IMPORTED_MODULE_5__.GeolocationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 2891);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 1841);









//import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
//const config: SocketIoConfig = { url: 'https://onlineweb-sb.com:3000', options: { transports: ['websocket']} };
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
            //  SocketIoModule.forRoot(config)
        ],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicRouteStrategy }, _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 2993:
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 2891);




let AuthGuard = class AuthGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    /*canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return true;
    }*/
    canActivate(next, state) {
        if (this.auth.isLoggedIn()) {
            return true;
        }
        this.router.navigateByUrl('/login');
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ 2891:
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


let AuthService = class AuthService {
    constructor() { }
    isLoggedIn() {
        if (localStorage.getItem("user")) {
            return true;
        }
        else {
            return false;
        }
    }
};
AuthService.ctorParameters = () => [];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 1021);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 8781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/geolocation.service */ 4375);
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http.service */ 6858);
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/notification.service */ 2013);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ 3071);









let LoginPage = class LoginPage {
    constructor(_notification, _geo, router, _http, _user) {
        this._notification = _notification;
        this._geo = _geo;
        this.router = router;
        this._http = _http;
        this._user = _user;
        this.rut = "";
        this.pass = "";
        this.user = {
            rut: "",
            nombre: "",
            apellido: ""
        };
    }
    ngOnInit() {
        if (this._user.validaStorage()) {
            this.router.navigateByUrl('/bienvenida');
        }
    }
    login() {
        console.log(this.rut);
        let input = { rut: this.rut, pass: this.pass };
        this._http.login(input).subscribe((res) => {
            console.log(res);
            if (res.resultado == "OK") {
                console.log(res.usuario);
                this._user.rut = res.usuario.rut;
                this._user.nombre = res.usuario.nombre;
                this._user.apellido = res.usuario.apellido;
                this.user = res.usuario;
                console.log(this.user);
                this._user.user = this.user;
                localStorage.setItem('user', JSON.stringify(this.user));
                let input = { token: this._notification.token, usuario: this._user.rut };
                let center = {
                    lat: this._geo.lat,
                    lng: this._geo.lon,
                };
                this._geo.setCordenates(center, input).subscribe((res) => {
                    this._geo.points = res.cerca;
                    console.log(res);
                });
                this._http.ingresoToken(input).subscribe((res) => {
                    console.log(res);
                    if (res.resultado == "OK") {
                        if (this._user.validaStorage()) {
                            this.router.navigate(["/bienvenida"]);
                        }
                    }
                    else {
                        console.log(res);
                    }
                });
            }
            else {
                console.log(res.resultado);
            }
        });
    }
    /*login(){ //API DANIEL
      //console.log(this.rut)
      let input = {rut:this.rut,clave:this.pass};
      this._http.login(input).subscribe((res)=>{
        //console.log(res)
        if(res.resultado.persona.id_persona != null){
          //console.log(res.usuario)
          this._user.rut = res.resultado.persona.rut_persona;
          this._user.nombre = res.resultado.persona.nombre_persona;
          this._user.apellido = res.resultado.persona.apellido_persona;
          this.user = res.resultado.persona;
          //console.log(this.user)
          this._user.user = this.user;
          console.log(this._user.user)
          localStorage.setItem('user',JSON.stringify(this.user));
  
  
          let input = {token: this._notification.token,usuario:this._user.user.id_persona}
          let center = {
            lat: this._geo.lat,
            lng: this._geo.lon
          }
          this._geo.setCordenates(center,input).subscribe((res) => {
            this._geo.points = res.cerca;
            //console.log(res)
          });
          
          this._http.ingresoToken(input).subscribe((res)=>{
            console.log(res)
            //if(res.resultado == "OK"){
            if(res.resultado.message == "Operation done successfully"){
              if(this._user.validaStorage()){
                this.router.navigate(["/bienvenida"]);
              }
            }else{
              console.log(res)
            }
           
          })
          
        }else{
          console.log(res.resultado)
        }
      })
     
    }*/
    setRut(valor) {
        this.rut = valor;
    }
    setPass(valor) {
        this.pass = valor;
    }
};
LoginPage.ctorParameters = () => [
    { type: src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_4__.NotificationService },
    { type: src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_2__.GeolocationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 4375:
/*!*************************************************!*\
  !*** ./src/app/services/geolocation.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeolocationService": () => (/* binding */ GeolocationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.service */ 2013);




let GeolocationService = class GeolocationService {
    constructor(httpClient, _notification) {
        this.httpClient = httpClient;
        this._notification = _notification;
        this.points = [];
    }
    /*public setCordenates(cord,input){
      this.lat = cord.lat;
      this.lon = cord.lng;
  
      input.accion = "ingreso_gps";
      input.latitud = this.lat;
      input.longitud =  this.lon;
      input.tokenNotification = this._notification.token;
      let params = JSON.stringify(input);
      let headers = new HttpHeaders().set('Content-type','application/json');
          headers.append('Access-Control-Allow-Origin', 'http://localhost:8100');
          headers.append('Access-Control-Allow-Credentials', 'true');
      console.log("params:",params)
      return this.httpClient.post<any>("https://cad.onlineweb.cl/prueba_api.php",params,{headers:headers});
      //console.log(cord)
    }*/
    setCordenates(cord, input) {
        this.lat = cord.lat;
        this.lon = cord.lng;
        input.accion = "ingresoGPS";
        input.lat = this.lat;
        input.lng = this.lon;
        input.tokenNotification = this._notification.token;
        let params = JSON.stringify(input);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-type', 'application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:8100');
        headers.append('Access-Control-Allow-Credentials', 'true');
        console.log("params:", params);
        return this.httpClient.post("https://maqueta.onlineweb.cl/api.php", params, { headers: headers });
        //console.log(cord)
    }
    generaAlerta(input) {
        input.accion = "generaAlerta";
        input.lat = this.lat;
        input.lng = this.lon;
        input.tokenNotification = this._notification.token;
        let params = JSON.stringify(input);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-type', 'application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:8100');
        headers.append('Access-Control-Allow-Credentials', 'true');
        console.log("params:", params);
        return this.httpClient.post("https://maqueta.onlineweb.cl/api.php", params, { headers: headers });
    }
};
GeolocationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _notification_service__WEBPACK_IMPORTED_MODULE_0__.NotificationService }
];
GeolocationService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], GeolocationService);



/***/ }),

/***/ 6858:
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpService": () => (/* binding */ HttpService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1841);



let HttpService = class HttpService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this._api = 'https://maqueta.onlineweb.cl/api.php';
        this._apiTest = 'https://cad.onlineweb.cl/prueba_api.php';
        this._apiProd = 'https://cad.onlineweb.cl/api.php';
    }
    /*public login(input:any){
       input.accion = "login";
       
       let params = JSON.stringify(input);
       let headers = new HttpHeaders().set('Content-type','application/json');
           headers.append('Access-Control-Allow-Origin', 'http://localhost:8100');
           headers.append('Access-Control-Allow-Credentials', 'true');
       console.log("params:",params)
       return this.httpClient.post<any>(this._apiProd,params,{headers:headers});
     }
     public ingresoToken(input:any){
       input.accion = "persona_token";
       
       let params = JSON.stringify(input);
       let headers = new HttpHeaders().set('Content-type','application/json');
           headers.append('Access-Control-Allow-Origin', 'http://localhost:8100');
           headers.append('Access-Control-Allow-Credentials', 'true');
       console.log("params:",params)
       return this.httpClient.post<any>(this._apiTest,params,{headers:headers});
     }*/
    /*public prueba(input:any){
      input.accion = "";
      
      let params = JSON.stringify(input);
      let headers = new HttpHeaders().set('Content-type','application/json');
          headers.append('Access-Control-Allow-Origin', 'http://localhost:8100');
          headers.append('Access-Control-Allow-Credentials', 'true');
      console.log("params:",params)
      return this.httpClient.post<any>(this._api,params,{headers:headers});
    }*/
    login(input) {
        input.accion = "login";
        let params = JSON.stringify(input);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set('Content-type', 'application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:8100');
        headers.append('Access-Control-Allow-Credentials', 'true');
        console.log("params:", params);
        return this.httpClient.post(this._api, params, { headers: headers });
    }
    ingresoToken(input) {
        input.accion = "ingresoToken";
        let params = JSON.stringify(input);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set('Content-type', 'application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:8100');
        headers.append('Access-Control-Allow-Credentials', 'true');
        console.log("params:", params);
        return this.httpClient.post(this._api, params, { headers: headers });
    }
    getEmpresas(input) {
        input.accion = "getEmpresas";
        input.usuario = 123;
        let params = JSON.stringify(input);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set('Content-type', 'application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:8100');
        headers.append('Access-Control-Allow-Credentials', 'true');
        console.log("params:", params);
        return this.httpClient.post(this._api, params, { headers: headers });
    }
    getAlertas(input) {
        input.accion = "getAlertas";
        let params = JSON.stringify(input);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set('Content-type', 'application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:8100');
        headers.append('Access-Control-Allow-Credentials', 'true');
        console.log("params:", params);
        return this.httpClient.post(this._api, params, { headers: headers });
    }
    getDetalleAlerta(input) {
        input.accion = "getAlerta";
        let params = JSON.stringify(input);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set('Content-type', 'application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:8100');
        headers.append('Access-Control-Allow-Credentials', 'true');
        console.log("params:", params);
        return this.httpClient.post(this._api, params, { headers: headers });
    }
    getEquipos(input) {
        input.accion = "getEquipos";
        let params = JSON.stringify(input);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set('Content-type', 'application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:8100');
        headers.append('Access-Control-Allow-Credentials', 'true');
        console.log("params:", params);
        return this.httpClient.post(this._api, params, { headers: headers });
    }
    getEquipo(input) {
        input.accion = "getEquipo";
        let params = JSON.stringify(input);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set('Content-type', 'application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:8100');
        headers.append('Access-Control-Allow-Credentials', 'true');
        console.log("params:", params);
        return this.httpClient.post(this._api, params, { headers: headers });
    }
    cancelarAlerta(input) {
        input.accion = "cancelarAlerta";
        let params = JSON.stringify(input);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set('Content-type', 'application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:8100');
        headers.append('Access-Control-Allow-Credentials', 'true');
        console.log("params:", params);
        return this.httpClient.post(this._api, params, { headers: headers });
    }
    seleccionarAccion(input) {
        input.accion = "seleccionarAccion";
        input.alerta = 12;
        input.usuario = 12;
        input.tipo = 12;
        input.equipo = 12;
        let params = JSON.stringify(input);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set('Content-type', 'application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:8100');
        headers.append('Access-Control-Allow-Credentials', 'true');
        console.log("params:", params);
        return this.httpClient.post(this._api, params, { headers: headers });
    }
    getHistorial(input) {
        input.accion = "getHistorial";
        let params = JSON.stringify(input);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set('Content-type', 'application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:8100');
        headers.append('Access-Control-Allow-Credentials', 'true');
        console.log("params:", params);
        return this.httpClient.post(this._api, params, { headers: headers });
    }
    ingresoHistorial(input) {
        input.accion = "seleccionaAccion";
        let params = JSON.stringify(input);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set('Content-type', 'application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:8100');
        headers.append('Access-Control-Allow-Credentials', 'true');
        console.log("params:", params);
        return this.httpClient.post(this._api, params, { headers: headers });
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
HttpService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], HttpService);



/***/ }),

/***/ 2013:
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationService": () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


let NotificationService = class NotificationService {
    constructor() { }
};
NotificationService.ctorParameters = () => [];
NotificationService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], NotificationService);



/***/ }),

/***/ 3071:
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


let UserService = class UserService {
    constructor() { }
    validaStorage() {
        if (localStorage.getItem('user')) {
            this.user = JSON.parse(localStorage.getItem('user') || '{}');
            //this.user.token = localStorage.getItem('token');
            console.log("usuario logeado", this.user);
            console.log(this.user.nombre);
            return true;
        }
        else {
            console.log("sin logear");
            this.user = {
                rut: null,
                nombre: null,
                apellido: null
            };
            console.log(this.user);
            return false;
        }
    }
};
UserService.ctorParameters = () => [];
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		7321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		6108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		1489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		5830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		7757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		6911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		8695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		6034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		8837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		4195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		5931,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		4513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		8056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		1855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		8708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		3527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		9222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		9921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		3122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		1602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		6164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		7162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		7896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		5043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		7802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		9072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		2191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		7110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 3069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 8781:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-card.md.hydrated {\n  padding: 30px;\n  background: transparent;\n  border: #5501bc solid 1px;\n  border-radius: 10px 10px 10px 10px;\n  margin: 30px 15px;\n}\n\nion-content {\n  --ion-background-color:#5501bc;\n  --background: #fff;\n  --ion-color:#fff;\n}\n\nion-button {\n  --background: #f3f3f3;\n  --color: #c200d4;\n}\n\nion-label {\n  --color: #fff;\n}\n\nion-item.item-has-focus > ion-label {\n  color: #5501bc !important;\n}\n\nion-item.item-has-focus {\n  color: #5501bc !important;\n}\n\nion-item > ion-label {\n  color: #5501bc !important;\n}\n\nion-item .login-input {\n  --background:transparent !important;\n}\n\nion-item {\n  --background:transparent !important;\n}\n\nion-item.item.md.ion-focusable.hydrated.item-label.item-label-floating.item-interactive.item-input {\n  margin-bottom: 15px;\n}\n\nion-content img {\n  width: 80%;\n  margin: 10%;\n}\n\nion-item.item-highlight, .item-inner-highlight {\n  --background: #5501bc!important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNBO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQUE7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0FBR0o7O0FBREE7RUFDSSxhQUFBO0FBSUo7O0FBREE7RUFDSSx5QkFBQTtBQUlKOztBQUZBO0VBQ0kseUJBQUE7QUFLSjs7QUFIQTtFQUNJLHlCQUFBO0FBTUo7O0FBSkE7RUFDSSxtQ0FBQTtBQU9KOztBQUxBO0VBQ0ksbUNBQUE7QUFRSjs7QUFOQTtFQUNJLG1CQUFBO0FBU0o7O0FBUEE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQVVKOztBQVJBO0VBQ0ksK0JBQUE7QUFXSiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZC5tZC5oeWRyYXRlZCB7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IzU1MDFiYyBzb2xpZCAxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgbWFyZ2luOiAzMHB4IDE1cHg7XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiM1NTAxYmM7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAtLWlvbi1jb2xvcjojZmZmO1xyXG59XHJcbmlvbi1idXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjNmM2YzO1xyXG4gICAgLS1jb2xvcjogI2MyMDBkNDtcclxufVxyXG5pb24tbGFiZWwge1xyXG4gICAgLS1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuaW9uLWl0ZW0uaXRlbS1oYXMtZm9jdXMgPiBpb24tbGFiZWx7XHJcbiAgICBjb2xvcjojNTUwMWJjIWltcG9ydGFudDtcclxufVxyXG5pb24taXRlbS5pdGVtLWhhcy1mb2N1cyB7XHJcbiAgICBjb2xvcjojNTUwMWJjIWltcG9ydGFudDtcclxufVxyXG5pb24taXRlbSA+IGlvbi1sYWJlbHtcclxuICAgIGNvbG9yOiM1NTAxYmMhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1pdGVtIC5sb2dpbi1pbnB1dHtcclxuICAgIC0tYmFja2dyb3VuZDp0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1pdGVte1xyXG4gICAgLS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWl0ZW0uaXRlbS5tZC5pb24tZm9jdXNhYmxlLmh5ZHJhdGVkLml0ZW0tbGFiZWwuaXRlbS1sYWJlbC1mbG9hdGluZy5pdGVtLWludGVyYWN0aXZlLml0ZW0taW5wdXQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5pb24tY29udGVudCBpbWcge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogMTAlO1xyXG59XHJcbmlvbi1pdGVtLml0ZW0taGlnaGxpZ2h0LCAuaXRlbS1pbm5lci1oaWdobGlnaHQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNTUwMWJjIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-menu side=\"end\" menuId=\"first\" *ngIf=\"_user.user.rut\">\n\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Configuración</ion-title>\n      </ion-toolbar>\n    </ion-header>\n  \n    <ion-content>\n      <ion-list>\n        <ion-item (click)=\"closeMenu()\" routerLink=\"/perfil\">Mi Perfil</ion-item>\n        <ion-item (click)=\"closeMenu()\" routerLink=\"/bienvenida\">Cambiar Empresa</ion-item>\n        <ion-item (click)=\"logout()\" routerLink=\"/login\">Cerrar Sesión</ion-item>\n      </ion-list>\n    </ion-content>\n  \n  </ion-menu>\n  <ion-router-outlet main></ion-router-outlet>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ 1021:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-content [fullscreen]=\"true\">\n  <img src=\"../../assets/logo/LogoCAD1.png\" width=\"100%\"/>\n  <ion-card>\n    \n    <ion-item>\n      <ion-label position=\"floating\">Usuario</ion-label>\n      <ion-input  type=\"text\" [value]=\"\" (change)=\"setRut($event.target.value)\" class=\"login-input\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Contraseña</ion-label>\n      <ion-input  type=\"text\" [value]=\"\" (change)=\"setPass($event.target.value)\" class=\"login-input\"></ion-input>\n    </ion-item>\n    <ion-button shape=\"round\" expand=\"block\" (click)=\"login()\">Iniciar Sesión</ion-button>\n\n  </ion-card>\n</ion-content>\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map