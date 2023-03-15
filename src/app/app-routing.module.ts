import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';

import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'contacto-component', component: ContactoComponent },
  { path: 'proyectos-component', component: ProyectosComponent },
  { path: 'quien-soy-component', component: QuienSoyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
