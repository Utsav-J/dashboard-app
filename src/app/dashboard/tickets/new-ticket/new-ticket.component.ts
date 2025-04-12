import { AfterViewInit, Component, ElementRef, EventEmitter, Output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit {
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  @Output() add = new EventEmitter<{title:string, description:string}>();


  onSubmit(title:string, description:string){
    console.log(title);
    console.log(description);
    this.form().nativeElement.reset();
    this.add.emit({title:title,description:description});
  } 

  ngAfterViewInit(): void {
      console.log("After view init");
  }

  
}
