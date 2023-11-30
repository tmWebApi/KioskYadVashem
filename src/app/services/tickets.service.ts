import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  url: string = "https://localhost:44369/api/Ticket"
  constructor(private http: HttpClient) { }

  getTickes(): Observable<Array<Ticket>> {
    return this.http.get<Array<Ticket>>(this.url);
  }
}
