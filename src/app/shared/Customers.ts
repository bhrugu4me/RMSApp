export class Customers {

        public CustomerID:number;
        public SourceSystemID:string;
        public SourceSystemUniqueID:string;
        public MasterID:string;
        public SourceSystemUniqueIDType:string;
        public Email:string;
        public FirstName:string;
        public LastName:string;
        public CompanyName:string;
        public AddressLine1:string;
        public AddressLine2:string;
        public City:string;
        public StateProvince:string;
        public ZipPostalCode:string;
        public Phone1:string;
        public Product:string;
        public Language:string;
        public CreatedBy:number;
        public CreatedDate:Date;
        public LastModifiedDate:Date;
        public IsActive:boolean;

        constructor()
        {
            this.City="";
            this.AddressLine1="";
            this.AddressLine2="";
            this.CompanyName="";
            this.CreatedBy=0;
            this.CreatedDate=null;
            this.CustomerID=0;
            this.Email="";
            this.FirstName="";
            this.IsActive=true;
            this.Language="";
            this.LastModifiedDate=null;
            this.LastName="";
            this.MasterID="";
            this.Phone1="";
            this.Product="";
            this.SourceSystemID="";
            this.SourceSystemUniqueID="";
            this.SourceSystemUniqueIDType="";
            this.StateProvince="";
            this.ZipPostalCode="";
        }

}


export class CustomerExtended
    {
        public CustomerExtendedID:number;
        public CustomerID :number;
        public FulfillmentChannelID:number; 
        public UniqueID:string; 
        public AccountAcceptanceDate:Date; 
        public StartingPointBalance:string;
        public ChannelName:string;
        public ChannelCode:string; 

        constructor()
        {
            this.AccountAcceptanceDate=null;
            this.ChannelCode="";
            this.ChannelName="";
            this.CustomerExtendedID=0;
            this.CustomerID=0;
            this.FulfillmentChannelID=0;
            this.StartingPointBalance="";
            this.UniqueID="";
        }
    }
