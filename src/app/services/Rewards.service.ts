import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
@Injectable()

export class RewardsService {

	private baseUrl:string="https://je-rms-dev-functionapp.azurewebsites.net/api/";
	private header = new Headers({ 'Content-Type': 'application/json' });
	private req = new RequestOptions({ headers: this.header });

	constructor(private _http: Http) { }

	getTransTypeList()
	{
		return this._http.post(this.baseUrl + "GetTransactionTypeList?code=PRwnMANpMZ5czaiaUt8xzmPfcy8N7uJNG3cFWId8xuZd8sRP9B1Xkw==","",this.req).timeout(10000).map((res:Response)=>res.json());
	}

	getSourceSystemList()
	{
		return this._http.post(this.baseUrl + "GetSourceSystemList?code=P/1yv0uc7feLMkXkvCl4L/R7e00jFrMtR47VYpQc1iA0dMI312jaog==","",this.req).timeout(10000).map((res:Response)=>res.json());
	}

	getRewardsTrxStatusList()
	{
		return this._http.post(this.baseUrl + "GetRewardTrxStatusList?code=9spmPw5nPwwYU97l9WosSgyxdEra8ktaxB1mmI/uRNPgAHSJHPA91g==","",this.req).timeout(10000).map((res:Response)=>res.json());
	}

	getCountryList(isActive:number=-1)
	{
		var item= { "active" : isActive};
		return this._http.post(this.baseUrl + "GetCountryList?code=jDC4aQ4oeZgChLtUxhsNdauEKgBkxscEYOtbrllUXC4VhtT807c5iA==",item,this.req).timeout(10000).map((res:Response)=>res.json());
	}

	getJurisdictionList(countryID:string,isActive:number=-1)
	{
		var item= { "countryID" : countryID, "active" : isActive};
		return this._http.post(this.baseUrl + "GetJurisdictionList?code=Pysk8YLnGtAO7pUCHXnaaX2OgfiFcBsZnBi/UnLIWkGMrA72xiJCeg==",item,this.req).timeout(10000).map((res:Response)=>res.json());
	}

	searchRewards(searchObject):any {
		return this._http.post(this.baseUrl + "SearchRewardsTrx?code=revAfdxbRXe87ihm6zvuLTd2BADtThMIo3iPonvFdX9DsuXCStBy3g==", searchObject, this.req).map((res: Response) => res.json());
	}

	getMessageLog(rewardTrxID:number)
	{
		var item= { "rewardTrxID" : rewardTrxID};
		return this._http.post(this.baseUrl + "GetMessagesOnRewardTrx?code=ezeDmQcBEzJsqVfX9o800vF6NadK46Pi7lj9CCrojMMANaWJtDWPQg==", item, this.req).map((res: Response) => res.json());
	}

	saveRewardsTrxChangeLog(objlog)
	{
		return this._http.post(this.baseUrl + "SaveRewardsTrxChangeLog?code=ygh98umqjQMmgj3mHI/plczwsmEdkYnZY4Z1sJ6ZY50al1zfafKIhw==", objlog, this.req).map((res: Response) => res.json());
	}

	getRewardsTrxChangeLog(rewardTrxID:number)
	{
		var item= { "rewardTrxID" : rewardTrxID};
		return this._http.post(this.baseUrl + "GetRewardsTrxChangeLog?code=o4tN7Ov/MIur8XxF4xfSECJ0qfzhnh4/1eYnLQaqJieHVDAoe7HGSQ==", item, this.req).map((res: Response) => res.json());
	}

}
