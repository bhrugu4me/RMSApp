import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class systemlogService {

        private url: string = "https://je-rms-dev-functionapp.azurewebsites.net/api/";
        private header = new Headers({ 'Content-Type': 'application/json' });
        private req = new RequestOptions({ headers: this.header });

        constructor(private _http: Http) { }

        getsystemlog(startDate:string,endDate:string)
        {  
                var item= {"startDate" : startDate, "endDate" : endDate};
                return this._http.post(this.url +"GetSystemLog?code=l72pR8RWUQH0hbmkp01nkrdqMWs6C8I5ANQzb9csOrOQ3HZV0n7bkw==",item, this.req).timeout(10000).map((res: Response) => res.json());
        }
        
}
