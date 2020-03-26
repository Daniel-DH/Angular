import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegistroComponent } from './registro/registro.component';
import { CerebrosComponent } from './pages/cerebros/cerebros.component';
import { ZombiesComponent } from './pages/zombies/zombies.component';

const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    { path: 'dashboard', component: DashboardComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cerebros', component: CerebrosComponent },
    { path: 'zombies', component: ZombiesComponent },
    { path: '**', component: NopagefoundComponent }
];

export const appRouting = RouterModule.forRoot(routes, {useHash: true});
