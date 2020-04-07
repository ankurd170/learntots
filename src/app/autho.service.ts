import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthoService {

loggedin:boolean;
loginid;
pass;
wonbyx=0;wonbyy=0;tied=0;played=0;
qut=0;hsr=0;lsr=0;

  constructor() { }

public getlogin()
{
  return this.loggedin;
}

public setlogin()
{
  this.loggedin=true;
}

public setid(id,password)
{
this.loginid=id;
this.pass=password;
console.log(this.loginid,this.pass);
}

public getid()
{
return this.loginid;
}

public getpass()
{
return this.pass;
}

public setgamestats(wonx,wony,td,pld)
{
this.wonbyx=wonx;
this.wonbyy=wony;
this.tied=td;
this.played=pld;
console.log(this.wonbyx,this.wonbyy);

}

public setquizstats(qt,hs,ls)
{
this.qut=qt;
this.hsr=hs;
this.lsr=ls;
console.log(this.qut,this.hsr);

}


}
