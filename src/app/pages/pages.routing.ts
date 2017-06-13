import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PagesComponent } from './pages.component';
import { UserManagementComponent } from './Security/UserManagement/UserManagement.component';
import { APIKeysComponent } from './Security/APIKeys/APIKeys.component';
import { RewardsComponent } from './Rewards/Rewards.component';
import { ProductsComponent } from './Products/Products.component';
import { CustomersComponent } from './Customers/Customers.component';
import { TransactionWorkbenchComponent } from './TransactionWorkbench/TransactionWorkbench.component';
import { SystemLog } from './SystemLog/systemLog.component';
import { NoAccessComponent } from './NoAccess/NoAccess.component';

export const routes: Routes = [
    {
        path: '', 
        component: PagesComponent,
        children:[
        { path:'', redirectTo:'rewards', pathMatch:'full' },
        { path: 'rewards', component: RewardsComponent , data: { breadcrumb: 'Rewards' } },
        { path: 'customers', component: CustomersComponent , data: { breadcrumb: 'Customers' } },
        { path: 'products', component: ProductsComponent , data: { breadcrumb: 'Products' } },
        { path: 'transaction', component: TransactionWorkbenchComponent , data: { breadcrumb: 'Transaction Workbench' } },
        { path: 'usermanagement', component: UserManagementComponent , data: { breadcrumb: 'Roles' } },
        { path: 'apikeys', component: APIKeysComponent , data: { breadcrumb: 'API Keys' } },
        { path: 'systemlog', component: SystemLog, data: { breadcrumb: 'System Log' } },
        { path: 'noaccess', component: NoAccessComponent, data: { breadcrumb: 'No Access' } }
      
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);