import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavcontrolsComponent } from './navcontrols.component';

describe('NavcontrolsComponent', () => {
  let component: NavcontrolsComponent;
  let fixture: ComponentFixture<NavcontrolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavcontrolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavcontrolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
