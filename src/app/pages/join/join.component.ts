import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as $ from 'jquery';

// service
import { UserService } from 'src/app/services/user/user.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {

  id: string = '';
  password: String = '';
  passwordConfirm: String = '';
  nick: String = '';
  year: String = '';
  gender: String = '성별';
  month: String = '월';
  day: String = '';
  email: String = '';
  phone: String = '';
  months: any = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

  constructor(
    private userService: UserService,
    private storageService: StorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  // ID Check
  idCheckConfirm: boolean = false;
  idCheckExists: boolean = false;
  passwordCheckConfirm: boolean = false;
  passwordConfirmCheckConfirm: boolean = false;
  check(list: any) {
    switch(list) {
      case 'id' :
        if(this.id.length <= 3) {
          this.idCheckConfirm = false;
        } else if(this.id.length > 3) {
          this.idCheckConfirm = true;
        }

        const req = {
          id: this.id
        };
        this.userService.idCheck(req)
        .subscribe(res => {
          if(res.code === 'y') {
            this.idCheckExists = true;
          } else {
            this.idCheckExists = false;
          }
          console.log(this.idCheckExists);
        })
      break;

      case 'password' :
        if(this.password.length <= 7) {
          this.passwordCheckConfirm = false;
        } else if(this.password.length > 7) {
          this.passwordCheckConfirm = true;
        }
      break;

      case 'passwordConfirm' :
        if(this.passwordConfirm !== this.password) {
          this.passwordConfirmCheckConfirm = false;
        } else if(this.passwordConfirm === this.password) {
          this.passwordConfirmCheckConfirm = true;
        }
      break;
    }
  }

  keyCheck(e: any) {
    const exptext = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    console.log(exptext.test(this.id));
    if(exptext.test(this.id)) {
      this.id = this.id.replace(exptext, '');
    }
  }

  join() {
    const exptext = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    let date = new Date().getFullYear();

    if(this.id.length === 0 || this.idCheckConfirm === false || exptext.test(this.id)) {
      alert('아이디를 입력해주세요.');
    } else if(this.password !== this.passwordConfirm || this.passwordConfirmCheckConfirm === false) {
      alert('패스워드를 확인해주세요.');
    } else if(this.nick.length === 0) {
      alert('이름을 입력해주세요.');
    } else if(1900 >= Number(this.year) || date <= Number(this.year)) {
      alert('년도를 확인해주세요.');
    } else if(this.month === '월') {
      alert('월을 확인해주세요.');
    } else if(this.day === '' || !Number(this.day)) {
      alert('일을 확인해주세요.');
    } else {
      const req = {
        params: {
          query: {
            type: 'local',
            id: this.id,
            nick: this.nick,
            phone: this.phone,
            year: this.year,
            month: this.month,
            day: this.day,
            gender: this.gender,

            password: this.password
          }
        }
      };
      this.userService.create(req)
      .subscribe(res => {
        this.storageService.token = res.token;
        this.storageService.uid = res.user;

        this.router.navigate(['/']);
      })
    };
  }

}
