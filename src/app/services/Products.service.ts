import {Injectable} from '@angular/core';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
@Injectable()

export class ProductsService {
	
	constructor(private _http:Http) { }
	private baseUrl:string="https://je-rms-dev-functionapp.azurewebsites.net/api/";
	private header=new Headers({'Content-Type':'application/json'});
	private req=new RequestOptions({headers:this.header});   

	getProductsstatic(productName: string) : any {
		var item = { "ProductName": productName };
		const rewardsData = [
			{
				ProductCode: 'AB101',
				ProductName: 'Product 101'
			},
			{
				ProductCode: 'AB102',
				ProductName: 'Product 102'
			}

		];
		return rewardsData;
		//return this._http.post(this.url + "getsystemlog", item, this.req).map((res: Response) => res.json());
	}

	getProducts()
	{
		var item= { "active" : -1};
		return this._http.post(this.baseUrl + "GetProducts?code=p/PfTHq/XcY0I8zwiAJsSa7nqkwZtaQtshNLDN0xpdqppqArMiyVXw==",item,this.req).timeout(10000).map((res:Response)=>res.json());
	}
	
	getFulfillmentRulesOnProduct(productID:number)
	{
		var item= { "productID" : productID};
		return this._http.post(this.baseUrl + "GetFulfillmentRulesOnProduct?code=mZsaJsKgw884gRjDwlk35lXTzY/iUUX1qqH1AEEaXz9742BOEQ8eDQ==",item,this.req).timeout(10000).map((res:Response)=>res.json());
	}
	
}
