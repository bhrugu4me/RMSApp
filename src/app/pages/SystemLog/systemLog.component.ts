import { Component, ViewEncapsulation,OnInit,NgModule } from '@angular/core';
import { systemlogService } from '../../services/SystemLog.service';
import { systemLog } from '../../shared/SystemLog';
import { Router } from '@angular/router';
import {DataTableModule} from "angular2-datatable";
import { PipesModule } from '../../theme/pipes/pipes.module';

@Component({
  selector: 'az-dynamic-tables',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './SystemLog.component.html',
  styleUrls: ['./SystemLog.component.scss'],
  providers: [systemlogService]
})

export class SystemLog implements OnInit {
    public self = this;
    public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "UploadDate";
    public sortOrder = "desc";
    public systemlog:systemlogService;
    public searchText:string;
    public messageforModal:string;
    public router:Router;
    public progressVisible:boolean=false;
    public logs:systemLog[];
    public IsData:boolean=false;
    public startDate = new Date();
    public endDate=new Date();
    public strstdate:string;
    public strenddate:string;
    public validate:boolean=false;
    public errorMessage:string;
 
 constructor(private _systemlog:systemlogService,public _router:Router) { 
      this.systemlog=_systemlog;
      this.router=_router;
      this.strstdate=this.startDate.getFullYear() + "-" + ('0' + (this.startDate.getMonth()+1)).slice(-2) + "-" + ('0' + (this.startDate.getDate()+1)).slice(-2);
      this.strenddate=this.endDate.getFullYear() + "-" + ('0' + (this.endDate.getMonth()+1)).slice(-2) + "-" + ('0' + (this.endDate.getDate()+1)).slice(-2);
      this.getsystemlog(this.strstdate + " 00:00:00", this.strenddate + " 23:59:59");
  }

ngOnInit() {
   this.validate=false;
}

getresult()
{
    if(Date.parse(this.strstdate)>Date.parse(this.strenddate))
    {
      this.validate=true;
      this.errorMessage="End Date Must be greater than or equal to Start Date";
    }
    else
    {
      this.validate=false;
      this.errorMessage="";
      this.getsystemlog(this.strstdate + " 00:00:00", this.strenddate + " 23:59:59");
    }
}
  showMsg(msg){
    if(msg.length < 130)return false;
    this.messageforModal = msg;
    jQuery('#message-modal').modal('show');
  }
  
  hideMsg(){
    jQuery('#message-modal').modal('hide');
  }

  getsystemlog(stDate:string,edDate:string)
  {
      this.progressVisible=true;
        this.systemlog.getsystemlog(stDate,edDate).subscribe(
            (data:any)=>{
              this.logs = data;
              if(data.length>0)
              {
                this.IsData=true;
              }
              else
              {
                this.IsData=false;
              }
              this.progressVisible=false;
            },
             (error:any) => {
              
              this.progressVisible=false;
              this.IsData=false;
              this.DisplayErrorMessage(error);
            }
			);
  }

    DisplayErrorMessage(error) {
          this.progressVisible = false;
          if(error._body)
          {
            try
            {
              error=JSON.parse(error._body);
            }catch(e)
            {
              error=JSON.parse(JSON.stringify(error._body));
            }
          }
          this.validate = true;
          if(error.errorMessage)
            this.errorMessage = error.errorMessage;
          else
            this.errorMessage = "request timeout occurred, please try to reload again";
  }


}
