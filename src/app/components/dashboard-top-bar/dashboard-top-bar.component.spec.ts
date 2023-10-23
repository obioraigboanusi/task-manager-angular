import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTopBarComponent } from './dashboard-top-bar.component';

describe('DashboardTopBarComponent', () => {
  let component: DashboardTopBarComponent;
  let fixture: ComponentFixture<DashboardTopBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardTopBarComponent]
    });
    fixture = TestBed.createComponent(DashboardTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
