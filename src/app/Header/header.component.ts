import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'

})
export class HeaderComponent {
@Output() featureItem = new EventEmitter<string>();

  navClicked(feature: string) {
    this.featureItem.emit(feature);
  }

}
