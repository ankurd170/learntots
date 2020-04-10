import { Component, OnInit } from '@angular/core';
import { AuthoService } from '../autho.service';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {


  st1="X";st2="O";st="";p;v;turns=0;buttn;
  b1="";b2="";b3="";b4="";b5="";b6="";b7="";b8="";b9="";
win;game;firstone=false;
one=true;two=true;three=true;
four=true;five=true;six=true;
seven=true;eight=true;nine=true;
gameswonx=0;gameswony=0;gamestied=0;gamesplayed=0;

mode="welcome";

  constructor(private authoservice:AuthoService) 
  { 
  }

  ngOnInit(): void {
  }

 
  
  



  



  winner()  //identifies winner
  {
  
  //winner vertical
  
    if (this.b1=="X" && this.b4=="X" && this.b7=="X")
     {
        this.win='X is winner';	 
        this.gameswonx++;
        this.endgame();
        
      }
       else if (this.b1=="O" && this.b4=="O" && this.b7=="O") 
       {
        this.win='O is winner';
        this.gameswony++;
        this.endgame();
        	 
       }
       else if (this.b3=="X" && this.b6=="X" && this.b9=="X")
    {
      this.win='X is winner';
      this.gameswonx++;
      this.endgame();	 
      
     }
     else if (this.b3=="O" && this.b6=="O" && this.b9=="O")
       {
        this.win='O is winner';	 
        this.gameswony++;
        this.endgame(); 
        
      }
         
    else if (this.b2=="X" && this.b5=="X" && this.b8=="X")
      {
        this.win='X is winner';	 
        this.gameswonx++;
        this.endgame();
         
      }
       else if (this.b2=="O" && this.b5=="O" && this.b8=="O")
       {
        this.win='O is winner';	 
        this.gameswony++;
        this.endgame(); 
        
      }
       
  //winner horizontal
  
  else if (this.b1=="X" && this.b2=="X" && this.b3=="X")
  {
    this.win='X is winner';	 
    this.gameswonx++;
    this.endgame(); 
    
  }
  else if (this.b1=="O" && this.b2=="O" && this.b3=="O")
   {
    this.win='O is winner';	 
    this.gameswony++;
    this.endgame(); 
    
  }
     
  
   else if (this.b4=="X" && this.b5=="X" && this.b6=="X")
    {
      this.win='X is winner';	 
      this.gameswonx++; 
      this.endgame();
      
    }
       
     else if (this.b4=="O" && this.b5=="O" && this.b6=="O")
       {
        this.win='O is winner';	 
        this.gameswony++;
        this.endgame();
         
      }
        
    
       else if (this.b7=="X" && this.b8=="X" && this.b9=="X")
      {
        this.win='X is winner';	 
        this.gameswonx++;
        this.endgame();
      	 
    }
       else if (this.b7=="O" && this.b8=="O" && this.b9=="O")
       {
        this.win='O is winner';	 
        this.gameswony++;
        this.endgame(); 
        
      }
        
  //winner diagonal
  
  else if (this.b3=="X" && this.b5=="X" && this.b7=="X")
  {	
    this.win='X is winner';	 
    this.gameswonx++;  
    this.endgame();
      	 
  }
       else if (this.b3=="O" && this.b5=="O" && this.b7=="O")
      {
        this.win='O is winner';	 
        this.gameswony++;
        this.endgame();
        
      }
      
       else if (this.b1=="X" && this.b5=="X" && this.b9=="X")
      {
        this.win='X is winner';	 
        this.gameswonx++;
        this.endgame();
      	 
    }
       else if (this.b1=="O" && this.b5=="O" && this.b9=="O")
       {
        this.win='O is winner';	 
        this.gameswony++;
        this.endgame();
         
      }
        
  //if no clear winner found 		
  else if (this.turns==8)
       {
        this.win='Game is tied!!';	 
        this.gamestied++;
        this.endgame(); 
        
      }		 
  else
       {
        this.win='      No WINNER YET      ';
        }
      
      }


initialize()
{
  this.one=true;this.two=true;this.three=true;
  this.four=true;this.five=true;this.six=true;
  this.seven=true;this.eight=true;this.nine=true;
  this.mode="game";

}
      
  
  
  first(e)  //identifies first player
  {
    console.log(e.srcElement.attributes.id);

    if (e.srcElement.attributes.id.value=="x")
    {
    this.st1="X is first player";
    this.st2="o is second player";	 
    this.turns=1;	
    }
    else
  {this.st1="o is first player";
  this.st2="X is second player";
   this.turns=0;
    }
    this.firstone=true;
    this.start();
  
  }
  

  start()  //start game
  {
    
    this.one=false;this.two=false;this.three=false;
    this.four=false;this.five=false;this.six=false;
    this.seven=false;this.eight=false;this.nine=false;
    this.buttn="";
  }
  
  
  
  endgame() //if winner found,finish the game
  {
    
    this.game="game has ended!!";
    this.one=true;
    this.two=true;
    this.three=true;
    this.four=true;
    this.five=true;
    this.six=true;
    this.seven=true;
    this.eight=true;
    this.nine=true;
    this.gamesplayed++;
    this.authoservice.setgamestats(this.gameswonx,this.gameswony,this.gamestied,this.gamesplayed);
  }
  
  
  
  turn(e)   //what happens each turn
  {
  
  console.log("turns:"+this.turns);
  console.log(e.srcElement.attributes.id.value);
  //console.log(v==1)
  
  if(e.srcElement.attributes.id.value=="1")
  {
    if (this.turns%2==0) 
      this.b1="O";
    else
      this.b1="X";
      this.one=true;
  }

  else if (e.srcElement.attributes.id.value=="2")
  {
    if (this.turns%2==0) 
      this.b2="O";
    else
      this.b2="X";
      this.two=true;
  }

  else if (e.srcElement.attributes.id.value=="3")
  {
    if (this.turns%2==0) 
      this.b3="O";
    else
      this.b3="X";
      this.three=true;
  }
  
  else if (e.srcElement.attributes.id.value=="4")
  {
    if (this.turns%2==0) 
      this.b4="O";
    else
      this.b4="X";
      this.four=true;
  }
  
  else if (e.srcElement.attributes.id.value=="5")
  {
    if (this.turns%2==0) 
      this.b5="O";
    else
      this.b5="X";
      this.five=true;
  }
  
  else if (e.srcElement.attributes.id.value=="6")
  {
    if (this.turns%2==0) 
      this.b6="O";
    else
      this.b6="X";
      this.six=true;
  }
  
  else if (e.srcElement.attributes.id.value=="7")
  {
    if (this.turns%2==0) 
      this.b7="O";
    else
      this.b7="X";
      this.seven=true;
  }
  
  else if (e.srcElement.attributes.id.value=="8")
  {
    if (this.turns%2==0) 
      this.b8="O";
    else
      this.b8="X";
      this.eight=true;
  }
  
  else
  {
    if (this.turns%2==0) 
      this.b9="O";
    else
      this.b9="X";
      this.nine=true;
  }
this.buttn="";
  this.turns++;
this.winner();  
}
    
}
