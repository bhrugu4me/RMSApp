import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgModule } from '@angular/core';
import { roleService } from '../../../services/UserRole.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyForm } from '../../../shared/Validation.interface';
import { DataTableModule } from "angular2-datatable";
import { PipesModule } from '../../../theme/pipes/pipes.module';
import { ADAL4Service } from 'adal-angular4';
/// <reference path="../../../node_modules/@types/adal/index.d.ts" />
import 'expose-loader?AuthenticationContext!../../../../../node_modules/adal-angular/lib/adal.js';


@Component({
	selector: 'az-APIKeys',
	encapsulation: ViewEncapsulation.None,
	templateUrl: './APIKeys.component.html',
	styleUrls: ['./APIKeys.component.scss'],
	providers: [roleService]
})
export class APIKeysComponent implements OnInit {
	addrole: FormGroup;
	editrole: FormGroup;
	public roleList: any[];
	public roldeData: any[];
	public adalService: ADAL4Service
	public validate: boolean = false;
	public router: Router;
	public dataTableObj = { rowsOnPage: 10, sortBy: 'CreatedDate', sortOrder: 'desc', filterQuery: '' }
	searchText: string;
	public progressVisible: Boolean = false;
	public AuthMessage: string = "";
	public UserID: string = "0";
	public validateerr: boolean = false;
	public errorMessage: string = "";

	// objects for create update delete roles;
	addRoleModal = { UserName: '', FirstName: '', LastName: '', Email: 'mazhar@tblocks.com', RoleID: 1, CreatedBy: 1, IsActive: 1 };
	editRoleModal = { UserName: '', FirstName: '', LastName: '', Email: 'mazhar@tblocks.com', RoleID: '', UpdatedBy: 1, IsActive: 1, UserRoleID: undefined, UserID: undefined };
	deleteRoleModal = { DeletedBy: 'admin@tblocks.com', Id: undefined };
	requiredVariable = { message: '', isShowing: false, isEditable: false, isAdding: false };

	constructor(public _roleService: roleService, private _router: Router, private formBuilder: FormBuilder, adal: ADAL4Service) {
		this.router = _router;
		// if (localStorage.getItem("Auth") === null) {
		// 	this.router.navigate(['login']);
		// }
		// if (localStorage.getItem("Auth") === "No Access") {
		// 	this.router.navigate(['noaccess']);
		// }
		// else {
		// 	var chkusr = localStorage.getItem("UserID");
		// 	if (chkusr == null) {
		// 		this.UserID = "0";
		// 	}
		// 	else {
		// 		this.UserID = chkusr.toString();
		// 	}
		// }

		this.addrole = this.formBuilder.group({
			addEmail: ['', Validators.compose([Validators.required, emailValidator])],
		})
		this.editrole = this.formBuilder.group({
			editEmail: ['', Validators.compose([Validators.required, emailValidator])],
		})
		// this.adalService = adal;

	}

	saveButtonClick(form) {
		this.progressVisible = true;
		this.requiredVariable.isEditable ? this.editRole() : this.addRole();
	}
	resetForm() {
		this.addrole.markAsUntouched();
		this.editrole.markAsUntouched();
		this.requiredVariable.isAdding = false;
		this.addRoleModal.UserName = '';
		this.addRoleModal.RoleID = 1;
		this.addRoleModal.FirstName = "";
		this.addRoleModal.LastName = "";
		this.requiredVariable.isEditable = false;
		this.validate = false;
		this.AuthMessage = "";
		this.validateerr = false;
		this.errorMessage = "";
	}

	deleteBtnClick(item) {
		this.deleteRoleModal.Id = item.Id;
	}

	deleteRole() {
		this.progressVisible = true;
		this.validateerr = false;
		this.errorMessage = "";

		this._roleService.makeRequest('deleteuserroles', this.deleteRoleModal).subscribe(
			(data: any) => {
				this.requiredVariable.message = 'Role Deleted Successfully !'
				this.dispalyMsg();
			},
			(error: any) => {
				console.log(error);
				this.progressVisible = false;
				this.DisplayErrorMessage(error);
			}
		);
	}

	editbtnClick(items) {
		this.requiredVariable.isEditable = true;
		this.editRoleModal.UserName = items.UserName;
		this.editRoleModal.FirstName = items.FirstName;
		this.editRoleModal.LastName = items.LastName;
		this.editRoleModal.Email = items.Email;
		this.editRoleModal.RoleID = items.RoleID;
		this.editRoleModal.UserRoleID = items.UserRoleID;
		this.editRoleModal.UserID = items.UserID;
		this.editRoleModal.UpdatedBy = parseInt(this.UserID);
		this.validateerr = false;
		this.errorMessage = "";

	}
	addRole() {
		this.validateerr = false;
		this.errorMessage = "";

		this.addRoleModal.RoleID = Number(this.addRoleModal.RoleID);
		this.validate = false;
		this.AuthMessage = "";
		this.addRoleModal.Email = this.addRoleModal.UserName;
		this.addRoleModal.CreatedBy = parseInt(this.UserID);
		this._roleService.makeRequest('assignuserrole', this.addRoleModal).subscribe(
			(data: any) => {
				if (data == null) {
					this.requiredVariable.message = 'Role Assigned Successfully !'
					this.dispalyMsg();
		 		}
				else {
					if (data.errorMessage) {
						this.validate = true;
						this.AuthMessage = "User is already exists.";
						this.progressVisible = false;
					}
				}
			},
			(error: any) => {
				console.log(error);
				this.progressVisible = false;
				this.DisplayErrorMessage(error);
			}
		);
	}

	editRole() {
		this.validate = false;
		this.AuthMessage = "";
		this.validateerr = false;
		this.errorMessage = "";

		this._roleService.makeRequest('assignuserrole', this.editRoleModal).subscribe(
			(data: any) => {
				this.requiredVariable.isEditable = false;
				this.requiredVariable.message = 'Role Updated Successfully !'
				this.dispalyMsg();
			},
			(error: any) => {
				console.log(error);
				this.progressVisible = false;
				this.DisplayErrorMessage(error);
			}
		);
	}

	ngOnInit() {
		//this.progressVisible = true;
		//this.getUserRoles();
		this.validate = false;
		this.AuthMessage = "";
		this.validateerr = false;
		this.errorMessage = "";
		this.roleList = [
		{UserName : "mazhar@gmail.com",RoleName: "Admin",CreatedByUserName : "Mazhar Molvi",LastModifiedByUserName:"Rameshwar",CreatedDate : new Date()},
		{UserName : "ram@gmail.com",RoleName: "User",CreatedByUserName : "Rameshwar Samindre",LastModifiedByUserName:"Mazhar",CreatedDate : new Date()},
		{UserName : "bhrugesh@gmail.com",RoleName: "Manager",CreatedByUserName : "Bhrugesh Takker",LastModifiedByUserName:"Rameshwar",CreatedDate : new Date()}
		]

	}

	getData() {
		this.validateerr = false;
		this.errorMessage = "";

		this._roleService.makeRequest('getassignuserrole', {}).subscribe(
			(data: any) => {
				this.roleList = data;
				this.progressVisible = false;
			},
			(error: any) => {
				console.log(error);
				this.progressVisible = false;
				this.DisplayErrorMessage(error);
			}
		);
	}

	getUserRoles() {
		this.validateerr = false;
		this.errorMessage = "";

		this._roleService.makeRequest('getroles', {}).subscribe(
			(data: any) => {
				this.roldeData = data;
				this.getData();
			},
			(error: any) => {
				console.log(error);
				this.progressVisible = false;
				this.DisplayErrorMessage(error);
			}
		);
	}

	dispalyMsg() {
		this.getData();
		this.resetForm();
		this.progressVisible = false;
		this.requiredVariable.isShowing = true
		setTimeout(function () {
			this.requiredVariable.isShowing = false;
		}.bind(this), 2500);
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
		this.validateerr = true;
		if (error.errorMessage)
			this.errorMessage = error.errorMessage;
		else
			this.errorMessage = "request timeout occurred, please try to reload again";
	}
	checkuser() {
		if (!this.addrole.invalid) {
			this.progressVisible = true;
			var token = localStorage.getItem("access_token");
			var objres: any;
			this._roleService.verifyuser(this.addRoleModal.UserName).subscribe(
				(data: any) => {
					objres = data["value"];
					this.progressVisible = false;
					if (objres.length > 0) {
						this.addRoleModal.FirstName = objres[0]["givenName"];
						this.addRoleModal.LastName = objres[0]["surname"];
						this.validate = false;
					}
					else {
						this.addRoleModal.FirstName = "";
						this.addRoleModal.LastName = "";
						this.validate = true;
						this.AuthMessage = "Invalid user account.";
					}
					this.progressVisible = false;
				},
				(error: any) => {
					this.progressVisible = false;
					console.log(error);

				}
			);
			//this.progressVisible=false;
		}

	}

	eventHandler(event){
		var inputValue = event.charCode;
		console.log(inputValue)
		if(!(inputValue >= 64 && inputValue <= 122 || inputValue >= 48 && inputValue <= 57 || inputValue === 46) && (inputValue != 32 && inputValue != 0)){
			event.preventDefault();
		}
	};

}
export function emailValidator(control: FormControl): { [key: string]: any } {
	var emailRegexp = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
	if (control.value && !emailRegexp.test(control.value)) {
		return { invalidEmail: true };
	}
}