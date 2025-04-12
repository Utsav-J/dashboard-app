import { Component, Input, output, signal } from '@angular/core';
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  @Input({required:true}) data!:Ticket;
  close = output();
  detailsVisible = signal(true);

  onToggleDetails(){
    this.detailsVisible.set(!this.detailsVisible());
  }
  
  onMarkAsCompleted(){
    this.close.emit();
  }

}
