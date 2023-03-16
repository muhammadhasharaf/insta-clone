import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {



  constructor(private readonly http: HttpClient,) {

  }

  // get method
  get = (
    path: string,
    params: HttpParams = new HttpParams()
  ): Observable<any> =>
    this.http.get(`${environment.baseUrl}/${path}&apiKey=${environment.authToken}`, {
      params,
    });
}
