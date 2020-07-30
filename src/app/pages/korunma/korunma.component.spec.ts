import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KorunmaComponent } from './korunma.component';

describe('KorunmaComponent', () => {
  let component: KorunmaComponent;
  let fixture: ComponentFixture<KorunmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KorunmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KorunmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
