import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  URL ="https://virtserver.swaggerhub.com/animesh075/Hackathon/1.0.0/users"

  constructor(private _http: HttpClient) { }
  getUser(){
    console.log("This method works");
    return this._http.get(this.URL)
  }
  getCountries(){
    return this._http.get(`https://virtserver.swaggerhub.com/animesh075/Area/1.0.0/countries`)
  }
  getStates(id:number){
    return this._http.get(`https://virtserver.swaggerhub.com/animesh075/Area/1.0.0/country/${id}/states`)
  }
  getCities(id:number){
    return this._http.get(`https://virtserver.swaggerhub.com/animesh075/Area/1.0.0/state/${id}/cities`)
  }
  getNumber(){
    return this._http.get(`https://virtserver.swaggerhub.com/animesh075/Hackathon/1.0.0/users`)
  }
  submit(data:any){
    return this._http.post(this.URL,data)
   }

}
