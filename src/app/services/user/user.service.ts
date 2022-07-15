import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: String = '/user';
  authUrl: String = '/auth';

  header: any = new HttpHeaders();
  serverUrl: any = environment.serverUrl;

  // tokenHeader: any = new HttpHeaders()
  // .set('Authorization', this.storageService.token);

  constructor(
    private http: HttpClient
  ) { }

  // 로그인
  login(req: any) {
    return this.http.post(this.serverUrl + this.authUrl + '/login', req, { headers : this.header })
    // return this.http.post(this.serverUrl + this.url + '/login', req, { headers : this.header })
    .pipe(
      map((res: any) => res )
    );
  };

  // 아이디 만들기
  create(req: any): Observable<any> {
    return this.http.post(this.serverUrl + this.url + '/create', req, { headers: this.header })
    .pipe(
      map((res: any) => res)
    );
  };

  // 아이디 확인
  idCheck(req: any): Observable<any> {
    return this.http.post(this.serverUrl + this.url + '/idCheck', req, { headers: this.header })
    .pipe(
      map((res: any) => res)
    );
  };
}
