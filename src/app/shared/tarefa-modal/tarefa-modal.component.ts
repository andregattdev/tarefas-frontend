import { Component, Inject } from '@angular/core';
import {  MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule,  MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Tarefa } from '../../core/services/tarefa.service';


@Component({
  selector: 'app-tarefa-modal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule
],
  templateUrl: './tarefa-modal.component.html',
  styleUrls: ['./tarefa-modal.component.scss']
})
export class TarefaModalComponent {
  constructor(
    public dialogRef: MatDialogRef<TarefaModalComponent>,
    @Inject(MAT_DIALOG_DATA) public tarefa: Tarefa
  ) {}

  salvar(): void {
    this.dialogRef.close(this.tarefa); // retorna a tarefa editada
  }

  cancelar(): void {
    this.dialogRef.close(); // fecha sem salvar
  }
}
