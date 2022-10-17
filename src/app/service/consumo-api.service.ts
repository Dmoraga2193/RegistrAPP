import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsumoAPIService {
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
    })
  }

  apiURL = 'https://jsonplaceholder.typicode.com';


  constructor(private http:HttpClient) { }

  getPost():Observable<any>{
    return this.http.get(this.apiURL+'/posts/').pipe(
      retry(3)
    );
  }
}
