import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

// service
import { UserService } from 'src/app/services/user/user.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  id: String = '';
  password: String = '';
  preserve: any;

  constructor(
    private userService: UserService,
    private storageService: StorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  // 로그인
  login() {
    if(this.id === '' || this.id === null || this.id === undefined) {
      Swal.fire({
        icon: 'error',
        title: '아이디를 확인해주세요.'
      });
    } else if(this.password === '' || this.password === null || this.password === undefined) {
      Swal.fire({
        icon: 'error',
        title: '비밀번호를 확인해주세요.'
      });
    } else {
      const req = {
        params: {
          query: {
            id: this.id,
            password: this.password
          }
        }
      };
      this.userService.login(req)
      .subscribe(res => {
        if(res.code === 'y') {
          this.storageService.token = res.token;
          this.storageService.uid = res.user;

          this.router.navigate(['/']);
        }
      });
    }
  }

  // 회원가입 하러가기
  moveJoin() {
    this.router.navigate(['/join']);
  }

}
