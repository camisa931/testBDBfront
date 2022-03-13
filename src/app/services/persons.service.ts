import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from './config';


@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  constructor(private http: HttpClient) { }

  listPerson(){
    return this.http.get<any[]>(`${baseUrl}/products`);
  }

  insertPerson(person: any){
    return this.http.post<any>(`${baseUrl}/products`, person);
  }
}
