import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { SubscribeComponent } from './subscribe/subscribe.component';

const routes: Routes = [
  {
    redirectTo: "subscribe"
  },
  {
    path: 'subscribe', 
    component: SubscribeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
