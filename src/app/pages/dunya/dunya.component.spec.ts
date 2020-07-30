import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DunyaComponent } from './dunya.component';

describe('DunyaComponent', () => {
  let component: DunyaComponent;
  let fixture: ComponentFixture<DunyaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DunyaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DunyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
