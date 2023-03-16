import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private toastr: ToastrService) { }

  //  success messege popup
  showSuccess(message:string) {
    this.toastr.success(message);
  }

  //  error message pop-up
  showError(message:string) {
    this.toastr.error(message);
  }
}
