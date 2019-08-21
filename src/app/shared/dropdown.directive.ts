import { Directive, HostBinding, OnInit, HostListener, ElementRef } from '@angular/core';

@Directive({
selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen = false;

  // @HostListener('click') clicked() {
  //   this.isOpen = !this.isOpen;
  // }
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}
}
