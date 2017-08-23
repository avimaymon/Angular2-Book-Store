"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var book_list_component_1 = require("./book-list.component");
var book_modify_component_1 = require("./book-modify.component");
var edit_book_form_component_1 = require("./edit-book-form.component");
var add_book_form_component_1 = require("./add-book-form.component");
var delete_book_form_component_1 = require("./delete-book-form.component");
var capitalize_pipe_1 = require("./capitalize.pipe");
var special_char_pipe_1 = require("./special-char.pipe");
var title_exist_pipe_1 = require("./title-exist.pipe");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.ReactiveFormsModule, http_1.JsonpModule],
            declarations: [app_component_1.AppComponent, book_list_component_1.BookListComponent, book_modify_component_1.BookModifyComponent,
                delete_book_form_component_1.DeleteBookFormComponent, add_book_form_component_1.AddBookFormComponent, edit_book_form_component_1.EditBookFormComponent,
                capitalize_pipe_1.CapitalizeTitlePipe, special_char_pipe_1.SpecialCharPipe, title_exist_pipe_1.TitleExistPipe],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map