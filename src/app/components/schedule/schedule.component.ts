import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket.model';
import { TicketsService } from 'src/app/services/tickets.service';
import { UserMrssageComponent } from 'src/app/user-mrssage/user-mrssage.component';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  numVisitors: number = 0;

  morningTickets: Ticket[] = [];
  noonTickets: Ticket[] = [];
  afternoonTickets: Ticket[] = [];

  curTicket: Ticket = new Ticket();

  constructor(private tickesSer: TicketsService, public dialog: MatDialog, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.numVisitors = (Number)(params.get('num'));
    });
    console.log(this.numVisitors);
    this.tickesSer.getTickes().subscribe((tickets: Ticket[]) => {
      this.splitTicketsByTime(tickets);
    });
  }

  openMessage() {
    if (!this.curTicket.isClosed && this.curTicket.availablePlaces > this.numVisitors) {
      const dialogRef = this.dialog.open(UserMrssageComponent, {
        data: {
          "numVisitors": this.numVisitors,
          "time": this.curTicket.startTime
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          //update server 
          //לא הספקתי לעשות
        }
        console.log(`Dialog result: ${result}`);
      });
    }
  }

  splitTicketsByTime(tickets: Ticket[]) {
    tickets.forEach(ticket => {
      const hours = parseInt(ticket.startTime.split(':')[0], 10);
      if (hours >= 8 && hours < 12) {
        this.morningTickets.push(ticket);
      } else if (hours >= 12 && hours < 15) {
        this.noonTickets.push(ticket);
      } else if (hours >= 15 && hours <= 18) {
        this.afternoonTickets.push(ticket);
      }
    })
  }
  getCurTickest(ticket: Ticket) {
    this.curTicket = ticket;
  }
  return() {
    this.router.navigate([`home`]);
  }

}
