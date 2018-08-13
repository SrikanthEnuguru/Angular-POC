import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmLibTreeComponent } from './sm-lib-tree.component';

describe('SmLibTreeComponent', () => {
  let component: SmLibTreeComponent;
  let fixture: ComponentFixture<SmLibTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmLibTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmLibTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
