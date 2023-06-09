import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulariComponent } from './projecte/components/formulari/formulari.component';
import { PuntsInteresComponent } from './projecte/components/punts-interes/punts-interes.component';

const routes: Routes = [
  { path: 'formulari', component: FormulariComponent },
  { path: 'punts-interes', component: PuntsInteresComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
