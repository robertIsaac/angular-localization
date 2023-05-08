import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  imports: [
    HomeRoutingModule,
    HomeComponent,
],
})
export class HomeModule {
}
