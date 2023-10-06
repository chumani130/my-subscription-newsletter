import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { DailyquoteComponent } from './dailyquote/dailyquote.component';
import { QoutesComponent } from './qoutes/qoutes.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
     path: 'home', 
     component: HomeComponent,
     title: 'Daily Quotes Page'
  },
  { 
    path: 'about', 
    component: AboutComponent,
    title: 'About Page'
  },
  {
    path: 'quotes', 
    component: QoutesComponent,
    title: 'Quotes Page' 
  },
  {
    path: 'subscribe', 
    component: SubscribeComponent,
    title: 'Subscribe' 
  }


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
