(self["webpackChunkcadEmpresa"] = self["webpackChunkcadEmpresa"] || []).push([["common"],{

/***/ 8225:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createButtonActiveGesture)
/* harmony export */ });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ 3150);
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ 2954);
/* harmony import */ var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-34cb2743.js */ 9461);




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return (0,_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.a),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.b),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.h)();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ 7330:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ attachComponent),
/* harmony export */   "d": () => (/* binding */ detachComponent)
/* harmony export */ });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ 2377);


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => (0,_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__.c)(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ 2954:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ hapticSelectionStart),
/* harmony export */   "b": () => (/* binding */ hapticSelectionChanged),
/* harmony export */   "c": () => (/* binding */ hapticSelection),
/* harmony export */   "d": () => (/* binding */ hapticImpact),
/* harmony export */   "h": () => (/* binding */ hapticSelectionEnd)
/* harmony export */ });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ 408:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SPINNERS)
/* harmony export */ });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ 1269:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createColorClasses),
/* harmony export */   "g": () => (/* binding */ getClassMap),
/* harmony export */   "h": () => (/* binding */ hostContext),
/* harmony export */   "o": () => (/* binding */ openURL)
/* harmony export */ });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ 7385:
/*!*************************************************************!*\
  !*** ./src/app/pages/detalle-equipo/detalle-equipo.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetalleEquipoPage": () => (/* binding */ DetalleEquipoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_detalle_equipo_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./detalle-equipo.page.html */ 3937);
/* harmony import */ var _detalle_equipo_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detalle-equipo.page.scss */ 565);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/google-maps */ 6095);
/* harmony import */ var src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/geolocation.service */ 4375);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http.service */ 6858);








let DetalleEquipoPage = class DetalleEquipoPage {
    constructor(modal, navParams, _http, _geo) {
        this.modal = modal;
        this._http = _http;
        this._geo = _geo;
        this.myOpt = { label: '', icon: 'https://maps.google.com/mapfiles/arrow.png' };
        this.markerOptions = [];
        this.markers = [];
        this.idequipo = navParams.get('id');
        this.listar();
    }
    ngOnInit() {
    }
    close() {
        this.modal.dismiss();
    }
    listar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let input = {
                equipo: this.idequipo
            };
            this._http.getEquipo(input).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                console.log(res);
                if (res.resultado == "OK") {
                    this.equipo = res.equipo;
                    this.mapOptions = {
                        center: { lat: parseFloat(this.equipo.lat), lng: parseFloat(this.equipo.lng) },
                        zoom: 14,
                        minZoom: 12,
                        maxZoom: 16
                    };
                    this.myLocation = { name: '', position: { lat: parseFloat(this.equipo.lat), lng: parseFloat(this.equipo.lng) } };
                    yield this.generarPuntos(res.cerca);
                    console.log(this.equipo);
                }
            }));
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
DetalleEquipoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavParams },
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService },
    { type: src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_2__.GeolocationService }
];
DetalleEquipoPage.propDecorators = {
    map: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_angular_google_maps__WEBPACK_IMPORTED_MODULE_7__.GoogleMap,] }]
};
DetalleEquipoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-detalle-equipo',
        template: _raw_loader_detalle_equipo_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_detalle_equipo_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DetalleEquipoPage);



/***/ }),

/***/ 7231:
/*!***************************************************************!*\
  !*** ./src/app/pages/detalle-reserva/detalle-reserva.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetalleReservaPage": () => (/* binding */ DetalleReservaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_detalle_reserva_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./detalle-reserva.page.html */ 3506);
/* harmony import */ var _detalle_reserva_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detalle-reserva.page.scss */ 4470);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);





let DetalleReservaPage = class DetalleReservaPage {
    constructor(modal, navParams, toastController) {
        this.modal = modal;
        this.toastController = toastController;
        this.rut = "";
        this.reserva = {};
        this.form = [
            { val: 'dolorCabeza', isChecked: false },
            { val: 'tieneFiebre', isChecked: false },
            { val: 'tosSeca', isChecked: false },
            { val: 'dolorGarganta', isChecked: false },
        ];
        this.dolorCabeza = false;
        this.tieneFiebre = false;
        this.tosSeca = false;
        this.dolorGarganta = false;
        this.temperatura = 0;
        this.usuario = [
            {
                rut: '17768997-1',
                nombre: 'Sebastian',
                apellido: 'Briceño',
                correo: 'sebastianbriceno.1991@gmail.com',
                telefono: '+56964506888',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmr_FKgCoFkoxhbzHlwhmLBpIKvkAepBMEjQ&usqp=CAU',
                reservado: true
            },
            {
                rut: '16941170-0',
                nombre: 'Paula',
                apellido: 'Galimidi',
                correo: 'paula.galimidi@gmail.com',
                telefono: '+56912345678',
                avatar: 'https://i.pinimg.com/originals/19/87/90/198790eb7e08830027c1ae1686496c72.png',
                reservado: false
            }
        ];
        this.rut = navParams.get('rut');
        if (this.rut == '17768997-1') {
            this.reserva = this.usuario[0];
        }
        if (this.rut == '16941170-0') {
            this.reserva = this.usuario[1];
        }
        //console.log(this.form)
    }
    ngOnInit() { }
    cerrar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.modal.dismiss();
        });
    }
    guardar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            //console.log(this.form)
            console.log(this.dolorCabeza);
            console.log(this.tieneFiebre);
            console.log(this.tosSeca);
            console.log(this.dolorGarganta);
            console.log(this.temperatura);
            this.cerrar();
            const toast = yield this.toastController.create({
                message: 'Encuesta Guardada',
                position: 'bottom',
                duration: 3000,
                animated: true,
                translucent: true
            });
            yield toast.present();
        });
    }
    cambia(event) {
        if (event.currentTarget.id == "dolorCabeza") {
            this.dolorCabeza = event.currentTarget.checked;
        }
        if (event.currentTarget.id == "tieneFiebre") {
            this.tieneFiebre = event.currentTarget.checked;
        }
        if (event.currentTarget.id == "tosSeca") {
            this.tosSeca = event.currentTarget.checked;
        }
        if (event.currentTarget.id == "dolorGarganta") {
            this.dolorGarganta = event.currentTarget.checked;
        }
        if (event.currentTarget.id == "temperatura") {
            this.temperatura = event.currentTarget.value;
        }
        console.log(this.temperatura);
    }
};
DetalleReservaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController }
];
DetalleReservaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-detalle-reserva',
        template: _raw_loader_detalle_reserva_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_detalle_reserva_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DetalleReservaPage);



/***/ }),

/***/ 565:
/*!***************************************************************!*\
  !*** ./src/app/pages/detalle-equipo/detalle-equipo.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  letter-spacing: 1px;\n  height: 65px;\n}\nion-toolbar ion-icon {\n  font-size: 1.6rem;\n  color: #5501bc;\n}\nion-toolbar .info {\n  margin-top: 10px;\n  display: flex;\n  align-items: center;\n}\nion-toolbar .info ion-avatar {\n  max-width: 51px;\n  max-height: 51px;\n  margin-left: 15px;\n}\nion-toolbar .details {\n  margin-left: 15px;\n  display: flex;\n  flex-direction: column;\n}\nion-toolbar .details h1, ion-toolbar .details p {\n  margin: 0;\n  color: #5501bc;\n  margin-left: 10px;\n}\nion-toolbar .details h1 {\n  font-size: 1.2rem;\n  font-weight: bold;\n}\nion-toolbar .details p {\n  opacity: 0.7;\n  margin-top: 3px;\n  font-size: 0.8rem;\n}\nion-toolbar .calling ion-icon {\n  margin-right: 15px;\n  opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFsbGUtZXF1aXBvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQ0o7QUFBSTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQUVSO0FBQUk7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUVSO0FBRFE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUdaO0FBQ0k7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNSO0FBQVE7RUFDSSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBRVo7QUFBUTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUFFWjtBQUFRO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUVaO0FBRVE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFBWiIsImZpbGUiOiJkZXRhbGxlLWVxdWlwby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGhlaWdodDogNjVweDtcclxuICAgIGlvbi1pY29ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgICAgIGNvbG9yOiAjNTUwMWJjO1xyXG4gICAgfVxyXG4gICAgLmluZm97XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgaW9uLWF2YXRhcntcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MXB4O1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA1MXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgLmRldGFpbHN7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGgxLHB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgY29sb3I6IzU1MDFiYztcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgxe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2FsbGluZ3tcclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 4470:
/*!*****************************************************************!*\
  !*** ./src/app/pages/detalle-reserva/detalle-reserva.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-card div.avatar {\n  display: inline-block;\n  width: 40%;\n  text-align: center;\n}\n\nion-card div.avatar img {\n  width: 70%;\n}\n\nion-card div.info {\n  display: inline-block;\n  width: 60%;\n  vertical-align: top;\n}\n\nion-card-title.ion-inherit-color.ios.hydrated {\n  font-size: 13px;\n}\n\nion-card-subtitle.ion-inherit-color.ios.hydrated {\n  font-size: 11px !important;\n  text-transform: lowercase;\n}\n\nion-card {\n  --background: #ecf1fb;\n}\n\n.reserva-modal {\n  --background:#c200d4 !important;\n}\n\nion-content {\n  --background:#c200d4 !important;\n}\n\nion-content .cerrar {\n  border: #fff solid 1px;\n  border-radius: 10px;\n}\n\n.modal-wrapper {\n  background: #c200d4 !important;\n}\n\n.formulario ion-button {\n  margin-bottom: 15px;\n}\n\n.formulario ion-list ion-item {\n  margin-bottom: 15px;\n}\n\n.formulario ion-button {\n  --background:#5501bc;\n}\n\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFsbGUtcmVzZXJ2YS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksVUFBQTtBQUVKOztBQUNBO0VBQ0kscUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7QUFHSjs7QUFEQTtFQUNJLDBCQUFBO0VBQ0EseUJBQUE7QUFJSjs7QUFGQTtFQUNJLHFCQUFBO0FBS0o7O0FBSEE7RUFDSSwrQkFBQTtBQU1KOztBQUpBO0VBQ0ksK0JBQUE7QUFPSjs7QUFOSTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7QUFRUjs7QUFKQTtFQUNJLDhCQUFBO0FBT0o7O0FBSk07RUFDSSxtQkFBQTtBQU9WOztBQUpVO0VBQ0UsbUJBQUE7QUFNWjs7QUFITTtFQUNJLG9CQUFBO0FBS1Y7O0FBRkUsdUVBQUEiLCJmaWxlIjoiZGV0YWxsZS1yZXNlcnZhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIGRpdi5hdmF0YXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5pb24tY2FyZCBkaXYuYXZhdGFyIGltZyB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgLy9tYXJnaW46IDAgMTUlO1xyXG59XHJcbmlvbi1jYXJkIGRpdi5pbmZvIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcbmlvbi1jYXJkLXRpdGxlLmlvbi1pbmhlcml0LWNvbG9yLmlvcy5oeWRyYXRlZCB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuaW9uLWNhcmQtc3VidGl0bGUuaW9uLWluaGVyaXQtY29sb3IuaW9zLmh5ZHJhdGVkIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcclxufVxyXG5pb24tY2FyZCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNlY2YxZmI7XHJcbn1cclxuLnJlc2VydmEtbW9kYWx7XHJcbiAgICAtLWJhY2tncm91bmQ6I2MyMDBkNCAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNjMjAwZDQgIWltcG9ydGFudDtcclxuICAgIC5jZXJyYXJ7XHJcbiAgICAgICAgYm9yZGVyOiAjZmZmIHNvbGlkIDFweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubW9kYWwtd3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYzIwMGQ0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5mb3JtdWxhcmlve1xyXG4gICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgfVxyXG4gICAgICBpb24tbGlzdHtcclxuICAgICAgICAgIGlvbi1pdGVte1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAtLWJhY2tncm91bmQ6IzU1MDFiYztcclxuICAgICAgfVxyXG4gIH1cclxuICAvKiBXb3JrcyAtIHBhc3MgXCJteS1jdXN0b20tY2xhc3NcIiBpbiBjc3NDbGFzcyB0byBpbmNyZWFzZSBzcGVjaWZpY2l0eSAqL1xyXG4iXX0= */");

/***/ }),

/***/ 3937:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalle-equipo/detalle-equipo.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar class=\"ion-padding\">\n    <div class=\"info\">\n      <ion-icon (click)=\"close()\" name=\"chevron-back-outline\"></ion-icon>\n      \n      <span class=\"details\">\n        <h1>{{equipo.codigo}}</h1>\n        <p>activo</p>\n      </span>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"my-google-map\">\n    <google-map [options]=\"mapOptions\"  width=\"100%\" height=\"200px\">\n      <map-marker *ngFor=\"let marker of markers;let i=index\" [position]=\"marker.position\" [options]=\"markerOptions[i]\"></map-marker>\n    </google-map>\n  </div>\n  <ion-card>\n    <ion-item>\n      <ion-icon name=\"locate-outline\" slot=\"start\"></ion-icon>\n      <ion-label>{{equipo.codigo}}</ion-label>\n      <ion-button fill=\"outline\" color=\"success\" slot=\"end\">Activo</ion-button>\n    </ion-item>\n  \n    <ion-card-content>\n      <p>{{equipo.direccion}}</p>\n      <p>{{equipo.detalle}}</p>\n    </ion-card-content>\n\n    <ion-item>\n      <ion-button fill=\"outline\" color=\"primary\" slot=\"start\">Contactar Proveedor</ion-button>\n      <ion-button fill=\"outline\" color=\"danger\" slot=\"end\">Solicitar Eliminación</ion-button>\n    </ion-item>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ 3506:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalle-reserva/detalle-reserva.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"ion-padding\" color=\"primary\"> \n  <ion-button expand=\"block\" (click)=\"cerrar()\" class=\"ion-margin-top cerrar\"  color=\"primary\">Cerrar</ion-button>\n\n  <ion-card class=\"ion-padding\">\n    \n    <div class=\"avatar\">\n      <ion-avatar>\n        <img src=\"{{reserva.avatar}}\" />\n      </ion-avatar>\n      \n    </div>\n    <div class=\"info\">      \n      <ion-card-title>{{reserva.nombre}} {{reserva.apellido}}</ion-card-title>\n      <ion-card-subtitle>{{reserva.correo}}</ion-card-subtitle>\n      <ion-card-subtitle>{{reserva.telefono}}</ion-card-subtitle>\n      <ion-button fill=\"outline\" size=\"small\" color=\"success\" *ngIf=\"reserva.reservado==true\">RESERVADO</ion-button>\n      <ion-button fill=\"outline\" size=\"small\" color=\"warning\" *ngIf=\"reserva.reservado==false\">SIN RESERVA</ion-button>\n    </div>\n    \n  </ion-card>\n\n  <ion-card  class=\"ion-padding formulario\">\n    <ion-button expand=\"full\" color=\"success\">Sin Sintomas</ion-button>\n\n    <ion-list>\n      <ion-item *ngFor=\"let entry of form\">\n        <ion-label>{{entry.val}}</ion-label>\n        <ion-checkbox slot=\"end\" id=\"{{entry.val}}\" (ionChange)=\"cambia($event)\" [(ngModel)]=\"entry.isChecked\"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        <ion-label  >Temperatura</ion-label>\n        <ion-input type=\"number\" id=\"temperatura\" (keyup)=\"cambia($event)\" [(ngModel)]=\"temperatura\" ></ion-input>\n      </ion-item>\n      <ion-button shape=\"round\" expand=\"full\"  (click)=\"guardar()\">Guardar</ion-button>\n    </ion-list>\n\n    \n  </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=common.js.map