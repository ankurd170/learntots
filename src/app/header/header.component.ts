import { Component, OnInit } from '@angular/core';
import {TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {Login} from "../models/login.model";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import { AuthoService } from '../autho.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 user:Login;
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService,private router:Router,private authservice:AuthoService) {}
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


  ngOnInit(): void {

this.resetForm();
  }

login(data:NgForm)
{

  let user=data.value;
  console.log(user);

  if(user.loginid=="admin" && user.pass=="123")
  {

    this.authservice.setlogin();
    this.authservice.setid("admin","123");
    this.router.navigate(["/dashboard"]); 
  }
  else
  alert("wrong userid/password");
}

resetForm(frm?:NgForm)
{

if (frm!=null) 
frm.resetForm();  

this.user={
  userid:'',
  password:''
}


}


}
