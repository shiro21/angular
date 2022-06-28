import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-p-header',
  templateUrl: './p-header.component.html',
  styleUrls: ['./p-header.component.scss']
})
export class PHeaderComponent implements OnInit {
  @Input() item: any;
  @Input() item2: any;

  @Output() newItemEvent = new EventEmitter<any>();

  @HostListener('window:scroll', ['$event']) onWindowScroll($event: any) {
    let verticalOffset = (document.documentElement.scrollTop || window.scrollY || window.pageYOffset) + window.innerHeight / 2;

    for(let i = 0; i < this.item2.length; i++) {
      if(verticalOffset < this.item2[i].parentElement?.offsetTop) {
        this.headerValue = i;
        break;
        // 마지막 값이 잡히지 않아서 for문 마지막 값 불러오기로 직접 넣어줌
      } else if(verticalOffset > this.item2[this.item2.length - 1].parentElement?.offsetTop) {
        this.headerValue = this.item2.length;
        break;
      }
    }
  }

  headerValue: Number = 1;
  addNewItem(value: any) {
    this.headerValue = value;
    this.newItemEvent.emit(value);
  }

  constructor() {
  }

  ngOnInit(): void {
  }
  headerList: any = [1, 2, 3, 4, 5, 6];
  numberList: Number = 1;

  ngAfterContentChecked(): void {


  }

}
