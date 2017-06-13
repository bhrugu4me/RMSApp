import {Injectable} from '@angular/core';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
@Injectable()

export class roleService {
	
	constructor(private _http:Http) { }
	private baseUrl:string="https://je-rms-dev-functionapp.azurewebsites.net/api/";
	private header=new Headers({'Content-Type':'application/json'});
	private req=new RequestOptions({headers:this.header});   
   // private baseUrl: string = "https://je-rms-dev-functionapp.azurewebsites.net/api/GetAssignUserRoles?code=xV1FyRpZT9HIZfPo3ewJWAFVat/cwoCNa3aGNedfzaMwZ4b7o9j7vA==";
	makeRequest(url,data) {
		console.log("data: " + JSON.stringify(data));
		return this._http.post(this.baseUrl + url,data,this.req).map((res:Response)=>res.json());
    }  
    verifyuser(mail) {
        var item = { "mail": mail };
        return this._http.post(this.baseUrl + "VerifyAzureAccount?code=memQWHZEyHlqH7gDW09jPU/o7WwExcca5MmGW0nN4Kvs2Czed4/q2g==", item, this.req).timeout(10000).map((res: Response) => res.json());
    }

	checkuser(email:string)
	{
		var item ={ "email" : email };
		return this._http.post(this.baseUrl + "CheckUser?code=fpcgA2MpD6ayzxeQTaKm0DoTFVJ5fVzeRz3ajZblTX0SCzJ4hRueIA==",item,this.req).timeout(10000).map((res:Response)=>res.json());
    
	}
    
}
