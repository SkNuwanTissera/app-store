
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiEndpoints } from '../config/api.endpoints';
import {
  GetApplicationsParam, Application, Subscription,
  ApplicationListResult, ApplicationDetails, SubscriptionResult, CreateApplicationParam, CreateAppResponseData
} from './applications.data.models';
import { Observable } from 'rxjs';
import { TokenData } from '../authentication/authentication.models';
import { Store } from '@ngrx/store';
import { AppState } from '../app.data.models';

@Injectable()
export class ApplicationsService {

  private accessToken: TokenData;

  constructor(private http: HttpClient, private store: Store<AppState>) {
    this.store.select((s) => s.authentication.tokenDetails).subscribe((auth) => {
      this.accessToken = auth;
    })
  }

  getAllApplications(param: GetApplicationsParam): Observable<ApplicationListResult> {
    const searchParams = new HttpParams()
      .append('limit', <any>param.limit)
      .append('offset', <any>param.offset);
    const httpOptions = new HttpHeaders()
      .append('Authorization', 'Basic ' + this.accessToken.access_token)
    return this.http.get<ApplicationListResult>(ApiEndpoints.applications.getAllApplications, { params: searchParams, headers: httpOptions });
  }

  getApplicationsDetails(appId: string): Observable<ApplicationDetails> {
    const endpoint = `${ApiEndpoints.applications.getAllApplications}/${appId}`;
    return this.http.get<ApplicationDetails>(endpoint);
  }

  getApplicationSubscriptions(appId: string): Observable<SubscriptionResult> {
    const endpoint = `${ApiEndpoints.subscriptions}/?applicationId=${appId}`;
    return this.http.get<SubscriptionResult>(endpoint);
  }

  createApplication(param: CreateApplicationParam): Observable<CreateAppResponseData> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + this.accessToken.access_token
      })
    };

    return this.http.post(ApiEndpoints.applications.createApplication, param, httpOptions).pipe(
      map((data: any) => new CreateAppResponseData())
    );
  }

}
