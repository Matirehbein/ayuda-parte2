import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable,retry} from 'rxjs';
@Injectable({
  providedIn: 'root'
})



export class ApiService {

  apiURL ='';
  httpOptions = {
    headers : new HttpHeaders ({
      'content-type': 'application/json',
      'Access-Control-Allow-Origin':'*'
    })
  }

  
  constructor(private http:HttpClient) { }



  //Listar
  listarPosts():Observable<any>{
    return this.http.get(this.apiURL+"/posts/").pipe(
      retry(3)
    )

  }
  //Buscar
  buscarPost(id:any):Observable<any>{
    return this.http.get(this.apiURL+"/posts/"+id).pipe(
      retry(3)
    )
  }

  //Agregar
  agregarPost(post:any):Observable<any>{
    return this.http.post(this.apiURL+"/posts/",post,this.httpOptions).pipe(
      retry(3)
    )
  }


  //Elimina
  elimiarPost(id:any):Observable<any>{
    return this.http.delete(this.apiURL+"/posts/"+id).pipe(
      retry(3)
    )

  }


  //Modificar
  modificarPost(id:any,post:any):Observable<any>{
    return this.http.put(this.apiURL+"/posts/"+id,post,this.httpOptions).pipe(
      retry(3)
    )
  }
}





