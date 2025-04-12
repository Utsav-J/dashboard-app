import { Component, contentChild, ContentChild, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host:{
    class:"control",
    '(click)':"onClick()"
  }
})
export class ControlComponent {
  label = input.required<string>();
  private dataAboutElement = inject(ElementRef);
  // @ContentChild('input') private control?:ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private control = contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');
  onClick(){
     console.log("Clicked");
     console.log(this.dataAboutElement);
     console.log(this.control().nativeElement);
  }
}
