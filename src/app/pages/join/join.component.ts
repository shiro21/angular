import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {

  id: String = '';
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



  constructor() { }

  ngOnInit(): void {
  }

  // ID Check
  idCheckConfirm: boolean = false;
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

  join() {
    console.log(Number(this.year));
    console.log(Number(this.month));
    console.log(Number(this.day));
    if(this.id.length === 0 || this.idCheckConfirm === false) {
      alert('아이디를 입력해주세요.');
    } else if(this.password !== this.passwordConfirm || this.passwordConfirmCheckConfirm === false) {
      alert('패스워드를 확인해주세요.');
    } else if(this.nick.length === 0) {
      alert('이름을 입력해주세요.');
    } else if(Number(this.year) === NaN || this.year.length !== 4) {
      alert('년도를 확인해주세요.');
    } else if(Number(this.month) === NaN) {
      alert('월을 확인해주세요.');
    } else if(Number(this.day) === NaN || this.day === '0') {
      alert('일을 확인해주세요.');
    } else { alert('양호') };
  }

}
