import { Component, ViewEncapsulation,NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { ADAL4Service } from 'adal-angular4';
/// <reference path="../../../node_modules/@types/adal/index.d.ts" />
import 'expose-loader?AuthenticationContext!../../../../node_modules/adal-angular/lib/adal.js';
import { roleService } from '../../services/UserRole.service';

@Component({
  selector: 'az-login',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ roleService ]
})

export class LoginComponent {  
    public router: Router;
    public adalService:ADAL4Service
    public _roleService:roleService
    public progressVisible: Boolean = false;
    constructor(router:Router,adal: ADAL4Service,private role:roleService) {
        this.router = router;
        this.adalService=adal;
        this._roleService=role;
        this.adalService.handleWindowCallback();
        if(this.adalService.userInfo.authenticated)
        {
            this.checkuser(this.adalService.userInfo.userName);
        }
    }

    checkuser(email:string)
    {
        this._roleService.checkuser(email).subscribe(
                (data:any)=>{
                    if(data.length>0) 
                    {
                        // store username in localstorage for getting anytime.
                        localStorage.setItem("userName",data[0].FirstName +" "+ data[0].LastName); 
                        localStorage.setItem("Auth",data[0].RoleName);
                        if(data.RoleName==="No Access")
                        {
                             this.router.navigate(['pages']);
                        }
                        else
                        {
                            localStorage.setItem("UserID",data[0].UserID);
                            this.router.navigate(['pages']);
                        }
                    }
                    else{
                        localStorage.setItem("Auth","No Access");
                        this.router.navigate(['pages']);
                    }
                },
                (error:any) => {
                    console.log(error);
                }
			);
        
    }

    
    public logIn():void {
            this.adalService.login();
    }
}


