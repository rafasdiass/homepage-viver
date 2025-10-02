import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      assunto: ['', Validators.required],
      mensagem: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      console.log('Dados enviados:', this.formulario.value);
      this.formulario.reset();
    } else {
      this.formulario.markAllAsTouched();
    }
  }
}
