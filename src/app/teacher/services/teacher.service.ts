import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Teacher } from '../models/Teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  baseurl = environment.apiUrl +"teacher/"  
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Teacher[]>(this.baseurl);
  }
  get(id: number){
    return this.http.get<Teacher>(this.baseurl+id);
  }

  insert(obj: Teacher){
    return this.http.post<Teacher>(this.baseurl, obj);
  }

  update(obj: Teacher){
    return this.http.put<Teacher>(this.baseurl, obj);
  }

  delete(id: number){
    return this.http.delete<any>(this.baseurl+id);
  }
}
