import { Injectable } from '@angular/core'; 
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import  'rxjs/Rx';
@Injectable()
export class Alerts {
  public visible = false;
  readonly service = {
    addError:this.addError,
    addWarning:this.addWarning,
    addSuccess:this.addSuccess,
    addInfo:this.addInfo,
    closeAlert:this.closeAlert,
    closeAlertIdx:this.closeAlertIdx,
    clear:this.clear,
    get:this.get
  };
  constructor(private _http:Http) { }
  public alerts = [];

 
  addError(title, msg, msgList) {
    return this.add('danger', title, msg, msgList);
  }
  addWarning(title, msg, msgList) {
    return this.add('warning', title, msg, msgList);
  }
  addSuccess(title, msg, msgList) {
    return this.add('success', title, msg, msgList);
  }
  addInfo(title, msg, msgList) {
    return this.add('info', title, msg, msgList);
  }

  add(type, title, msg, msgList) {
    const a = {
      type,
      msg,
      msgs: msgList,
      title,
      close() {
        return this.closeAlert(this);
      },
    };

    const result = this.alerts.push(a);

    window.setTimeout(() => {
      if (this.alerts.length > 0) {
        this.hide();
      }
    }, 2000);


    if (!this.visible) {
      this.show();
    }

    return result;
  }

  closeAlert(alert) {
    return this.closeAlertIdx(this.alerts.indexOf(alert));
  }

  closeAlertIdx(index) {
    if (this.visible && this.alerts.length == 1) {
      this.hide();
      return;
    }

    return this.alerts.splice(index, 1);
  }

  show() {
    //$('#messageContainer').show('in');
    this.visible = true;
  }

  hide() {
    //$('#messageContainer').fadeOut(1600, 'linear');
    this.clear();
    this.visible = false;
  }

  clear() {
    this.alerts = [];
  }

  get() {
    return this.alerts;
  }
  
}