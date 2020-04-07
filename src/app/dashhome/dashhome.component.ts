import { Component, OnInit } from '@angular/core';
import { AuthoService } from '../autho.service';
import { facts } from "./didyouknow";
@Component({
  selector: 'app-dashhome',
  templateUrl: './dashhome.component.html',
  styleUrls: ['./dashhome.component.css']
})
export class DashhomeComponent implements OnInit {

  login=this.authservice.loginid;
  gp=0;gwx=0;gwy=0;gt=0;
  quiztk=0;highscore=0;lowscore=0;
quot;auth;fact;

factsin=facts;


quotes=[
  {"quote":"“The only true wisdom is in knowing you know nothing.”","author":"Socrates"},
  {"quote":"“Any fool can know. The point is to understand.”","author":"Albert Einstein"},
  {"quote":"“Reading furnishes the mind only with materials of knowledge; it is thinking that makes what we read ours.”","author":"John Locke"},
  {"quote":"“I did then what I knew how to do. Now that I know better, I do better.”","author":"Maya Angelou"},
  {"quote":"“The man of knowledge must be able not only to love his enemies but also to hate his friends.”","author":"Friedrich Nietzsche"},
  {"quote":"“I cannot teach anybody anything. I can only make them think”","author":"Socrates"},
  {"quote":"“The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.”","author":"Daniel J. Boorstin"},
  {"quote":"“Your assumptions are your windows on the world. Scrub them off every once in a while, or the light won't come in.”","author":"Isaac Asimov"},
  {"quote":"“It takes a very long time to become young.”","author":"Pablo Picasso"},
  {"quote":"“Few people are capable of expressing with equanimity opinions which differ from the prejudices of their social enviroment. Most people are incapable of forming such opinions.”","author":"Socrates"},
  {"quote":"“What is now proved was once only imagined.”","author":"William Blake"},
  {"quote":"“A little Learning is a dangerous Thing.”","author":"Alexander Pope"},
  {"quote":"“The hardest thing of all is to find a black cat in a dark room, especially if there is no cat.”","author":"Confucius"},
  {"quote":"“Learning does not make one learned: there are those who have knowledge and those who have understanding. The first requires memory and the second philosophy.”","author":"Alexandre Dumas"},
  {"quote":"“I can calculate the motion of heavenly bodies but not the madness of people.”","author":"Isaac Newton"}
];


  constructor(private authservice:AuthoService) 
  {
    this.setvalues();
    this.setquizvalues();
    this.setquote();
    this.setknow();
   }

  ngOnInit(): void {

  
  }

setquote()
{
  var num=Math.floor((Math.random()*14)+1);
console.log(num);
this.quot=this.quotes[num].quote;
this.auth=this.quotes[num].author;
}


  setvalues()
  {
    this.gp=this.authservice.played;
    this.gwx=this.authservice.wonbyx;
    this.gwy=this.authservice.wonbyy;
    this.gt=this.authservice.tied;
  }
  
setquizvalues()
{
  this.quiztk=this.authservice.qut;
  this.highscore=this.authservice.hsr;
  this.lowscore=this.authservice.lsr; 
}


resetgame()
{
  this.gp=0;
    this.gwx=0;
    this.gwy=0;
    this.gt=0;
}


resetquiz()
{
  this.quiztk=0;
  this.highscore=0;
  this.lowscore=0;
}

setknow()
{
  var nm=Math.floor((Math.random()*50)+1); 
this.fact=this.factsin[nm].fact;
}



}
