import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthenticatedLayoutComponent } from './unauthenticated-layout.component';

describe('UnauthenticatedLayoutComponent', () => {
  let component: UnauthenticatedLayoutComponent;
  let fixture: ComponentFixture<UnauthenticatedLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnauthenticatedLayoutComponent]
    });
    fixture = TestBed.createComponent(UnauthenticatedLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
