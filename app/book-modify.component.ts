import { BookService } from './book.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'book-modify',
    templateUrl: `./app/book-modify.component.html`,
    inputs: ['selectedBookId', 'selectedBook']
})
export class BookModifyComponent implements OnInit {
    books = [];
    errorMsg: string;
    selectedForm: string;
    public selectedBookId: number;
    public selectedBook;
    constructor(private _bookService: BookService) { }
    ngOnInit() {
        this._bookService.getBooks()
            .subscribe(resBookData => this.books = resBookData,
            resBookError => this.errorMsg = resBookError);
    }
    onClick(value, id) {
        if (this.selectedForm == value)
            this.selectedForm = null;
        else
            this.selectedForm = value;
    }
}
