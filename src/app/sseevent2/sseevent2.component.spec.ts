import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sseevent2Component } from './sseevent2.component';

describe('Sseevent2Component', () => {
  let component: Sseevent2Component;
  let fixture: ComponentFixture<Sseevent2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sseevent2Component]
    });
    fixture = TestBed.createComponent(Sseevent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
