import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
export const routes: Routes = [
  //{ path: '', component: DashboardComponent },
  { path: 'admin', component: LoginComponent, canActivate: [AuthGuard], data: { roles: ['Admin'] } },
  //{ path: 'access-denied', component: AccessDeniedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
