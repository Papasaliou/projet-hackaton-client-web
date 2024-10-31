import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Config} from "../../config/config";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InnovativeMemoryService {

  constructor(private http:HttpClient) {

  }
  upload(fileToImport:File):Observable<boolean>
  {
    const formData = new FormData();
    formData.append('files',fileToImport, fileToImport.name);
    const  header =new HttpHeaders();
    header.append('Accept','application/json');
    return  this.http.post<boolean>(Config.apiUrl+"upload",formData,{headers:header});
  }
  chat(question:string):Observable<string>{
    return this.http.get<string>(Config.apiUrl+"chat?"+question);
  }
}
