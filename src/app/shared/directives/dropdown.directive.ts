import { Directive, HostBinding, HostListener } from "@angular/core";


@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2){
    @HostBinding('class.show') isOpen = false

    @HostListener('click') toggleOpen() {
      this.isOpen = !this.isOpen

      //Element to add class
      let dropdownList = this.elementRef.nativeElement.querySelector('.dropdown-menu');

      if (this.isOpen){
        this.renderer.addClass(dropdownList, 'show')
      } else {
        this.renderer.removeClass(dropdownList, 'show')
      }
    }
  }
}
