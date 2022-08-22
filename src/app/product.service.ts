import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Page, Product} from "./model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  findAll(size: number, keyword?: string): Observable<Page<Product>> {
    const params = new HttpParams()
      .set('sort', 'creationDate,desc')
      .set('size', size);

    return this.http.post<Page<Product>>('https://api.secondemain.kiabi.com/api/products/search', { keyword }, {
      params,
    });
  }
}
