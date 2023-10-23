import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { TaskDetailsComponent } from './pages/task-details/task-details.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'register', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'new-tasks', component: TasksComponent },
  { path: 'tasks/:taskId', component: TaskDetailsComponent },
  { path: '**', component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
