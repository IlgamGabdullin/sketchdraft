import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fake3dComponent } from './fake3d.component';

describe('Fake3dComponent', () => {
  let component: Fake3dComponent;
  let fixture: ComponentFixture<Fake3dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fake3dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fake3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
