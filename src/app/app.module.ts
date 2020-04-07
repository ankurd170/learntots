import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LearnComponent } from './learn/learn.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule} from "@angular/router";
import {QuizRoutingModule} from './quiz/quiz-routing.module';
import { TestComponent } from './test/test.component';
import { GameComponent } from './game/game.component';
import { WrongurlComponent } from './wrongurl/wrongurl.component';
import * as CanvasJS from '../assets/js/canvasjs.min';
import { ChartsModule } from 'ng2-charts';
import { AuthoGuard } from './autho.guard';
import { AuthoService } from './autho.service';
import { DashhomeComponent } from './dashhome/dashhome.component';
import { FactsknowComponent } from './factsknow/factsknow.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    LearnComponent,
    DashboardComponent,
    TestComponent,
   
    GameComponent,
    WrongurlComponent,
    DashhomeComponent,
    FactsknowComponent
  ],
  imports: [
    BrowserModule,ModalModule.forRoot(),FormsModule,RouterModule,QuizRoutingModule,ChartsModule
  ],
  providers: [AuthoGuard,AuthoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
