"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DashboardComponent = void 0;
var core_1 = require("@angular/core");
var lodash_1 = require("lodash");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(spaceService) {
        this.spaceService = spaceService;
        this.allPrograms = [];
        this.filteredProg = [];
        this.years = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.launchYear = '2018';
        this.getHeroes();
    };
    DashboardComponent.prototype.getHeroes = function () {
        var _this = this;
        this.spaceService.getPrograms()
            .subscribe(function (programs) {
            _this.allPrograms = programs;
            console.log('Programs', programs);
            _this.filteredProg = _this.allPrograms.filter(function (program) {
                return (program.launch_year === _this.launchYear);
            });
            console.log('Initial prog', _this.filteredProg);
        });
    };
    DashboardComponent.prototype.onChangeYear = function (val) {
        if (this.years.includes(val)) {
            this.launchYear = val;
            this.applyFilter();
        }
        else {
            console.log('Invalid year');
        }
    };
    DashboardComponent.prototype.onChangeLanding = function (val) {
        this.landSuccess = val;
        this.applyFilter();
    };
    DashboardComponent.prototype.onChangeLaunch = function (val) {
        this.launchSuccess = val;
        this.applyFilter();
    };
    DashboardComponent.prototype.applyFilter = function () {
        var _this = this;
        console.log('All prog', this.allPrograms);
        if (this.landSuccess && this.launchSuccess) {
            this.filteredProg = this.allPrograms.filter(function (program) {
                return (program.launch_year === _this.launchYear && program.launch_success === _this.launchSuccess && lodash_1.get(program, 'rocket.first_stage.cores[0].land_success') === _this.landSuccess);
            });
        }
        else if (this.landSuccess) {
            this.filteredProg = this.allPrograms.filter(function (program) {
                return (program.launch_year === _this.launchYear && lodash_1.get(program, 'rocket.first_stage.cores[0].land_success') === _this.landSuccess);
            });
        }
        else if (this.launchSuccess) {
            this.filteredProg = this.allPrograms.filter(function (program) {
                return (program.launch_year === _this.launchYear && program.launch_success === _this.launchSuccess);
            });
        }
        else if (this.landSuccess === false && this.launchSuccess === false) {
            this.filteredProg = this.allPrograms.filter(function (program) {
                return (program.launch_year === _this.launchYear && program.launch_success === _this.launchSuccess && lodash_1.get(program, 'rocket.first_stage.cores[0].land_success') === _this.landSuccess);
            });
        }
        else {
            this.filteredProg = this.allPrograms.filter(function (program) {
                return (program.launch_year === _this.launchYear);
            });
        }
        console.log('Filtered prog', this.filteredProg);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.scss']
        })
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
