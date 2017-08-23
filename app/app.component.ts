import { CapitalizeTitlePipe } from './capitalize.pipe';
import { BookService } from './book.service';
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: `../app/app.component.html`,
  providers: [BookService]
})
export class AppComponent {
}
