import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDclTableComponent } from './ngx-dcl-table.component';

describe('NgxDclTableComponent', () => {
  let component: NgxDclTableComponent;
  let fixture: ComponentFixture<NgxDclTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDclTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDclTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
