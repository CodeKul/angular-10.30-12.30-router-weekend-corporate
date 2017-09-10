import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { DashComponent } from './dash/dash.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'dash/:usNm', component: DashComponent },
    { path: 'forget', component: ForgetPassComponent }
];

export let MyRouterModule = RouterModule.forRoot(routes);

