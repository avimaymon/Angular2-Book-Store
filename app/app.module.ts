import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule, } from '@angular/http'
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookListComponent } from './book-list.component';
import { BookModifyComponent } from './book-modify.component';
import { EditBookFormComponent } from './edit-book-form.component';
import { AddBookFormComponent } from './add-book-form.component';
import { DeleteBookFormComponent } from './delete-book-form.component';
import { CapitalizeTitlePipe } from './capitalize.pipe';
import { SpecialCharPipe } from './special-char.pipe';
import { TitleExistPipe } from './title-exist.pipe';

@NgModule({
  imports: [BrowserModule, HttpModule, ReactiveFormsModule, JsonpModule],
  declarations: [AppComponent, BookListComponent, BookModifyComponent,
    DeleteBookFormComponent, AddBookFormComponent, EditBookFormComponent,
    CapitalizeTitlePipe, SpecialCharPipe, TitleExistPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
