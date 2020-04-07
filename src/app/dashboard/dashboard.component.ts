import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


compname="Dashboard";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logout()
  {
this.router.navigate(["/home"]);
  }

  dash()
  {
    this.router.navigate(["/dashboard"]);
  }

  identifycomp(e)
  {
   
    console.log(e.srcElement.attributes.id);
   
    if(e.srcElement.attributes.id.value=="dash")
    this.compname="Dashboard";
    else if(e.srcElement.attributes.id.value=="test")
    this.compname="Test";
    else if(e.srcElement.attributes.id.value=="game")
    this.compname="Game";
    else if(e.srcElement.attributes.id.value=="learn")
    this.compname="Learn";

    console.log(this.compname);

  }

}
