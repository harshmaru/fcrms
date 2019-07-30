import { LogReg } from './../../../config';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class LogRegService {
  constructor(private http:HttpClient) {}

  doLogin(dat){
    return this.http.post(LogReg.LoginURL, dat);
  }

  doRegister(dat){
    return this.http.post(LogReg.RegistrationURL,dat)
  }

}
