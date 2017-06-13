import {Injectable} from '@angular/core';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
@Injectable()

export class customersService {
	
	constructor(private _http:Http) { }
		private baseUrl:string="https://je-rms-dev-functionapp.azurewebsites.net/api/";
		private header=new Headers({'Content-Type':'application/json'});
		private req=new RequestOptions({headers:this.header});   

	getList(){
		return [
		{email : 'rameshwar@tblocks.com',firstName : 'Rameshwar',lastName:'Samindre',company : 'TechBlocks',masterId:'MCS4321'},
		{email : 'mazhar@tblocks.com',firstName : 'Mazhar',lastName:'Molvi',company : 'TechBlocks',masterId:'BDHS322'},
		{email : 'bhrugesh@tblocks.com',firstName : 'Bhrugesh',lastName:'Thakkar',company : 'TechBlocks',masterId:'MCS4321'}
		]
		// return this.customerData;
	}

	getCustomers(isActive:number=-1)
	{
		var item= { "active" : isActive};
		return this._http.post(this.baseUrl + "GetCustomers?code=gcxib5SIBl3daMYgxdV8FoDeiuWgf9pa0WD0WLfWbe0f0M/yCQ9rEA==",item,this.req).timeout(10000).map((res:Response)=>res.json());
	}

	getCustomerExtendedonCustomer(customerID:number)
	{
		var item= { "customerID" : customerID};
		return this._http.post(this.baseUrl + "GetCustomerExtendedOnCustomer?code=C9UyfbGjCjeT8OCTUjAmDevaFQXJnTjN5jUrW6MdFv4sCBVzt2I0FQ==",item,this.req).timeout(10000).map((res:Response)=>res.json());
	}

}
