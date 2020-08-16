"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var core_2 = require("@angular/core");
var common_1 = require("@angular/common");
var AppModule = /** @class */ (function () {
    function AppModule(platformId, appId) {
        this.platformId = platformId;
        this.appId = appId;
        var platform = common_1.isPlatformBrowser(platformId) ?
            'in the browser' : 'on the server';
        console.log("Running " + platform + " with appId=" + appId);
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule.withServerTransition({ appId: 'tour-of-heroes' }),
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule
            ],
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        }),
        __param(0, core_2.Inject(core_2.PLATFORM_ID)),
        __param(1, core_2.Inject(core_2.APP_ID))
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
