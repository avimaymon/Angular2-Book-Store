import { BookService } from './book.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CapitalizeTitlePipe } from './capitalize.pipe';
import { SpecialCharPipe } from './special-char.pipe';
import { TitleExistPipe } from './title-exist.pipe';

@Component({
  selector: 'edit-book-form',
  templateUrl: './app/edit-book-form.component.html',
  providers: [BookService],
  inputs: ['selectedBookId', 'selectedBook']
})
export class EditBookFormComponent implements OnInit {
  editForm: FormGroup;
  postData: string;
  getData: string;
  public selectedBookId: number;
  public selectedBook;
  errorMsg: string;
  successMsg: string;
  constructor(private _formBuilder: FormBuilder, private _bookService: BookService) { };
  ngOnInit() {
    this._bookService.getBooks()
      .subscribe(resBookData => this.getData = resBookData,
      resBookError => this.errorMsg = resBookError);
    this.editForm = this._formBuilder.group({
      title: [this.selectedBook.title, [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
      author: [this.selectedBook.author, [Validators.required, Validators.minLength(5)]],
      date: [this.selectedBook.date, [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern("^[0-9]*$")]],
      imageUrl: [this.selectedBook.imageUrl, [Validators.required, Validators.pattern("^(http|https)://.*$")]]
    })
  }
  onSubmit() {
    let noSpecialChars = new SpecialCharPipe().transform(this.editForm.controls["title"].value);
    let capTitle = new CapitalizeTitlePipe().transform(noSpecialChars);
    let doesTitleExists = new TitleExistPipe().transform(capTitle, this.getData);
    if (doesTitleExists != "true") {
      this._bookService.editBooks(this.selectedBookId,
        this.editForm.controls["title"].value,
        this.editForm.controls["author"].value, this.editForm.controls["date"].value,
        this.editForm.controls["imageUrl"].value)
        .subscribe(
        data => this.postData = JSON.stringify(data),
        error => alert(error),
        () => console.log('Finished Edit Operation')
        );
      this.errorMsg = "";
      this.successMsg = "Success! Refreshing page";
      setTimeout(location.reload.bind(location), 800);
    }
    else {
      this.errorMsg = "Can't edit book - title already exists!"
    }

  }
}
