import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey = 'Tu Codigo Secreto';
  private apiUrl = `https://newsapi.org/v2/everything?q=tecnología&language=es&pageSize=5&apiKey=Tu Codigo Secreto`;

  constructor(private http: HttpClient) {}

  getNoticias(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}