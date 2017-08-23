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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var Observable_1 = require("rxjs/Observable");
require("rxjs/observable/throw");
var http_2 = require("@angular/http");
var BookService = (function () {
    function BookService(_http) {
        this._http = _http;
        this._url = "http://localhost:3000/books";
    }
    BookService.prototype.getBooks = function () {
        return this._http.get(this._url)
            .map(function (response) { return response.json(); })
            .catch(this._errorHandler);
    };
    BookService.prototype.getBook = function (id) {
        return this._http.get(this._url + "/" + id)
            .map(function (response) { return response.json(); })
            .catch(this._errorHandler);
    };
    BookService.prototype._errorHandler = function (error) {
        console.error(error);
        return Observable_1.Observable.throw("error" || "Server Error");
    };
    BookService.prototype.postBooks = function (title, author, date, imageUrl) {
        var data = 'title=' + title + '&author=' + author + '&date=' + date + '&imageUrl=' + imageUrl;
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this._url, data, {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    BookService.prototype.editBooks = function (id, title, author, date, imageUrl) {
        var data = 'title=' + title + '&author=' + author + '&date=' + date + '&imageUrl=' + imageUrl;
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.put(this._url + "/" + id, data, {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    BookService.prototype.deleteBooks = function (id) {
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.delete(this._url + "/" + id, {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    BookService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], BookService);
    return BookService;
}());
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map