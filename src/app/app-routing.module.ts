import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulariosModule } from './formularios/formularios.module';

const routes: Routes = [
  {
    path: 'formularios',
    loadChildren: () => import('./formularios/formularios.module').then(m =>m.FormulariosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
