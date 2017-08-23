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
var book_service_1 = require("./book.service");
var core_1 = require("@angular/core");
var DeleteBookFormComponent = (function () {
    function DeleteBookFormComponent(_bookService) {
        this._bookService = _bookService;
        this.successMsg = "";
    }
    ;
    DeleteBookFormComponent.prototype.onDelete = function () {
        var _this = this;
        this._bookService.deleteBooks(this.selectedBookId)
            .subscribe(function (data) { return _this.postData = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log('Finished Delete Operation'); });
        this.successMsg = "Success! Refreshing page";
        setTimeout(location.reload.bind(location), 800);
    };
    DeleteBookFormComponent = __decorate([
        core_1.Component({
            selector: 'delete-book-form',
            templateUrl: "./app/delete-book-form.component.html",
            providers: [book_service_1.BookService],
            inputs: ['selectedBookId']
        }),
        __metadata("design:paramtypes", [book_service_1.BookService])
    ], DeleteBookFormComponent);
    return DeleteBookFormComponent;
}());
exports.DeleteBookFormComponent = DeleteBookFormComponent;
//# sourceMappingURL=delete-book-form.component.js.map