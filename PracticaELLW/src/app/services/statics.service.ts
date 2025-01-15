import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Statics } from '../models/Statics';
import { Static } from '../models/Static';

@Injectable({
  providedIn: 'root'
})
export class StaticsService {

  private httpClient = inject(HttpClient);

  private baseUrl = 'http://localhost:3000/mangues';

  constructor() { }

  postStatics(usessionid: String,
    userid: String,
    llocevent: String,
    tipusevent: ['visita', 'click'],
    createdat: Date){

      const statics: Static = { sessionId: usessionid, userId: userid, llocEvent: llocevent, tipusEvent: tipusevent, createdAt: createdat };

    return this.httpClient.post(`${this.baseUrl}registraStatics/`, statics);
  }
}
