import { DashGuardService } from './dash/dash-guard.service';
import { LogsComponent } from './dash/logs.component';
import { ProfileComponent } from './dash/profile.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { DashComponent } from './dash/dash.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';

const dashRoutes: Routes = [
    { path: 'profile', component: ProfileComponent },
    { path: 'logs', component: LogsComponent }
];
const routes: Routes = [
    { path: '', component: LoginComponent },
    {
        path: 'dash/:usNm',
        component: DashComponent,
        children: dashRoutes,
        canActivate: [DashGuardService]
    },
    { path: 'forget', component: ForgetPassComponent },
    { path: '**', redirectTo: '' }
];

export let MyRouterModule = RouterModule.forRoot(routes);

