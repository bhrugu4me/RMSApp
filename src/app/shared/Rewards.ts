export class rewards {
	public RowNum:Number;
	public RewardTrxID:Number;
	public RMSRewardID:String;
	public RequestID:String;
	public TransactionTypeID:Number;
	public SourceSystemID?:Number;
	public SourceSystemUniqueID:String;
	public MasterID:string;
	public SourceSystemUniqueIDType:String;
	public CustomerID?:Number;
	public ProductID?:Number;
	public ProductCode:String;
	public ProductValue:Number;
	public ProgramName:String;
	public EffectiveDate?:Date;
	public AdditionalData:String;
	public FulfillmentChannelID?:Number;
	public SourceIP:String;
	public RewardsRequestReceiveTimestamp?:Date;
	public EvaluateFulfillmentRuleTimeStamp?:Date;
	public CreatedDate:Date;
	public LastModifiedDate?:Date;
	public CreatedBy?:Number;
	public LastModifiedBy?:Number;
	public IsActive?:boolean;
	public TransactionTypeName:String;
	public CustomerName:String;
	public Email:String;
	public ProductName:String;
	public ChannelName:String;
	public ChannelCode:String;
	public StatusName:String;
	public isChecked:boolean
	constructor()
	{
		this.AdditionalData="";
		this.ChannelCode="";
		this.ChannelName="";
		this.CreatedBy=0;
		this.CreatedDate=null;
		this.CustomerID=0;
		this.CustomerName="";
		this.EffectiveDate=null;
		this.Email="";
		this.FulfillmentChannelID=0;
		this.IsActive=true;
		this.LastModifiedBy=0;
		this.LastModifiedDate=null;
		this.EvaluateFulfillmentRuleTimeStamp=null;
		this.MasterID="";
		this.ProductCode="";
		this.ProductID=0;
		this.ProductName="";
		this.ProductValue=0;
		this.ProgramName="";
		this.RequestID="";
		this.RewardsRequestReceiveTimestamp=null;
		this.RewardTrxID=0;
		this.RowNum=0;
		this.RMSRewardID="";
		this.SourceIP="";
		this.SourceSystemID=0;
		this.SourceSystemUniqueID="";
		this.SourceSystemUniqueIDType="";
		this.StatusName="";
		this.TransactionTypeID=0;
		this.TransactionTypeName="";
		this.isChecked=false
	}
}



export class Country {
	tempArray: any[];

	constructor(inputArray:Array<any>) {
		this.tempArray = inputArray;
	}
	convert() {
		let arr = [];
		for(var i=0; i < this.tempArray.length; i++){
			arr.push({
				"id": this.tempArray[i].CountryID,
				"name": this.tempArray[i].Name,
			})    
		} 
		return arr;
	}
}

export class Jurisdiction{
	tempArray: any[];

	constructor(inputArray:Array<any>) {
		this.tempArray = inputArray;
	}
	convert() {
		let arr = [];
		for(var i=0; i < this.tempArray.length; i++){
			arr.push({
				"id": this.tempArray[i].JurisdictionID,
				"name": this.tempArray[i].Name,
			})    
		} 
		return arr;
	}
}

export class SourceSystem{
	tempArray: any[];

	constructor(inputArray:Array<any>) {
		this.tempArray = inputArray;
	}
	convert() {
		let arr = [];
		for(var i=0; i < this.tempArray.length; i++){
			arr.push({
				"id": this.tempArray[i].SourceSystemID,
				"name": this.tempArray[i].SourceSystemName,
			})    
		} 
		return arr;
	}
}

export class TransactionType{
	tempArray: any[];

	constructor(inputArray:Array<any>) {
		this.tempArray = inputArray;
	}
	convert() {
		let arr = [];
		for(var i=0; i < this.tempArray.length; i++){
			arr.push({
				"id": this.tempArray[i].TransactionTypeID,
				"name": this.tempArray[i].Name,
			})    
		} 
		return arr;
	}
}

export class TransactionStatus{
	tempArray: any[];

	constructor(inputArray:Array<any>) {
		this.tempArray = inputArray;
	}
	convert() {
		let arr = [];
		for(var i=0; i < this.tempArray.length; i++){
			arr.push({
				"id": this.tempArray[i].RewardsTrxStatusID,
				"name": this.tempArray[i].StatusName,
			})    
		} 
		return arr;
	}
}


export class MessageLog
{
	 	public MessageLogID:number;
        public RewardsTrxID:number;
        public SystemID:number;
        public FulfillmentChannelID:number;
        public MessageTypeID:number;
        public IPAddress:string;
        public Message:string;
        public CreatedDate:Date;
        public MessageType:string 
        public ChannelName:string ;
        public ChannelCode:string ;

		constructor()
		{
			this.ChannelCode="";
			this.ChannelName="";
			this.CreatedDate=null;
			this.FulfillmentChannelID=0;
			this.IPAddress="";
			this.Message="";
			this.MessageLogID=0;
			this.MessageType="";
			this.MessageTypeID=0;
			this.RewardsTrxID=0;
			this.SystemID=0;
		}
}

export class RewardTrxChangeLog
{
		public RewardTrxLogID:number;
        public RewardTrxID:number;
        public RewardTrxStatusID:number;
        public Comment:string;
        public UserID:number;
        public LogDate:Date;
        public StatusName:string;
        public UserName:string;

		constructor()
		{
			this.Comment="";
			this.LogDate=null;
			this.RewardTrxID=0;
			this.RewardTrxLogID=0;
			this.RewardTrxStatusID=0;
			this.StatusName="";
			this.UserID=0;
			this.UserName="";
		}
}