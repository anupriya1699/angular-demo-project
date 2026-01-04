import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';
@Directive({
  selector: '[numeric]',
})
export class NumericDirective {
  specialKeys: any;
  @Input() decimals = 0;
  @Input() paste = true;
  private check(value: string, decimals: any) {
    if (decimals <= 0) {
      return String(value).match(new RegExp(/^\d+$/));
    } else {
      const regExpString =
        '^\\s*((\\d+(\\.\\d{0,' + decimals + '})?)|((\\d*(\\.\\d{1,' + decimals + '}))))\\s*$';
      return String(value).match(new RegExp(regExpString));
    }
  }
  constructor(private el: ElementRef, private renderer: Renderer2, private control: NgControl) {}
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    this.specialKeys = [
      'Backspace',
      'Tab',
      'End',
      'Enter',
      'Meta',
      'Control',
      'Home',
      'ArrowLeft',
      'ArrowRight',
      'Delete',
    ];
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    setTimeout(() => {
      if (this.decimals <= 0) {
        this.el.nativeElement.value = '' + this.el.nativeElement.value.replace(/[^0-9]/g, '');
      } else {
        this.el.nativeElement.value = '' + this.el.nativeElement.value.replace(/[^0-9.]/g, '');
      }
      this.control.control?.setValue('' + this.el.nativeElement.value);
      this.renderer.setProperty(this.el.nativeElement, 'value', '' + this.el.nativeElement.value);
    }, 100);
    const current: string = this.el.nativeElement.value;
    const next: string = current.concat(event.key);
    if (event.key != 'v') {
      if (next && !this.check(next, this.decimals)) {
        event.preventDefault();
      }
    }
  }
}
