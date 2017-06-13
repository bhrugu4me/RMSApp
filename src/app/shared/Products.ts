export class Products {
    public ProductID:number;
    public ProductCode:string;
    public ProductName: string;
    public IsActive: boolean;
    constructor(){
        this.ProductID=0;
        this.ProductCode = '';
        this.ProductName = '';
        this.IsActive = true;
    }
}