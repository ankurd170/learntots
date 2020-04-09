import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LearnComponent } from '../learn/learn.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TestComponent } from '../test/test.component';
import { GameComponent } from '../game/game.component';
import { WrongurlComponent } from '../wrongurl/wrongurl.component';
import { AuthoGuard } from '../autho.guard';
import { DashhomeComponent } from '../dashhome/dashhome.component';
import { FactsknowComponent } from '../factsknow/factsknow.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthoGuard],children:
[{path:'',component:DashhomeComponent},
  {path:'learn',component:LearnComponent},
{path:'test',component:TestComponent},
{path:'Dashboard',component:DashhomeComponent},
{path:'Dashboard/fact',component:FactsknowComponent},
{path:'game',component:GameComponent},
{path:'fact',component:FactsknowComponent}
]
},
{path:'**',component:WrongurlComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
