import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.scss']
})
export class ParallaxComponent implements OnInit {
  @HostListener('window:scroll', ['$event']) onWindowScroll($event: any) {
    let verticalOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  }

  famousSay: any = [];

  // 헤더 제목
  currentItem: any = ['Parallax Site', '(패럴랙스 사이트)'];

  // 각 섹션 탑 값
  sectionTop: any = [];

  constructor() {

    this.famousSay = [
      {
        say: '삶이 있는 한 희망은 있다.',
        person: '키케로'
      },
      {
        say: '산다는것 그것은 치열한 전투이다.',
        person: '로망로랑'
      },
      {
        say: '하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.',
        person: '사무엘존슨'
      },
      {
        say: '언제나 현재에 집중할수 있다면 행복할것이다. ',
        person: '파울로 코엘료'
      },
      {
        say: '진정으로 웃으려면 고통을 참아야하며, 나아가 고통을 즐길 줄 알아야 해',
        person: '찰리 채플린'
      },
      {
        say: '직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다 .',
        person: '엘버트 허버드'
      },
    ]

  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {

  }

  ngAfterContentInit(): void {

  }

  ngAfterContentChecked(): void {

  }

  ngAfterViewInit(): void {
    this.defaultTop();
  }

  ngAfterViewChecked(): void {
    // this.defaultTop();
  }

  defaultTop() {
    // document.querySelectorAll(".contents").forEach((el, index) => {
    //   // console.log(el.getBoundingClientRect().top);
    //   // this.sectionTop = el.parentElement?.offsetTop.toString();
    // })
    let newArray = document.querySelectorAll(".contents");
    for(let i = 0; i < newArray.length; i++) {
      this.sectionTop.push(newArray[i]);
    }
  }

  addItem(e: any) {
    let offsetScroll = document.getElementById(`ps${e}`)?.offsetTop;
    window.scrollTo({top: offsetScroll, behavior: 'smooth'});
  }

}
