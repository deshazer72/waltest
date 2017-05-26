import {Injectable} from '@angular/core';
import { Headers, Http, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()

export class AppService {
    private headers = new Headers({ 'content-type': 'application/json', 'Accept': 'application/json'});
    private options = new RequestOptions({headers: this.headers});


constructor(private http: Http) { }

}