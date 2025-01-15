import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Statics } from '../models/Statics';
import { Static } from '../models/Static';

@Injectable({
  providedIn: 'root'
})
export class StaticsService {

  private httpClient = inject(HttpClient);

  private baseUrl = 'http://localhost:3000/';

  constructor() { }

  postStatics(usessionid: String,
    userid: String,
    llocevent: String,
    tipusevent: ['visita', 'click'],
    createdat: Date){
    const user: Static = { usessionid: usessionid, userid: userid, llocevent: llocevent, tipusevent: tipusevent, createdat: createdat };

    return this.httpClient.post(`${this.baseUrl}users/`, user);
  }
}
