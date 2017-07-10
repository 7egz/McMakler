import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';


@Injectable()
export class AdvertismentsService {
  private _url: string = "https://api.mcmakler.de/v1/advertisements"
  constructor (private _http: Http){}
  getAll(){
    return this._http.get(this._url)
      .map((response:Response)=> response.json());

  }

};


