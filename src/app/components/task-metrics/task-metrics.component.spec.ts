import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskMetricsComponent } from './task-metrics.component';

describe('TaskMetricsComponent', () => {
  let component: TaskMetricsComponent;
  let fixture: ComponentFixture<TaskMetricsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskMetricsComponent]
    });
    fixture = TestBed.createComponent(TaskMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
