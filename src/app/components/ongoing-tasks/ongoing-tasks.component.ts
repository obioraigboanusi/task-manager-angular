import { Component, OnInit } from '@angular/core';
import { tasksData } from 'src/app/utils/dummyData';

@Component({
  selector: 'app-ongoing-tasks',
  templateUrl: './ongoing-tasks.component.html',
  styleUrls: ['./ongoing-tasks.component.css'],
})
export class OngoingTasksComponent implements OnInit {
  onGoingTasks: Task[] = [];

  ngOnInit(): void {
    this.onGoingTasks = tasksData.slice(0, 2);
  }

}
