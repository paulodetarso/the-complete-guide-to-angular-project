import { Component } from '@angular/core';
import { FeatureEnum } from './shared/enum/feature.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  feature = FeatureEnum;
  loadedFeature: FeatureEnum = FeatureEnum.RECIPE;

  onNavigate(feature: FeatureEnum): void {
    this.loadedFeature = feature;
  }
}
