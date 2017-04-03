"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var EmployeeService = (function () {
    function EmployeeService(_http) {
        this._http = _http;
        this._url = 'http://localhost:8080/employee';
        //private _url:string = 'http://localhost:3000/app/event/mydata.json';
        this.Message = {
            name: "bhai shan",
            email: "pass@gmail.com",
            DOB: "02/11/11",
            dept: "cse",
            gender: "male",
            age: 11,
            _id: "58bdb28ea3df0922604150b4"
        };
        this.delMessage = {
            _id: "58bd2169ee2dd948a0416686"
        };
        this.result = [];
    }
    // getAllvaluesFromFiles(){
    //     this._http.get(this._url)
    //     .do(data => {
    //         this.getSubscribedData
    //     })
    //     .map((response:Response) => response.json());
    // }
    EmployeeService.prototype.saveMessage = function (value) {
        var body = JSON.stringify(value);
        console.log(body);
        var headers = new http_1.Headers({ 'Content-type': 'application/json' });
        return this._http.post('http://localhost:8080/message', body, { headers: headers });
    };
    EmployeeService.prototype.deleteMessage = function (id) {
        var c = {
            _id: id
        };
        var body = JSON.stringify(c);
        console.log(body);
        var headers = new http_1.Headers({ 'Content-type': 'application/json' });
        var key = "_id";
        var value = "58bdac414915dd3678cf9f7d";
        this.options = new http_1.RequestOptions({
            headers: headers,
            body: body });
        return this._http.delete('http://localhost:8080/delete', this.options);
        // this._http.delete()
    };
    EmployeeService.prototype.updateMessage = function (empData) {
        var body = JSON.stringify(empData);
        console.log(body);
        var headers = new http_1.Headers({ 'Content-type': 'application/json' });
        return this._http.put('http://localhost:8080/update', body, { headers: headers });
    };
    EmployeeService.prototype.getEmployees = function () {
        // this.getAllvaluesFromFiles().subscribe(data =>{
        //     console.log(this.getSubscribedData);
        // });
        //   this._http.get(this._url).map(
        //       (response:Response) => 
        //   console.log(response));
        //console.log(this._http.get(this._url));
        //     return [
        //   {"id":1, "name":"andrew", "gender":"male"},
        //    {"id":2, "name":"andrewr", "gender":"male"},
        //     {"id":3, "name":"andrewq", "gender":"male"}
        //   ];
        //console.log("data"+this._http.get(this._url)
        //  .map((response:Response) => response.json()));
        return this._http.get(this._url).map(function (response) { return response.json(); });
        // .subscribe(res => this.result = res);
        // console.log(this._http.get(this._url).map((response:Response) => response.json()));
        // console.log(this.result);
    };
    EmployeeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map