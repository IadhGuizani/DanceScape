import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Ticket} from "../../../models/ticket";
import {TicketService} from "../../../services/ticket.service";

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit{
  ticket : Ticket | undefined;

  constructor(private route: ActivatedRoute, private ticketService: TicketService) {}

  ngOnInit(): void {
    this.getTicketDetails();
  }

  getTicketDetails(): void {
    const rid = Number(this.route.snapshot.paramMap.get('RID'));
    this.ticketService.getTicketById(rid).subscribe(
      (data: any) => {
        this.ticket = data as Ticket;
      },
      (error) => {
        console.error('Error fetching ticket details:', error);
        // Handle error appropriately
      }
    );
  }
}
