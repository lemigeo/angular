import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class HttpClientService {
  
  constructor(private http: HttpClient) {
  }

  getInfo<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

  getList<T>(url: string): Observable<T[]> {
    return this.http.get<T[]>(url);
  }
}