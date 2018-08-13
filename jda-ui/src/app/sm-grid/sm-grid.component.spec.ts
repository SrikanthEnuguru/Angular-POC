import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmGridComponent } from './sm-grid.component';

describe('SmGridComponent', () => {
  let component: SmGridComponent;
  let fixture: ComponentFixture<SmGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
