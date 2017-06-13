import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RewardsService } from '../../services/Rewards.service';
import { Router } from '@angular/router';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
import { Country,Jurisdiction,SourceSystem,TransactionType,TransactionStatus} from '../../shared/Rewards';
@Component({
	selector: 'az-Rewards',
	encapsulation: ViewEncapsulation.None,
	templateUrl: './Rewards.component.html',
	styleUrls: ['./Rewards.component.scss'],
	providers:[RewardsService]
}) 
export class RewardsComponent implements OnInit {
	public self = this;
	public rowsOnPage = 50;
	public rewardsService: RewardsService;
	public messageforModal: string;
	public router: Router;
	public progressVisible: boolean = false;
	public data: any;
	public msgLogData:any;
	public title = 'Reward'
	public IsData: boolean = false;
	public startDate = new Date();
	public endDate = new Date();
	public strstdate=this.startDate.getFullYear() + "-" + ('0' + (this.startDate.getMonth()+1)).slice(-2) + "-" + ('0' + (this.startDate.getDate())).slice(-2);
    public strenddate=this.endDate.getFullYear() + "-" + ('0' + (this.endDate.getMonth()+1)).slice(-2) + "-" + ('0' + (this.endDate.getDate())).slice(-2);
	public customerEmail: string;
	public validate: boolean = false;
	public errorMessage: string;
	public UserID: string = "0";
	public sortBy = "LastModified";
	public sortOrder = "desc";
	public IsSuccess : Boolean = false;
	public is_advance_search = false;
	public toggleClass:string = 'fa fa-plus';
	public isCountrySelect = false;
	public isSelectAll = false;
	public isLastCall = false;
	public isMessageLog = false;
	public isChangeLog = false;
	public isDeselectAll = false;
	public checkboxArray = <any>[];
    searchRewardObject = {startDate : this.strstdate,endDate : this.strenddate, ssUniqueID : '',email : '',sourceSystem:<any>[],transType:<any>[],
    transStatus:<any>[],pageNumber:1, pageSize:50,countryids:<any>[],jurisdiction:<any>[]}
	//for country dropdown 
	public countryControlSettings: IMultiSelectSettings = {
		checkedStyle: 'fontawesome',
		buttonClasses: 'my-control',
		dynamicTitleMaxItems: 3,
		displayAllSelectedText: true,
		showCheckAll: true,
		showUncheckAll: true
	};
	public countryControlTexts: IMultiSelectTexts = {
		checkAll: 'Select all',
		uncheckAll: 'Unselect all',
		checked: 'item selected',
		checkedPlural: 'items selected',
		searchPlaceholder: 'Find',
		defaultTitle: 'Select countries',
		allSelected: 'All selected',
	};
    public countryControlOptions: IMultiSelectOption[];

    //for Jurisdiction Dropdown
	public JurisdictionSettings: IMultiSelectSettings = {
		checkedStyle: 'fontawesome',
		buttonClasses: 'my-control',
		dynamicTitleMaxItems: 3,
		displayAllSelectedText: true,
		showCheckAll: true,
		showUncheckAll: true
	};
	public JurisdictionTexts: IMultiSelectTexts = {
		checkAll: 'Select all',
	 	uncheckAll: 'Unselect all',
		checked: 'item selected',
		checkedPlural: 'items selected',
		searchPlaceholder: 'Find',
		defaultTitle: 'Select jurisdiction',
		allSelected: 'All selected',
	};
	public JurisdictionOptions: IMultiSelectOption[];
	
    //for Source System dropdown
	public sourceSystemSettings: IMultiSelectSettings = {
		checkedStyle: 'fontawesome',
		buttonClasses: 'my-control',
		dynamicTitleMaxItems: 3,
		displayAllSelectedText: true,
		showCheckAll: true,
		showUncheckAll: true
	};
	public sourceSystemTexts: IMultiSelectTexts = {
		checkAll: 'Select all',
		uncheckAll: 'Unselect all',
		checked: 'item selected',
		checkedPlural: 'items selected',
		searchPlaceholder: 'Find',
		defaultTitle: 'Select System',
		allSelected: 'All selected',
	};
	public sourceSystemOptions: IMultiSelectOption[];

 //for Transaction Typr dropdown
	public transactionTypeSettings: IMultiSelectSettings = {
		checkedStyle: 'fontawesome',
		buttonClasses: 'my-control',
		dynamicTitleMaxItems: 3,
		displayAllSelectedText: true,
		showCheckAll: true,
		showUncheckAll: true
	};
	public transactionTypeTexts: IMultiSelectTexts = {
		checkAll: 'Select all',
		uncheckAll: 'Unselect all',
		checked: 'item selected',
		checkedPlural: 'items selected',
		searchPlaceholder: 'Find',
	 	defaultTitle: 'Select Type',
		allSelected: 'All selected',
	};
	public transactionTypeOptions: IMultiSelectOption[];

	 //for Transaction Typr dropdown
	public transactionStatusSettings: IMultiSelectSettings = {
		checkedStyle: 'fontawesome',
		buttonClasses: 'my-control',
		dynamicTitleMaxItems: 3,
		displayAllSelectedText: true,
		showCheckAll: true,
		showUncheckAll: true
	};
	public transactionStatusTexts: IMultiSelectTexts = {
		checkAll: 'Select all',
		uncheckAll: 'Unselect all',
		checked: 'item selected',
		checkedPlural: 'items selected',
		searchPlaceholder: 'Find',
		defaultTitle: 'Select Status',
		allSelected: 'All selected',
	};
	public transactionStatusOptions: IMultiSelectOption[];

	constructor(private _rewardsService: RewardsService, public _router: Router) {
		this.rewardsService = _rewardsService;
		this.router = _router;
	   
		if (localStorage.getItem("Auth") === 'undefined') {
			this.router.navigate(['login']);
		}
		if (localStorage.getItem("Auth") === "No Access") {
			this.router.navigate(['pages/noaccess']);
		}
		else {
			var chkusr = localStorage.getItem("UserID");
			if (chkusr == null) {
				this.UserID = "0";
				this.router.navigate(['login']);
			}
			else {
				this.UserID = chkusr.toString();
			}
		} 
	}

	ngOnInit() {
		this.validate = false;
		this.msgLogData = [
		{ 
			message : 'This is sample message 1',
			date : new Date(),

		},
		{ 
			message : 'This is sample message 2',
			date : new Date(),

		},
		{ 
			message : 'This is sample message 3',
			date : new Date(),

		}]
		this.data = [
			{
				isChecked : true,
				ProductName: 'Product 101',
				ProductValue: 'AB1032',
				TransactionType: 'Single Cash',
				SourceSystemId: 212323,
				SourceSystemUniqueId: 'CA38BDH434D',
				Transaction_date:new Date(),
				Fullfillment_channel:'Sample Channel',
				Transaction_status: 'Pending'

			},
			{
				isChecked : false,
				ProductName: 'Product 103',
				ProductValue: 'CA101',
				TransactionType: 'Single Paid',
				SourceSystemId: 656556,
				SourceSystemUniqueId: 'CA38BDH434D',
				Transaction_date:new Date(),
				Fullfillment_channel:'Sample',
				Transaction_status: 'Done'
			},
			{
				isChecked : true,
				ProductName: 'Product 104',
				ProductValue: 'FRB103',
				TransactionType: 'Single Cash',
				SourceSystemId: 54554,
				SourceSystemUniqueId: 'CA38BDH434D',
				Transaction_date:new Date(),
				Fullfillment_channel:'Sample Channel',
				Transaction_status: 'Pending'
			},
			{
				isChecked : false,
				ProductName: 'Product 105',
				ProductValue: 'BDSJ32',
				TransactionType: 'Net Payment',
				SourceSystemId: 423434,
				SourceSystemUniqueId: 'CA38BDH434D',
				Transaction_date:new Date(),
				Fullfillment_channel:'Sample',
				Transaction_status: 'Done'
			}

		];
		
	}

	countrySelect(){
		this.isCountrySelect = true;
		this.progressVisible = true;
		this.searchRewardObject.jurisdiction = [];
		this.getJurisdiction();
	}
	getresult() {
		if (Date.parse(this.searchRewardObject.startDate) > Date.parse(this.searchRewardObject.endDate)) {
			this.validate = true;
			this.errorMessage = "End Date Must be greater than or equal to Start Date";
		}
		else {
			this.validate = false;
			this.errorMessage = "";
			this.searchRewardObject.startDate = this.searchRewardObject.startDate + " 00:00:00";
			this.searchRewardObject.endDate = this.searchRewardObject.endDate + " 23:59:59";
            var tempObj = Object.assign({}, this.searchRewardObject);

			tempObj.countryids = tempObj.countryids.join(',');
			tempObj.jurisdiction = tempObj.jurisdiction.join(',');
			tempObj.sourceSystem = tempObj.sourceSystem.join(',');
			tempObj.transType = tempObj.transType.join(',');
			tempObj.transStatus =  tempObj.transStatus.join(',');
            this.progressVisible = true;
			this.getRewards(tempObj);
		}
	}
	showMsg(msg) {
		if (msg.length < 130) return false;
		this.messageforModal = msg;
		jQuery('#message-modal').modal('show');
	 }

	hideMsg() {
		jQuery('#message-modal').modal('hide');
	}

	selectAll(){
		for (var i = 0; i<this.data.length; i++) {
			this.data[i].isChecked = this.isSelectAll ? false : true;
		}
	}
	ToggleAll(item,arr){
		if(arr.indexOf(item.RewardTrxID) === -1)arr.push(item.RewardTrxID)
		else arr.splice(arr.indexOf(item.RewardTrxID),1) 
			var checked = jQuery("#rewardGrid input:checkbox:checked:not('#firstcb')").length;
			var totalcb = this.data.length;
			this.isSelectAll = checked === totalcb ? true : false;
		}
	getRewards(searchRewardObject) {
		this.rewardsService.searchRewards(searchRewardObject).subscribe(
			(data: any) => {
				this.data = data;
				this.IsData = data.length > 0 ? true :false; 
				this.progressVisible = false;
				this.searchRewardObject.startDate= this.searchRewardObject.startDate.split(" ")[0];
				this.searchRewardObject.endDate= this.searchRewardObject.endDate.split(" ")[0];
			},
			(error: any) => { 

				this.progressVisible = false;
				this.IsData = false;
				this.DisplayErrorMessage(error);
			}
			);
	}

	getCountries(){
		if(this.is_advance_search || this.isLastCall){
			this.is_advance_search = !this.is_advance_search
		    this.toggleClass = this.is_advance_search ? 'fa fa-minus' : 'fa fa-plus';
			return false;
		}
		this.progressVisible = true;
		const isActive = -1;
		this.rewardsService.getCountryList(isActive).subscribe(
			(data: any) => {		
				let newList = new Country(data);
				this.countryControlOptions = newList.convert();
				this.getJurisdiction()
			},
			(error: any) => {
				this.progressVisible = false;
				this.DisplayErrorMessage(error);
			}
			);
	} 

	getJurisdiction(){
		let countryId = this.searchRewardObject.countryids ? this.searchRewardObject.countryids.join(',') : '';
			this.rewardsService.getJurisdictionList(countryId,-1).subscribe(
			(data: any) => {
			    let newList = new Jurisdiction(data);
			    // console.log(newList.convert())
				this.JurisdictionOptions = newList.convert();
				this.getSourceSystem()
			},
			(error: any) => {
				this.progressVisible = false;
				this.DisplayErrorMessage(error);
			}
			);
	}

	getSourceSystem(){
			this.rewardsService.getSourceSystemList().subscribe(
			(data: any) => {
			    let newList = new SourceSystem(data);
				this.sourceSystemOptions = newList.convert();
				this.getTransactionType()
			},
			(error: any) => {
				this.progressVisible = false;
				this.DisplayErrorMessage(error);
			}
			);
	}

	getTransactionType(){
		this.rewardsService.getTransTypeList().subscribe(
			(data: any) => {
				let newList = new TransactionType(data);
				this.transactionTypeOptions = newList.convert();
				this.getTransactionStatus()
			},
			(error: any) => {
				this.progressVisible = false;
				this.DisplayErrorMessage(error);
			}
			);
	}

	getTransactionStatus(){
			this.rewardsService.getRewardsTrxStatusList().subscribe(
			(data: any) => {
				this.progressVisible = false;
				let newList = new TransactionStatus(data);
				this.transactionStatusOptions = newList.convert();
				this.isLastCall = true;
				//show advance search div:
				if(!this.isCountrySelect){	
				this.is_advance_search = !this.is_advance_search
		        this.toggleClass = this.is_advance_search ? 'fa fa-minus' : 'fa fa-plus';
				}
			},
			(error: any) => {
				this.progressVisible = false;
				this.DisplayErrorMessage(error);
			}
			);
	}

	showMessageLog(){
		this.isMessageLog = true;
		this.title = 'Message Log';
	}
    showrewards(){
    	this.isMessageLog = false;
    	this.isChangeLog = false;
		this.title = 'Reward';
    }
    showChangeLog(){
		this.isChangeLog = true;
		this.title = 'Change Log';
	}

    permisson(){
    	 this.isDeselectAll = jQuery("#rewardGrid input:checkbox:checked:not('#firstcb')").length === 0 ? true : false;
    	 console.log(this.isDeselectAll)
    	 jQuery('#Permission-modal').modal('show');
    }

	DisplayErrorMessage(error) {
		this.progressVisible = false;
		if (error._body) {
			try {
				error = JSON.parse(error._body);
			} catch (e) {
				error = JSON.parse(JSON.stringify(error._body));
			}
		}
		this.validate = true;
		if (error.errorMessage)
			this.errorMessage = error.errorMessage;
		else
			this.errorMessage = "Problem with connection,please try after some time";
	}

}
