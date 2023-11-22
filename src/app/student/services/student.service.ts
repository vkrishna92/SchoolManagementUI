import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Student } from '../models/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseurl = environment.apiUrl +"student/"  
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Student[]>(this.baseurl);
  }
  get(id: number){
    return this.http.get<Student>(this.baseurl+id);
  }

  insert(obj: Student){
    return this.http.post<Student>(this.baseurl, obj);
  }

  update(obj: Student){
    return this.http.put<Student>(this.baseurl, obj);
  }

  delete(id: number){
    return this.http.delete<any>(this.baseurl+id);
  }
  upload(students:Student[]){
    return this.http.post<any>(this.baseurl+"upload", students);
  }
}
