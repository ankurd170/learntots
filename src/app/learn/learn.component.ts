import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {


tab="start";

  constructor() { }

  ngOnInit(): void {
  }


learntab(i)
{

if (i==1) 
{
this.tab="1";  
}
if (i==2) 
{
this.tab="2";  
}
if (i==3) 
{
this.tab="3";  
}
}


}
