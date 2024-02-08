import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  
  constructor(private toast: ToastrService) { }

  showSuccess(title: any, message:any){
    this.toast.success(title, message,{easing: 'ease-in', easeTime: 1000})
  }

  showError(message: any){
    this.toast.error(message,'',{easing: 'ease-in', easeTime: 1000})
  }

}
