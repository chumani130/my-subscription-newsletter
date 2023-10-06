import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { DailyquoteComponent } from './dailyquote/dailyquote.component';
import { QoutesComponent } from './qoutes/qoutes.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    redirectTo: "dailyquote"
  },
  {
    path: 'dailyquote', 
    component: DailyquoteComponent
  },
  {
    path: 'quotes', 
    component: QoutesComponent
  },
  {
    path: 'about', 
    component: AboutComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
