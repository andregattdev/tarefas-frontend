import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TarefaListComponent } from "./tarefas/tarefa-list/tarefa-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TarefaListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tasklist-frontend';
}
