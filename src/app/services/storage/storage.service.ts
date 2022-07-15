import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  // API Token
  get token(): any {
    let token = localStorage.getItem('_project_token');

    try {
      return token;
    } catch (e) {
      return null;
    }

  }

  set token(_token: any) {
    if(_token) {
      localStorage.setItem('_project_token', _token);
    } else {
      localStorage.removeItem('_project_token');
    }

  }

  get uid(): any {
    let uid = localStorage.getItem('_project_uid');

    try {
      return uid;
    } catch (e) {
      return null;
    }

  }

  set uid(_user: any) {
    if(_user) {
      localStorage.setItem('_project_uid', _user);
    } else {
      localStorage.removeItem('_project_uid');
    }
  }

}
