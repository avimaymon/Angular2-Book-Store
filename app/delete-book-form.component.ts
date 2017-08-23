import { BookService } from './book.service';
import { Component } from '@angular/core';

@Component({
    selector: 'delete-book-form',
    templateUrl: `./app/delete-book-form.component.html`,
    providers: [BookService],
    inputs: ['selectedBookId']
})
export class DeleteBookFormComponent {
    constructor(private _bookService: BookService) { };
    public selectedBookId: number;
    postData: string;
    successMsg: string = "";
    onDelete() {
        this._bookService.deleteBooks(this.selectedBookId)
            .subscribe(
            data => this.postData = JSON.stringify(data),
            error => alert(error),
            () => console.log('Finished Delete Operation')
            );
        this.successMsg = "Success! Refreshing page";
        setTimeout(location.reload.bind(location), 800);
    }
}
