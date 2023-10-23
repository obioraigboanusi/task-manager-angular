import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardTopBarComponent } from './components/dashboard-top-bar/dashboard-top-bar.component';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatIconModule } from '@angular/material/icon';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { TaskDetailsComponent } from './pages/task-details/task-details.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { OngoingTasksComponent } from './components/ongoing-tasks/ongoing-tasks.component';
import { TaskMetricsComponent } from './components/task-metrics/task-metrics.component';
import { TeamMembersComponent } from './components/team-members/team-members.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { HorizontalProgressBarComponent } from './components/horizontal-progress-bar/horizontal-progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardTopBarComponent,
    DashboardLayoutComponent,
    SidebarComponent,
    DashboardComponent,
    LandingPageComponent,
    SignUpComponent,
    TasksComponent,
    NewTaskComponent,
    TaskDetailsComponent,
    SearchBarComponent,
    OngoingTasksComponent,
    TaskMetricsComponent,
    TeamMembersComponent,
    TaskCardComponent,
    HorizontalProgressBarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
