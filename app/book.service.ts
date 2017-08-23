import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import 'rxjs/observable/throw';
import { Headers } from '@angular/http';

@Injectable()
export class BookService {
    private _url: string = "http://localhost:3000/books";
    constructor(private _http: Http) { }
    getBooks() {
        return this._http.get(this._url)
            .map((response: Response) => response.json())
            .catch(this._errorHandler);
    }
    getBook(id) {
        return this._http.get(this._url + "/" + id)
            .map((response: Response) => response.json())
            .catch(this._errorHandler);
    }
    _errorHandler(error: Response) {
        console.error(error);
        return Observable.throw("error" || "Server Error");
    }
    postBooks(title, author, date, imageUrl) {
        let data = 'title=' + title + '&author=' + author + '&date=' + date + '&imageUrl=' + imageUrl;
        let headers = new Headers();
        headers.append('Content-Type',
            'application/x-www-form-urlencoded');
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this._url, data,
            {
                headers: headers
            })
            .map(res => res.json());
    }
    editBooks(id, title, author, date, imageUrl) {
        let data = 'title=' + title + '&author=' + author + '&date=' + date + '&imageUrl=' + imageUrl;
        let headers = new Headers();
        headers.append('Content-Type',
            'application/x-www-form-urlencoded');
        return this._http.put(this._url + "/" + id, data,
            {
                headers: headers
            })
            .map(res => res.json());
    }
    deleteBooks(id) {
        let headers = new Headers();
        headers.append('Content-Type',
            'application/x-www-form-urlencoded');
        return this._http.delete(this._url + "/" + id,
            {
                headers: headers
            })
            .map(res => res.json());
    }
}