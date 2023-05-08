import { NgModule } from '@angular/core';
import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';


@NgModule({
  imports: [
    FeatureRoutingModule,
    FeatureComponent,
],
})
export class FeatureModule {
}
