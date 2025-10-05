import { Component, OnInit } from '@angular/core';
import { Tarefa, TarefaService } from '../../core/services/tarefa.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TarefaModalComponent } from '../../shared/tarefa-modal/tarefa-modal.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-tarefa-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSnackBarModule,
  ],
  templateUrl: './tarefa-list.component.html',
  styleUrls: ['./tarefa-list.component.scss'],
})
export class TarefaListComponent implements OnInit {
  tarefas: Tarefa[] = [];

  novaTarefa: Tarefa = {
    titulo: '',
    descricao: '',
    concluida: false,
  };

  constructor(
    private tarefaService: TarefaService,
    private router: Router,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.tarefaService.listar().subscribe((data) => (this.tarefas = data));
  }

  adicionarTarefa(): void {
    console.log('Botão clicado');

    if (!this.novaTarefa.titulo.trim()) return;

    this.tarefaService.criar(this.novaTarefa).subscribe({
      next: (tarefaCriada: Tarefa) => {
        this.tarefas.push(tarefaCriada);
        this.novaTarefa = { titulo: '', descricao: '', concluida: false };
        this.snackBar.open('Tarefa criada com sucesso!', 'Fechar', {
          duration: 3000,
        });
      },
      error: (err) => console.error('Erro ao criar tarefa:', err),
    });
  }

  deletar(id: number): void {
    this.tarefaService.deletar(id).subscribe({
      next: () => {
        this.tarefas = this.tarefas.filter((t) => t.id !== id);
        this.snackBar.open('Tarefa excluída!', 'Fechar', { duration: 3000 });
      },
      error: (err) => console.error('Erro ao deletar tarefa:', err),
    });
  }

  editar(tarefa: Tarefa): void {
    const dialogRef = this.dialog.open(TarefaModalComponent, {
      data: { ...tarefa },
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((resultado) => {
      if (resultado) {
        this.tarefaService.atualizar(tarefa.id!, resultado).subscribe(() => {
          const index = this.tarefas.findIndex((t) => t.id === tarefa.id);
          if (index !== -1) this.tarefas[index] = { ...tarefa, ...resultado };
          this.snackBar.open('Tarefa atualizada!', 'Fechar', {
            duration: 3000,
          });
        });
      }
    });
  }

  get tarefasConcluidas(): Tarefa[] {
    return this.tarefas.filter((t) => t.concluida);
  }

  get tarefasPendentes(): Tarefa[] {
    return this.tarefas.filter((t) => !t.concluida);
  }
}
