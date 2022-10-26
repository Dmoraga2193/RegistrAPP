import { HttpHeaders, HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry, catchError} from 'rxjs/operators';

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

  updatePost(id,post):Observable<any>{
    return this.http.put(this.apiURL+'/posts/'+id,post).pipe(
      retry(3)
    )
  }

  createPost(post):Observable<any>{
    return this.http.post(this.apiURL+'/posts/',post,this.httpOptions)
    .pipe(
      retry(3)
    )
  }

}
