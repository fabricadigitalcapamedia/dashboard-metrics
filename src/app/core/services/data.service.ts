import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs';


const QUERY = gql`{
  searchServices {
    name_service
    category
    enviroments {
      name_enviroment
      namesSpace
      url_hlb
      url_interna
      methods {
        name
        type
        rote_salesforce
        route_salesforce
        role_securrity_salesforce {
          name
          iss
          sub
          aud
          enviroment_salesforce
          grant_type
          authorization
          url_salesforce
          cookie
          key
        }
        security {
          headers {
            name
            value
          }
        }
        request
      }
    }
  }
 }`;

@Injectable({
  providedIn: 'root'
})
export class DataService  {

  private dataServiceConfigSubject = new BehaviorSubject<any>(null);
  
  ServiceConfig$ = this.dataServiceConfigSubject.asObservable();

  constructor(private apollo: Apollo) { 
    this.getDataApi();
  }

  getDataApi(): void {
    this.apollo.watchQuery({
      query: QUERY
    }).valueChanges.subscribe((result: any) => {
      console.log(result.data.searchServices);
      this.dataServiceConfigSubject.next(result.data.searchServices);
    })
  }
}
