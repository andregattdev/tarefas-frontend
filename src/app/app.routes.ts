
import { Routes } from '@angular/router';
import { TarefaListComponent } from './tarefas/tarefa-list/tarefa-list.component';
import { TarefasFormComponent } from './tarefas/tarefas-form/tarefas-form.component';

export const routes: Routes = [
  { path: '', component: TarefaListComponent },
  { path: 'editar/:id', component: TarefasFormComponent }

];
