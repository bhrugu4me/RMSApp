import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductsService } from '../../services/Products.service';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Products } from '../../shared/Products'
import { PipesModule } from '../../theme/pipes/pipes.module';

@Component({
  selector: 'az-Products',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './Products.component.html',
  styleUrls: ['./Products.component.scss'],
  providers:[ProductsService, Products]
})
export class ProductsComponent implements OnInit {
  addproduct: FormGroup;
	editproduct: FormGroup;
	
  public self = this;
  public filterQuery = "";
  public rowsOnPage = 10;
  public productsService: ProductsService;
  public messageforModal: string;
  public router: Router;
  public progressVisible: boolean = false;
  public data: any;
  public IsData: boolean = false;
  public productCode: string;
  public productName: string;
  public validate: boolean = false;
  public errorMessage: string = "";
  public searchText: string;
  public AuthMessage: string = "";
  public validateerr: boolean = false;
  public addProductModal: Products;
  public editProductModal: Products;
  public UserID: string = "0";

  requiredVariable = { message: '', isShowing: false, isEditable: false, isAdding: false ,title:'Products'};
  fullfillmentData:any

  constructor(private _productsService: ProductsService, private formBuilder: FormBuilder,public _router: Router, public _editProductModal: Products, public _addProductModal: Products) {
    this.productsService = _productsService;
    this.router = _router;
    this.addProductModal = _addProductModal;
    this.editProductModal = _editProductModal;

    this.addproduct = this.formBuilder.group({
			addProductCode: ['', Validators.compose([Validators.required])],
			addProductName: ['', Validators.compose([Validators.required])],
		})
		this.editproduct = this.formBuilder.group({
			editProductCode: ['', Validators.compose([Validators.required])],
			editProductName: ['', Validators.compose([Validators.required])],
		})

    this.getProducts(-1);
  }

  ngOnInit() {
		this.validate = false;
		this.AuthMessage = "";
		this.validateerr = false;
		this.errorMessage = "";

    this.fullfillmentData = [
    {
      channelId:21212,channelName:'Testing 1', date:new Date()
    },
    {
      channelId:21212,channelName:'Testing 1', date:new Date()
    },
    {
      channelId:21212,channelName:'Testing 1', date:new Date()
    }]
  }

  getProducts(params) {
    //this.progressVisible = true;
    // this.data = this.productsService.getProducts(-1);

    this.productsService.getProducts().subscribe(
      (data: any) => {
        this.data = data;
        if (data.length > 0) {
          this.IsData = true;
        }
        else {
          this.IsData = false;
        }
        this.progressVisible = false;
      },
      (error: any) => {

        this.progressVisible = false;
        this.IsData = false;
        this.DisplayErrorMessage(error);
      }
    );
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

  saveButtonClick(form) {
		this.progressVisible = true;
		this.requiredVariable.isEditable ? this.editRole() : this.addRole();
	}

resetForm() {
		this.addproduct.markAsUntouched();
		this.editproduct.markAsUntouched();
		this.requiredVariable.isAdding = false;
		this.addProductModal.ProductCode = '';
		this.addProductModal.ProductName = '';
		this.requiredVariable.isEditable = false;
		this.validate = false;
		this.AuthMessage = "";
		this.validateerr = false;
		this.errorMessage = "";
	}
  editbtnClick(items) {
		this.requiredVariable.isEditable = true;
		this.editProductModal.ProductCode = items.ProductCode;
		this.editProductModal.ProductName = items.ProductName;
		this.validateerr = false;
		this.errorMessage = "";

	}
	addRole() {
		this.validateerr = false;
		this.errorMessage = "";
		this.validate = false;
		this.AuthMessage = "";
		//this.addProductModal.CreatedBy = parseInt(this.UserID);
    this.data.push(this.addProductModal);
		// this._productsService.makeRequest('assignuserrole', this.addProductModal).subscribe(
		// 	(data: any) => {
		// 		if (data == null) {
		// 			this.requiredVariable.message = 'Role Assigned Successfully !'
		// 			this.dispalyMsg();
		// 		}
		// 		else {
		// 			if (data.errorMessage) {
		// 				this.validate = true;
		// 				this.AuthMessage = "User is already exists.";
		// 				this.progressVisible = false;
		// 			}
		// 		}
		// 	},
		// 	(error: any) => {
		// 		console.log(error);
		// 		this.progressVisible = false;
		// 		this.DisplayErrorMessage(error);
		// 	}
		// );
	}

	editRole() {
		this.validate = false;
		this.AuthMessage = "";
		this.validateerr = false;
		this.errorMessage = "";

		// this._roleService.makeRequest('assignuserrole', this.editRoleModal).subscribe(
		// 	(data: any) => {
		// 		this.requiredVariable.isEditable = false;
		// 		this.requiredVariable.message = 'Role Updated Successfully !'
		// 		this.dispalyMsg();
		// 	},
		// 	(error: any) => {
		// 		console.log(error);
		// 		this.progressVisible = false;
		// 		this.DisplayErrorMessage(error);
		// 	}
		// );
	}
}
