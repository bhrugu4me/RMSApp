export class userManagement {
	public UserName:string;
	public FirstName:string;
	public LastName:string;
	public Email:string;
	public RoleID:Number;
	public CreatedBy:Number;
	public IsActive:Number;
	public UpdatedBy:Number;
	public UserRoleID:Number;
	public UserID:Number;
    public DeletedBy:string;
	public Id:Number;
	constructor(){
		this.UserName = '';
		this.FirstName = '';
		this.LastName = '';
		this.Email = 'mazhar@tblocks.com';
		this.RoleID = 1;
		this.CreatedBy = 1;
		this.IsActive = 1;
		this.UpdatedBy = 1;
		this.UserRoleID = 0;
		this.UserID = 0;
     	this.Id = 0;
	}
}



