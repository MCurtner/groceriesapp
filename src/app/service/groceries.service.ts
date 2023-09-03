import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { GroceryInterface } from '../interface/grocery.interface';
import { Response } from '../interface/response.interface';

@Injectable({providedIn: 'root'})
export class GroceriesService {

  private readonly apiUrl: string = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  // Fetch groceries
  getGroceries(page: number = 0, filter: string = ""): Observable<any> {
    
    return this.http.get<any>(`${this.apiUrl}/groceries?page=${page}&name=${filter}`).pipe(
      map(response => this.processResponse(response))
    ); 
  }

  private processResponse(response: Response): Response {
    return {
      content: response.content.map((grocery: any) => (<GroceryInterface>{
        id: grocery.id,
        name: grocery.name,
        imageUrl: grocery.imageUrl,
        price: grocery.price,
        currency: grocery.currency,
        volumePrice: grocery.volumePrice,
        volumeCurrency: grocery.volumeCurrency,
        store: grocery.store
      }))
    };
  }
}
