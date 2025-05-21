import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey = '49261354f7a245079417094c23d9218e';
  private apiUrl = `https://newsapi.org/v2/everything?q=tecnología&language=es&pageSize=5&apiKey=49261354f7a245079417094c23d9218e`;

  constructor(private http: HttpClient) {}

  getNoticias(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}