import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmHighchartsComponent } from './sm-highcharts.component';

describe('SmHighchartsComponent', () => {
  let component: SmHighchartsComponent;
  let fixture: ComponentFixture<SmHighchartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmHighchartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmHighchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
