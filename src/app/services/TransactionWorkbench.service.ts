import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { APIKeys } from '../shared/APIKeys';
import 'rxjs/Rx';
@Injectable()
export class transactionworkbenchService {

        private url: string = "https://omewamhwm9.execute-api.us-east-1.amazonaws.com/dev/";
        private header = new Headers({ 'Content-Type': 'application/json' });
        private req = new RequestOptions({ headers: this.header });

        constructor(private _http: Http) { }

        
}
