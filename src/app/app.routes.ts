import { Routes } from '@angular/router';


// Componentes

import { CompanyServicesComponent } from './landpage/content/company-services/company-services.component';

import { CarrosselComponent } from './landpage/content/carrossel/carrossel.component';
import { HomeComponent } from './landpage/layout/home/home.component';
import { AboutComponent } from './landpage/content/about/about.component';


export const routes: Routes = [
  // Página inicial redireciona para 'home'
  { path: '', redirectTo: 'home', pathMatch: 'full' },



  // Rotas gerenciadas pelo Layout (OnePage)
  { path: 'home', component: HomeComponent },
  { path: 'carrossel', component: CarrosselComponent },
  { path: 'about', component: AboutComponent },
  { path: 'servicos', component: CompanyServicesComponent },




  // Redirecionamento para página não encontrada ou rota padrão
  { path: '**', redirectTo: 'home' },
];
