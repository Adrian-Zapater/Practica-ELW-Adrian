import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
//import { StatisticsValues } from '../models/StatisticsValues';
import { StatisticsValue } from '../models/StatisticsValue';

@Injectable({
  providedIn: 'root'
})
export class StaticsService {

  //private httpClient = inject(HttpClient);

  private baseUrl = 'http://localhost:3000/mangues';

  statics: StatisticsValue[];

  constructor(private http: HttpClient) {
    this.statics = [];
  }

  /*
  postStatics(usessionid: String,
    userid: String,
    llocevent: String,
    tipusevent: 'visita' | 'click',
    createdat: Date){

      const statics: Static = { sessionId: usessionid, userId: userid, llocEvent: llocevent, tipusEvent: tipusevent, createdAt: createdat };

    return this.httpClient.post(`${this.baseUrl}registraStatics/`, statics);
  }
  */
  postUser(statisticsValue: StatisticsValue){
    return this.http.post<StatisticsValue>(this.baseUrl, statisticsValue)
  }
}
