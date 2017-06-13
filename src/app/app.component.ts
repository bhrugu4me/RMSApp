import { Component, ViewEncapsulation } from '@angular/core';
import { ADAL4Service } from 'adal-angular4';
import {Router} from '@angular/router';
import 'expose-loader?AuthenticationContext!../../node_modules/adal-angular/lib/adal.js';
/// <reference path="../../../node_modules/@types/adal/index.d.ts" />

//let createAuthContextFn: adal.AuthenticationContextStatic = AuthenticationContext;
@Component({
  selector: 'az-root',
  encapsulation: ViewEncapsulation.None,
  template:`<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(
     private adalService: ADAL4Service,private router:Router
   ) {
       let url=window.location.origin + '/login';
       //this.adalService.init({  clientId : 'c41b4f22-94d4-40a2-8dcd-d17f52f07d3d', tenant: 'sabih81msn.onmicrosoft.com',extraQueryParameter: 'nux=1',redirectUri: url });
       this.adalService.init({ clientId: '23eabdea-5135-436e-8bfc-4a8d8ad88c33', tenant: 'tblocks.com',extraQueryParameter: 'nux=1',redirectUri: url }); 
   }
 }
