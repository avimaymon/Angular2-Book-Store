import { BookService } from './book.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'book-list',
    templateUrl: `../app/book-list.component.html`
})
export class BookListComponent implements OnInit {
    books = [];
    errorMsg: string;
    modifyOpen: boolean = true;
    selectedTitle: string;
    selectedBookId: number;
    addBookOpenBool: boolean = false;
    constructor(private _bookService: BookService) { }
    ngOnInit() {
        this._bookService.getBooks()
            .subscribe(resBookData => this.books = resBookData,
            resBookError => this.errorMsg = resBookError);
    }
    toggleForm(book) {
        this.selectedTitle = book.title;
        this.modifyOpen = !this.modifyOpen;
        this.selectedBookId = book.id;
    }
    openAddBook() {
        this.addBookOpenBool = !this.addBookOpenBool;
    }
}
