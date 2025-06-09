import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Purchase } from '../common/purchase';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService { // READ!

  private purchaseUrl = environment.luv2shopApiUrl + 'checkout/purchase';

  constructor(private httpClient: HttpClient) { }

  placeOrder(purchase: Purchase): Observable<any> { // ok
    return this.httpClient.post<Purchase>(this.purchaseUrl, purchase);
  }
}
