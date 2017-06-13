import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from '../theme/directives/directives.module';
import { PipesModule } from '../theme/pipes/pipes.module';
import { routing } from './pages.routing';
import { PagesComponent } from './pages.component';
import { BlankComponent } from './blank/blank.component';
import { MenuComponent } from '../theme/components/menu/menu.component';
import { NavbarComponent } from '../theme/components/navbar/navbar.component';
import { MessagesComponent } from '../theme/components/messages/messages.component';
import { BreadcrumbComponent } from '../theme/components/breadcrumb/breadcrumb.component';
import { BackTopComponent } from '../theme/components/back-top/back-top.component';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

import { HttpModule } from '@angular/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; 
import {DataTableModule} from "angular2-datatable";
import { UserManagementComponent } from './Security/UserManagement/UserManagement.component';
import { APIKeysComponent } from './Security/APIKeys/APIKeys.component';
import { RewardsComponent } from './Rewards/Rewards.component';
import { ProductsComponent } from './Products/Products.component';
import { CustomersComponent } from './Customers/Customers.component';
import { TransactionWorkbenchComponent } from './TransactionWorkbench/TransactionWorkbench.component';
import { SystemLog } from './SystemLog/systemLog.component';
import { NoAccessComponent } from './NoAccess/NoAccess.component';


@NgModule({
  imports: [
    CommonModule,
    DirectivesModule,
    PipesModule,
    routing,HttpModule,FormsModule,DataTableModule,ReactiveFormsModule,MultiselectDropdownModule
  ],
  declarations: [ 
    PagesComponent,
    BlankComponent,
    MenuComponent,
    NavbarComponent,
    MessagesComponent,
    BreadcrumbComponent,
    BackTopComponent,
    UserManagementComponent,APIKeysComponent,RewardsComponent,ProductsComponent,
    NoAccessComponent,CustomersComponent,TransactionWorkbenchComponent,
    SystemLog
  ]
})
export class PagesModule { }
