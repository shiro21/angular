import { Component, OnInit } from '@angular/core';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // 아이콘 모음
  faYoutube = faYoutube;
  faBell = faBell;
  faPlus = faPlus;

  constructor() { }

  ngOnInit(): void {
  }
  menus: any;
  listMove(list: number) {
    switch(list) {
      case 1 :
        this.menus = list;
      break;

      case 2 :
        this.menus = list;
      break;

      case 3 :
        this.menus = list;
      break;

      // 해제
      case 4 :
        this.menus = list;
    };
  }

}
