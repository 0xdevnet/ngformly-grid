(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/__ivy_ngcc__/fesm2015/ngx-formly-core.js");





class AppComponent {
    constructor() {
        this.title = "mygrid";
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        this.model = {
            investments: [
                {
                    vin: "VIN1",
                    year: "2021-02-01",
                    make: "make1",
                    bodyStyle: "bodyStyle1"
                },
                {
                    vin: "VIN2",
                    year: "2021-02-02",
                    make: "make2",
                    bodyStyle: "bodyStyle2"
                },
                {
                    vin: "VIN3",
                    year: "2021-02-03",
                    make: "make3",
                    bodyStyle: "bodyStyle3"
                },
                {
                    vin: "VIN4",
                    year: "2021-02-04",
                    make: "make4",
                    bodyStyle: "bodyStyle4"
                },
                {
                    vin: "VIN5",
                    year: "2021-02-05",
                    make: "make5",
                    bodyStyle: "bodyStyle5"
                },
                {
                    vin: "VIN6",
                    year: "2021-02-06",
                    make: "make6",
                    bodyStyle: "bodyStyle6"
                },
                {
                    vin: "VIN7",
                    year: "2021-02-07",
                    make: "make7",
                    bodyStyle: "bodyStyle7"
                },
                {
                    vin: "VIN8",
                    year: "2021-02-08",
                    make: "make8",
                    bodyStyle: "bodyStyle8"
                },
            ],
        };
        this.options = {};
        this.fields = [
            {
                className: "section-label",
                template: "<h4>Can you tell us which vehicle you're insuring?</h4>",
            },
            {
                key: "investments",
                type: "grid",
                className: "ag-theme-balham",
                templateOptions: {
                    height: "370px",
                    gridOptions: {
                        rowHeight: 42,
                        columnDefs: [
                            {
                                headerName: "VIN",
                                field: "vin",
                                sortable: true,
                                width: 250,
                            },
                            {
                                headerName: "Year",
                                field: "year",
                                sortable: true,
                                width: 250,
                            },
                            {
                                headerName: "Make",
                                field: "make",
                                width: 250,
                            },
                            {
                                headerName: "Body Style",
                                field: "bodyStyle",
                            },
                        ],
                    },
                },
                fieldArray: {
                    fieldGroup: [
                        {
                            type: "input",
                            key: "vin",
                            templateOptions: {
                                required: true,
                            },
                        },
                        {
                            type: "input",
                            key: "year",
                            templateOptions: {
                                type: "date",
                            },
                        },
                        {
                            type: "input",
                            key: "make",
                            templateOptions: {},
                        },
                        {
                            type: "input",
                            key: "bodyStyle",
                            templateOptions: {},
                        },
                    ],
                },
            },
        ];
    }
    submit() {
        alert(JSON.stringify(this.model));
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 6, consts: [[3, "formGroup", "ngSubmit"], [3, "model", "fields", "options", "form"], ["type", "submit", 1, "btn", "btn-primary", "submit-button", 3, "disabled"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function AppComponent_Template_form_ngSubmit_0_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "formly-form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("model", ctx.model)("fields", ctx.fields)("options", ctx.options)("form", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__["FormlyForm"]], styles: ["form[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RldmVsb3BtZW50L01pa28vbXlncmlkL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogYXV0bztcbn1cbiIsImZvcm0ge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IGF1dG87XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-root",
                templateUrl: "./app.component.html",
                styleUrls: ["./app.component.scss"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/__ivy_ngcc__/fesm2015/ngx-formly-core.js");
/* harmony import */ var _ngx_formly_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-formly/bootstrap */ "./node_modules/@ngx-formly/bootstrap/__ivy_ngcc__/fesm2015/ngx-formly-bootstrap.js");
/* harmony import */ var _grid_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grid.type */ "./src/app/grid.type.ts");
/* harmony import */ var _grid_formly_cell_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./grid-formly-cell.component */ "./src/app/grid-formly-cell.component.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/__ivy_ngcc__/fesm2015/ag-grid-angular.js");



// import { AgGridModule } from "ag-grid-angular";









class AppModule {
}
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__["AgGridModule"].withComponents([_grid_formly_cell_component__WEBPACK_IMPORTED_MODULE_7__["GridFormlyCellComponent"]]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ngx_formly_core__WEBPACK_IMPORTED_MODULE_4__["FormlyModule"].forRoot({
                types: [
                    {
                        name: "grid",
                        component: _grid_type__WEBPACK_IMPORTED_MODULE_6__["GridTypeComponent"],
                        defaultOptions: {
                            templateOptions: {
                                width: "100%",
                                height: "800px",
                            },
                        },
                    },
                ],
            }),
            _ngx_formly_bootstrap__WEBPACK_IMPORTED_MODULE_5__["FormlyBootstrapModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _grid_type__WEBPACK_IMPORTED_MODULE_6__["GridTypeComponent"], _grid_formly_cell_component__WEBPACK_IMPORTED_MODULE_7__["GridFormlyCellComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__["AgGridModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ngx_formly_core__WEBPACK_IMPORTED_MODULE_4__["FormlyModule"], _ngx_formly_bootstrap__WEBPACK_IMPORTED_MODULE_5__["FormlyBootstrapModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _grid_type__WEBPACK_IMPORTED_MODULE_6__["GridTypeComponent"], _grid_formly_cell_component__WEBPACK_IMPORTED_MODULE_7__["GridFormlyCellComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__["AgGridModule"].withComponents([_grid_formly_cell_component__WEBPACK_IMPORTED_MODULE_7__["GridFormlyCellComponent"]]),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _ngx_formly_core__WEBPACK_IMPORTED_MODULE_4__["FormlyModule"].forRoot({
                        types: [
                            {
                                name: "grid",
                                component: _grid_type__WEBPACK_IMPORTED_MODULE_6__["GridTypeComponent"],
                                defaultOptions: {
                                    templateOptions: {
                                        width: "100%",
                                        height: "800px",
                                    },
                                },
                            },
                        ],
                    }),
                    _ngx_formly_bootstrap__WEBPACK_IMPORTED_MODULE_5__["FormlyBootstrapModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/grid-formly-cell.component.ts":
/*!***********************************************!*\
  !*** ./src/app/grid-formly-cell.component.ts ***!
  \***********************************************/
/*! exports provided: GridFormlyCellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridFormlyCellComponent", function() { return GridFormlyCellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/__ivy_ngcc__/fesm2015/ngx-formly-core.js");



class GridFormlyCellComponent {
    agInit(params) {
        this.params = params;
    }
    refresh() {
        return false;
    }
    getField() {
        const rowIndex = this.params.rowIndex;
        const prop = this.params.colDef.field;
        const fg = this.params.context.parentField.fieldGroup;
        return fg[rowIndex].fieldGroup.find((f) => f.key === prop);
    }
}
GridFormlyCellComponent.??fac = function GridFormlyCellComponent_Factory(t) { return new (t || GridFormlyCellComponent)(); };
GridFormlyCellComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: GridFormlyCellComponent, selectors: [["formly-ag-grid-cell"]], decls: 1, vars: 1, consts: [[3, "field"]], template: function GridFormlyCellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "formly-field", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("field", ctx.getField());
    } }, directives: [_ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__["FormlyField"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](GridFormlyCellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "formly-ag-grid-cell",
                template: `<formly-field [field]="getField()"></formly-field>`,
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/grid.type.ts":
/*!******************************!*\
  !*** ./src/app/grid.type.ts ***!
  \******************************/
/*! exports provided: GridTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridTypeComponent", function() { return GridTypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/__ivy_ngcc__/fesm2015/ngx-formly-core.js");
/* harmony import */ var _grid_formly_cell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid-formly-cell.component */ "./src/app/grid-formly-cell.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/__ivy_ngcc__/fesm2015/ag-grid-angular.js");






const _c0 = ["agGrid"];
class GridTypeComponent extends _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__["FieldArrayType"] {
    constructor() {
        super(...arguments);
        this.style = {};
    }
    ngOnInit() {
        this.style = {
            width: this.to.width,
            height: this.to.height,
        };
        // map cell Renderer to Formly Component
        this.to.gridOptions.columnDefs.forEach(column => column.cellRendererFramework = _grid_formly_cell_component__WEBPACK_IMPORTED_MODULE_2__["GridFormlyCellComponent"]);
        // set grid options and context of the parent formly field
        const gridOptions = this.to.gridOptions || {};
        gridOptions.context = {
            parentField: this.field,
        };
        this.gridOptions = gridOptions;
    }
    onFirstDataRendered(params) {
        params.api.sizeColumnsToFit();
    }
}
GridTypeComponent.??fac = function GridTypeComponent_Factory(t) { return ??GridTypeComponent_BaseFactory(t || GridTypeComponent); };
GridTypeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: GridTypeComponent, selectors: [["formly-field-grid"]], viewQuery: function GridTypeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.agGrid = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]], decls: 3, vars: 3, consts: [[3, "ngStyle"], [1, "className", 2, "width", "100%", "height", "100%", 3, "gridOptions", "rowData", "firstDataRendered"], ["agGrid", ""]], template: function GridTypeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "ag-grid-angular", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("firstDataRendered", function GridTypeComponent_Template_ag_grid_angular_firstDataRendered_1_listener($event) { return ctx.onFirstDataRendered($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngStyle", ctx.style);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("gridOptions", ctx.gridOptions)("rowData", ctx.model);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__["AgGridAngular"]], encapsulation: 2 });
const ??GridTypeComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](GridTypeComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](GridTypeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'formly-field-grid',
                template: `
    <div [ngStyle]="style">
      <ag-grid-angular
        #agGrid
        style="width: 100%; height: 100%"
        class="className"
        [gridOptions]="gridOptions"
        [rowData]="model"
        (firstDataRendered)="onFirstDataRendered($event)">
      </ag-grid-angular>
    </div>
`,
            }]
    }], null, { agGrid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['agGrid']
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Development/Miko/mygrid/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map