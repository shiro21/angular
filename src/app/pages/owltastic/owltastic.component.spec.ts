import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwltasticComponent } from './owltastic.component';

describe('OwltasticComponent', () => {
  let component: OwltasticComponent;
  let fixture: ComponentFixture<OwltasticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwltasticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwltasticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
