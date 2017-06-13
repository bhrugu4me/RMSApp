import { Component, ViewEncapsulation,OnInit,NgModule } from '@angular/core';
import { customersService } from '../../services/Customers.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import {DataTableModule} from "angular2-datatable";
import { PipesModule } from '../../theme/pipes/pipes.module';

@Component({
  selector: 'az-Customers',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './Customers.component.html',
  styleUrls: ['./Customers.component.scss'],
  providers: [ customersService ]
})
export class CustomersComponent implements OnInit {
   customerData :any;
   public sortBy = "firstName";
   public sortOrder = "desc";
   public searchText:string;
   public rowsOnPage = 10;
   public progressVisible: Boolean = false;
  public hideMsg: Boolean = false;
  public validate:Boolean = false;
  public IsData:Boolean = false;
  public router: Router;
  public isExtended = false;
  public title = "Customer"
  public extendedData:any;
  
  constructor(router:Router,public _customersService: customersService) { 
     this.router = router;
     this.customerData = this._customersService.getList();
     console.log(this.customerData)
  }

  ngOnInit() {
      // this.getCustomer()
      this.extendedData = [
      {
        custId:3232,firstName: 'Rameshwar',lastName:'Samindre' 
      },
      {
        custId:3232,firstName: 'Bhrugesh',lastName:'Thakkar' 
      },
      {
        custId:3232,firstName: 'Mazhar',lastName:'Molvi' 
      }]
  }

  showExtended(){
     this.isExtended = true;
     this.title = "Customer Extended";
  }  
  showcustomer(){
     this.isExtended = false;
     this.title = "Customer";
  }
  
 getCustomer(){
 
    //  this.customersService.makeRequest('deleteuserroles', {}).subscribe(
    //   (data: any) => {
    //     console.log(data)
    //   },
    //   (error: any) => {
    //     console.log(error);

    //   }
    // );
 }

}
