import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Tarefa, TarefaService } from '../../core/services/tarefa.service';

@Component({
  selector: 'app-tarefas-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './tarefas-form.component.html',
  styleUrl: './tarefas-form.component.scss',
})
export class TarefasFormComponent implements OnInit {
  tarefa: Tarefa = { titulo: '', descricao: '', concluida: false };
  id?: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tarefaService: TarefaService
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.tarefaService.listar().subscribe((tarefas) => {
        const encontrada = tarefas.find((t) => t.id === this.id);
        if (encontrada) this.tarefa = { ...encontrada };
      });
    }
  }

  salvar(): void {
    if (!this.id) return;
    this.tarefaService.atualizar(this.id, this.tarefa).subscribe({
      next: () => this.router.navigate(['/']),
      error: (err) => console.error('Erro ao atualizar tarefa:', err),
    });
  }
}
