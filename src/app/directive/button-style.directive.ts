
// import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

// @Directive({
//   selector: '[appButtonStyle]'
// })
// export class ButtonStyleDirective {
//   constructor(private el: ElementRef, private renderer: Renderer2) { }

//   @HostListener('mouseenter') onMouseEnter() {
//     this.hover(true);
//   }

//   @HostListener('mouseleave') onMouseLeave() {
//     this.hover(false);
//   }

//   private hover(shouldHover: boolean) {
//     if (shouldHover) {
//       this.renderer.setStyle(this.el.nativeElement, 'background-color', '#f2f2f2');
//       this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
//     } else {
//       this.renderer.setStyle(this.el.nativeElement, 'background-color', '#b58c70');
//       this.renderer.setStyle(this.el.nativeElement, 'color', 'white');
//     }
//   }
// }

import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appButtonStyle]'
})
export class ButtonStyleDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) { 
    // עיצוב רגיל בבניית הדירקטיב
    this.renderer.setStyle(this.el.nativeElement, 'background-color', '#b58c70');
    this.renderer.setStyle(this.el.nativeElement, 'color', 'white');
    this.renderer.setStyle(this.el.nativeElement, 'padding', '10px 20px');
    this.renderer.setStyle(this.el.nativeElement, 'border', 'none');
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', '5px');
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
  }

  @HostListener('mouseenter') onMouseEnter() {
    // עיצוב בעת עכבר מעל האלמנט
    this.renderer.setStyle(this.el.nativeElement, 'background-color', ' #f2f2f2');
    this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
  }

  @HostListener('mouseleave') onMouseLeave() {
    // עיצוב בעת יציאת העכבר מעל האלמנט
    this.renderer.setStyle(this.el.nativeElement, 'background-color', '#b58c70');
    this.renderer.setStyle(this.el.nativeElement, 'color', 'white');
  }
}

