import { HttpClient } from "@angular/common/http";
import { registerModel } from "../register/model/register.model";
import { UserDTOModel } from "../register/model/userDTO.model";
import {Injectable} from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable()
export class SignupService{

    constructor(private httpClient:HttpClient)
    {

    }

    signup(register:registerModel){
        console.log("register in servive")
        return this.httpClient.post("https://localhost:7109/api/User/Register",register);
    }

    userLogin(userDTO:UserDTOModel){
        return this.httpClient.post("https://localhost:7109/api/User/Login",userDTO);
    }
    private formDetailsSubject = new BehaviorSubject<any>(null);
  formDetails$ = this.formDetailsSubject.asObservable();

  setFormDetails(details: any) {
    this.formDetailsSubject.next(details);
  }
}