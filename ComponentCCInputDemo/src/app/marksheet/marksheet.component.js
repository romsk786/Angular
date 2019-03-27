"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var marksheet_model_1 = require("./marksheet.model");
var MarksheetComponent = /** @class */ (function () {
    function MarksheetComponent() {
        this.headerList = ["Subject", "Marks"];
        this.columnNameList = ["subject", "marks"];
        this.marksheetList = [];
        this.grade = '';
    }
    MarksheetComponent.prototype.ngOnInit = function () {
    };
    MarksheetComponent.prototype.totalMarks = function () {
        var total1 = this.number1 + this.number2 + this.number3 + this.number4 + this.number5 + this.number6;
        this.totalScore = total1;
    };
    MarksheetComponent.prototype.calculatePercent = function () {
        this.percent = this.totalScore / 6;
    };
    MarksheetComponent.prototype.calculateGrade = function () {
        if (this.percent >= 70)
            this.grade = 'Distinction';
        else if (this.percent >= 60)
            this.grade = 'First Class';
        else if (this.percent >= 50)
            this.grade = 'Second Class';
        else if (this.percent >= 40)
            this.grade = 'Pass Class';
        else
            this.grade = 'FAIL';
        var subject1 = new marksheet_model_1.Marksheet("English", this.number1);
        var subject2 = new marksheet_model_1.Marksheet("Hindi", this.number2);
        var subject3 = new marksheet_model_1.Marksheet("Maths", this.number3);
        var subject4 = new marksheet_model_1.Marksheet("Physics", this.number4);
        var subject5 = new marksheet_model_1.Marksheet("Chemistry", this.number5);
        var subject6 = new marksheet_model_1.Marksheet("Social Science", this.number6);
        this.marksheetList.push(subject1);
        this.marksheetList.push(subject2);
        this.marksheetList.push(subject3);
        this.marksheetList.push(subject4);
        this.marksheetList.push(subject5);
        this.marksheetList.push(subject6);
    };
    MarksheetComponent = __decorate([
        core_1.Component({
            selector: 'app-marksheet',
            templateUrl: './marksheet.component.html',
            styleUrls: ['./marksheet.component.css']
        })
    ], MarksheetComponent);
    return MarksheetComponent;
}());
exports.MarksheetComponent = MarksheetComponent;
