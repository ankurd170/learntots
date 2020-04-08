import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-factsknow',
  templateUrl: './factsknow.component.html',
  styleUrls: ['./factsknow.component.css']
})
export class FactsknowComponent implements OnInit {

factsnew=[
  {"num":"1","facts":"/assets/img/ripley1.jpg"},
  {"num":"2","facts":"/assets/img/ripley2.jpg"},
  {"num":"3","facts":"/assets/img/ripley3.jpg"},
  {"num":"4","facts":"/assets/img/ripley4.jpg"},
  {"num":"5","facts":"/assets/img/ripley5.jpg"},
  {"num":"6","facts":"/assets/img/ripley6.jpg"},
  {"num":"7","facts":"/assets/img/ripley7.jpg"},
  {"num":"8","facts":"/assets/img/ripley8.jpg"},
  {"num":"9","facts":"/assets/img/ripley9.jpg"},
  {"num":"10","facts":"/assets/img/ripley10.jpg"},
  {"num":"11","facts":"/assets/img/ripley11.jpg"},
  {"num":"12","facts":"/assets/img/ripley12.jpg"},
  {"num":"13","facts":"/assets/img/ripley13.jpg"},
  {"num":"14","facts":"/assets/img/ripley14.jpg"},
  {"num":"15","facts":"/assets/img/ripley15.jpg"},
];

fact;

  constructor() 
  { 
    this.getfact();
  }

  ngOnInit(): void {
  }

getfact()
{
  var i=Math.floor((Math.random()*15)+1);
this.fact=this.factsnew[i].facts;
}


}
