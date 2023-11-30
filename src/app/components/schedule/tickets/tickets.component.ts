import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ticket } from 'src/app/models/ticket.model';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  @Input()
  ticketsArray: Ticket[] = [];
  @Input()
  numVisitors: number = 0;
  @Output()
  ticketEmit: EventEmitter<Ticket> = new EventEmitter<Ticket>();

  constructor() { 
  }

  ngOnInit(): void {
  }
  orderTicketsEmit(ticket: Ticket) {
    this.ticketEmit.emit(ticket);
  }

}
