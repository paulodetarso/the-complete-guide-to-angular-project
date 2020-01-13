import { Component, EventEmitter, Output } from '@angular/core';
import { FeatureEnum } from '../shared/enum/feature.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {

  @Output()
  featureSelected = new EventEmitter<string>();

  collapsed = true;
  feature = FeatureEnum;

  onSelect(feature: string): void {
    this.featureSelected.emit(feature);
  }
}
