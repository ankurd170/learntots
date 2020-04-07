import { Component, OnInit } from '@angular/core';
import {questions} from '../quiz/data';
import {scquestions} from '../quiz/science';
import {markquestions} from '../quiz/marketing';
import { splitClasses } from '@angular/compiler';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { AuthoService } from '../autho.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})




export class TestComponent implements OnInit {

  
ques;no;qs;op1;
op2;
op3;
op4;
ryt="";
gv=[];
answerd=0;
btnname="next";
mode="choose";
rtscore=0;
wrnscore=0;
score=0;
correct="correctoption";
incorrect="wrongoption";
notattempt=0;
cor=0;
wrong=0;
angle1=0;
angle2=0;
angle3=0;
index=0;
min=1;
sec=59;
hr=0;
quiztaken=0;highscore=0;lowscore=0;
status=[];

public pieChartOptions: ChartOptions = {
  responsive: true,
  legend: {
    position: 'top',
  },
  plugins: {
    datalabels: {
      formatter: (value, ctx) => {
        const label = ctx.chart.data.labels[ctx.dataIndex];
        return label;
      },
    },
  }
};
public pieChartLabels: Label[] = [['Correct', 'Questions'], ['Incorrect', 'questions'], ['Unattempted', 'questions']];
public pieChartData: number[] = [this.angle1,this.angle2,this.angle3];
public pieChartType: ChartType = 'pie';
public pieChartLegend = true;
public pieChartColors = [
  {
    backgroundColor: ['rgba(0,255,0,0.3)', 'rgba(255,0,0,0.3)', 'rgba(0,0,255,0.3)'],
  },
];




constructor(private authoservice:AuthoService) { }

  ngOnInit(): void {
  }
 

  


// events
public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}

public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}





nextques(i)
{
    
 
    console.log(this.ryt);
    
    if (i==9) 
    {
      this.btnname="submit";
           
    }
    

    this.no=this.ques[i].num;
    this.qs=this.ques[i].question;
    this.op1=this.ques[i].ptn1;
    this.op2=this.ques[i].ptn2;
    this.op3=this.ques[i].ptn3;
    this.op4=this.ques[i].ptn4;
 

    if(this.ryt!="")
    this.ques[i].answered="1";
else
this.ques[i].answered="0";
    
 
 this.addans(i);       
}


starttest()
{
  this.mode="quiz";
  this.no=this.ques[0].num;
  this.qs=this.ques[0].question;
  this.op1=this.ques[0].ptn1;
  this.op2=this.ques[0].ptn2;
  this.op3=this.ques[0].ptn3;
  this.op4=this.ques[0].ptn4;
  this.stopwatch();
  this.quiztaken++;
}



stopwatch()
{
  

  setTimeout((cog) => {
    setInterval((co) => {
      co++;
      this.sec--;
      if (this.sec==0 && this.min!=0) {
        this.sec=59;
        this.min--;
      }
      else if(this.sec==0 && this.min==0 && this.mode!='submit')
      {
        this.timeout(this.no);
        console.log("timeout:"+this.no);
        }

    }, 1000);
    }, 100);
  
}




prevques(i)
{
    i--;
    console.log(i);
this.gv.pop();
console.log(this.gv);

    this.no=this.ques[i-1].num;
    this.qs=this.ques[i-1].question;
    this.op1=this.ques[i-1].ptn1;
    this.op2=this.ques[i-1].ptn2;
    this.op3=this.ques[i-1].ptn3;
    this.op4=this.ques[i-1].ptn4;
}



 
addans(i)
{
var rt={};
rt=this.ryt;

  this.gv.push(rt);  

console.log(i);
console.log(this.gv);
console.log(this.ques[i-1].right);
this.ryt="";
if(i==10)
this.calcscore();
}





calcscore()
{

  var st={};

  for (var index = 0; index<this.gv.length ;index++) 
  {
    
  if (this.gv[index]==this.ques[index].right) 
  {
    this.rtscore=this.rtscore+4;
this.cor++;
st="correct +4";
  }
  else if (this.gv[index]==""||this.gv[index]==null) 
  {
    this.notattempt++;
  st="unattemted +0";
  }
else
  {
    this.wrnscore=this.wrnscore+1;
    this.wrong++;
    st="wrong -1";
  }
this.status.push(st);
}
  
}


selected(i)
{

  this.mode="start";
if (i==1) 
{
this.ques=questions;  
}
if (i==2) 
{
this.ques=scquestions;  
}
if (i==3) 
{
this.ques=markquestions;  
}


}




timeout(i)
{
  this.mode="submit";
   this.notattempt=this.notattempt+(9-i);
  this.calcscore();
}



submittest(i)
{
  
  this.mode="submit";
  this.addans(i);

}  

modeback()
{
this.mode="submit";
}




result()
{
this.score=this.rtscore-this.wrnscore;

if(this.score>this.highscore)
this.highscore=this.score;
else if(this.score<this.lowscore)
this.lowscore=this.score;

this.authoservice.setquizstats(this.quiztaken,this.highscore,this.lowscore);
console.log(this.quiztaken,this.highscore,this.lowscore);


this.mode="result";
this.pieChartData.splice(0,1,this.cor);
this.pieChartData.splice(1,1,this.wrong);
this.pieChartData.splice(2,1,this.notattempt);
console.log(this.cor);
console.log(this.wrong);
console.log(this.notattempt);
}




analyse()
{
  this.mode="analysis";
}



whichclassapply(i,ch)
{

if ((this.gv[i]==ch && this.gv[i]==this.ques[i].right) || this.ques[i].right==ch) 
{
 return "correctoption"; 
}
else if (this.gv[i]==ch && this.gv[i]!=this.ques[i].right) 
{
  return "wrongoption";
}
else
return "unattemptedoption";
}
}