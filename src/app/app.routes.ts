import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { DonacionesComponent } from './modules/donaciones/donaciones.component';
import { AdopcionComponent } from './modules/adopcion/adopcion.component';
import { LoginComponent } from './modules/login/login.component';

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "donaciones", component: DonacionesComponent },
    { path: "adopciones", component: AdopcionComponent },
    { path: "login", component: LoginComponent }
];
