import { Component, ViewEncapsulation } from '@angular/core';
import { AppState } from '../../../app.state';
import { Router } from '@angular/router';
import { ADAL4Service } from 'adal-angular4';
/// <reference path="../../../node_modules/@types/adal/index.d.ts" />
//import 'expose-loader?AuthenticationContext!../node_modules/adal-angular/lib/adal.js';

@Component({
  selector: 'az-navbar',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
    public isMenuCollapsed:boolean = false;
    public router: Router;
    public adalService:ADAL4Service;
    public username:string;
    constructor(private _state:AppState,adal: ADAL4Service, _router:Router) {
        this.router = _router;
            this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
                this.isMenuCollapsed = isCollapsed;
            });
            this.adalService=adal;
            let url=window.location.origin + '/login';
            this.adalService.init({  clientId : '23eabdea-5135-436e-8bfc-4a8d8ad88c33', tenant: 'tblocks.com',extraQueryParameter: 'nux=1',redirectUri: url }); 
 
            if(this.adalService.userInfo.authenticated)
            {             
                //this.username = this.adalService.userInfo.profile.name;
            }
            else{   
            localStorage.clear();
            this.router.navigate(['login']);
            }
            this.username=localStorage.getItem("userName");
       }

    public toggleMenu() {
        this.isMenuCollapsed = !this.isMenuCollapsed; 
        this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);        
    }

     public logOut():void {
            this.adalService.logOut();
            localStorage.clear();
            this.router.navigate(['login']);
    }
}
