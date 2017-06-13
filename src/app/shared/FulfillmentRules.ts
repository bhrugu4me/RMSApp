export class FulfillmentRules
{
        public RuleID:number; 
        public RuleName:string;  
        public ProgramID:number; 
        public ProductID:number; 
        public FulfillmentChannelID:number; 
        public RequireApproval:boolean;
        public MaxOccurrencePerYear:number; 
        public MaxOccurrencePerCustomer:number; 
        public MaxRewardValue:number; 
        public MaxCumulativeRewardValuePerYear:number; 
        public IsActive:boolean; 
        public ProgramName:string; 
        public ProgramCode:string; 
        public ChannelName:string; 
        public ChannelCode:string; 
        public ProductName:string; 
        public ProductCode:string; 

        constructor()
        {
            this.ChannelCode="";
            this.ChannelName="";
            this.FulfillmentChannelID=0;
            this.IsActive=true;
            this.MaxCumulativeRewardValuePerYear=0;
            this.MaxOccurrencePerCustomer=0;
            this.MaxOccurrencePerYear=0;
            this.MaxRewardValue=0;
            this.ProductCode="";
            this.ProductID=0;
            this.ProductName="";
            this.ProgramID=0;
            this.ProgramName="";
            this.ProgramCode="";
            this.RequireApproval=false;
            this.RuleID=0;
            this.RuleName="";
        }
}