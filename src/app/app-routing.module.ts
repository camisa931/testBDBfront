import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPersonComponent } from './components/form-person/form-person.component';
import { ListPersonsComponent } from './components/list-persons/list-persons.component';

const routes: Routes = [
  {path: "formulario", component: FormPersonComponent},
  {path: "personas", component: ListPersonsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
