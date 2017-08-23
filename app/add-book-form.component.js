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
var capitalize_pipe_1 = require("./capitalize.pipe");
var special_char_pipe_1 = require("./special-char.pipe");
var title_exist_pipe_1 = require("./title-exist.pipe");
var forms_1 = require("@angular/forms");
var AddBookFormComponent = (function () {
    function AddBookFormComponent(_formBuilder, _bookService) {
        this._formBuilder = _formBuilder;
        this._bookService = _bookService;
    }
    ;
    AddBookFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addForm = this._formBuilder.group({
            title: [null, [forms_1.Validators.required, forms_1.Validators.minLength(2), forms_1.Validators.maxLength(40)]],
            author: [null, [forms_1.Validators.required, forms_1.Validators.minLength(5)]],
            date: [null, [forms_1.Validators.required, forms_1.Validators.minLength(4),
                    forms_1.Validators.maxLength(4), forms_1.Validators.pattern("^[0-9]*$")]],
            imageUrl: [null, [forms_1.Validators.required, forms_1.Validators.pattern("^(http|https)://.*$")]]
        });
        this._bookService.getBooks()
            .subscribe(function (resBookData) { return _this.getData = resBookData; }, function (resBookError) { return _this.errorMsg = resBookError; });
    };
    AddBookFormComponent.prototype.onSubmit = function () {
        var _this = this;
        var noSpecialChars = new special_char_pipe_1.SpecialCharPipe().transform(this.addForm.controls["title"].value);
        var capTitle = new capitalize_pipe_1.CapitalizeTitlePipe().transform(noSpecialChars);
        var doesTitleExists = new title_exist_pipe_1.TitleExistPipe().transform(capTitle, this.getData);
        if (doesTitleExists != "true") {
            this._bookService.postBooks(capTitle, this.addForm.controls["author"].value, this.addForm.controls["date"].value, this.addForm.controls["imageUrl"].value)
                .subscribe(function (data) { return _this.postData = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log('Finished Add Operation'); });
            this.errorMsg = "";
            this.successMsg = "Success! Refreshing page";
            setTimeout(location.reload.bind(location), 800);
        }
        else {
            this.errorMsg = "Can't add new book - title already exists!";
        }
    };
    AddBookFormComponent = __decorate([
        core_1.Component({
            selector: 'add-book-form',
            templateUrl: './app/add-book-form.component.html',
            providers: [book_service_1.BookService],
            inputs: ['selectedBookId']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, book_service_1.BookService])
    ], AddBookFormComponent);
    return AddBookFormComponent;
}());
exports.AddBookFormComponent = AddBookFormComponent;
//# sourceMappingURL=add-book-form.component.js.map