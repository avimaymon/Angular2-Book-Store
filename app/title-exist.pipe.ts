import { Pipe, PipeTransform } from '@angular/core';
import { BookService } from './book.service';
import { Component } from '@angular/core';

@Pipe({ name: 'title-exist' })
export class TitleExistPipe {
    getData;
    errorMsg: string;
    transform(value: string, args: string): string {
        for (let i = 0; i < args.length; i++) {
            if (args[i].title == value)
                return "true";
        }
        return "false";
    }
}