import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TwilioService {
  private apiUrl = 'https://seu-backend.com/api/twilio/send-message'; // URL do backend que se comunica com a API Twilio

  constructor(private http: HttpClient) {}

  sendMessage(to: string, message: string): Observable<any> {
    const body = { to, message };
    return this.http.post(this.apiUrl, body, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }
}
