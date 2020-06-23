import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UgradeComponent } from './ugrade.component';

describe('UgradeComponent', () => {
  let component: UgradeComponent;
  let fixture: ComponentFixture<UgradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UgradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
