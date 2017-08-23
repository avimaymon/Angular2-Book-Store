import { BookService } from './book.service';
import { Component, OnInit } from '@angular/core';
import { CapitalizeTitlePipe } from './capitalize.pipe';
import { SpecialCharPipe } from './special-char.pipe';
import { TitleExistPipe } from './title-exist.pipe';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'add-book-form',
  templateUrl: './app/add-book-form.component.html',
  providers: [BookService],
  inputs: ['selectedBookId']
})
export class AddBookFormComponent implements OnInit {
  getData: string;
  postData: string;
  errorMsg: string;
  successMsg: string;
  addForm: FormGroup;
  public selectedBookId: number;
  constructor(private _formBuilder: FormBuilder, private _bookService: BookService) { };
  ngOnInit() {
    this.addForm = this._formBuilder.group({
      title: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
      author: [null, [Validators.required, Validators.minLength(5)]],
      date: [null, [Validators.required, Validators.minLength(4),
      Validators.maxLength(4), Validators.pattern("^[0-9]*$")]],
      imageUrl: [null, [Validators.required, Validators.pattern("^(http|https)://.*$")]]
    })
    this._bookService.getBooks()
      .subscribe(resBookData => this.getData = resBookData,
      resBookError => this.errorMsg = resBookError);
  }
  onSubmit() {
    let noSpecialChars = new SpecialCharPipe().transform(this.addForm.controls["title"].value);
    let capTitle = new CapitalizeTitlePipe().transform(noSpecialChars);
    let doesTitleExists = new TitleExistPipe().transform(capTitle, this.getData);
    if (doesTitleExists != "true") {
      this._bookService.postBooks(
        capTitle,
        this.addForm.controls["author"].value, this.addForm.controls["date"].value,
        this.addForm.controls["imageUrl"].value)
        .subscribe(
        data => this.postData = JSON.stringify(data),
        error => alert(error),
        () => console.log('Finished Add Operation')
        );
      this.errorMsg = "";
      this.successMsg = "Success! Refreshing page";
      setTimeout(location.reload.bind(location), 800);
    }
    else {
      this.errorMsg = "Can't add new book - title already exists!"
    }
  }
}
