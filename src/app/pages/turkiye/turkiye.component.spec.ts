import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurkiyeComponent } from './turkiye.component';

describe('TurkiyeComponent', () => {
  let component: TurkiyeComponent;
  let fixture: ComponentFixture<TurkiyeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurkiyeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurkiyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
