import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../User';
import { CommonService } from '../common.service';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public data:any;
  public user:any;
  alert:boolean=false;
  userModel: any=new User('','')
  constructor(private router:Router,
    private commonService:CommonService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
     this.commonService.getUser().subscribe((res)=>{
       this.user=res;
       console.log(this.user);
     })
  }
  login(){
    this.user.forEach((e:any) => {
      if(this.userModel.email === e.email && this.userModel.password===e.password){
        this.toastr.success('Successful','title');
        this.router.navigate(['/team-tag'])
        localStorage.setItem("token",JSON.stringify(this.userModel))
      }
    });
  }
  closeAlert(){
    this.alert=false;
  }
}
