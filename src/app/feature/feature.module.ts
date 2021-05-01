import { NgModule } from '@angular/core';
import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    FeatureComponent,
  ],
  imports: [
    SharedModule,
    FeatureRoutingModule,
  ],
})
export class FeatureModule {
}
