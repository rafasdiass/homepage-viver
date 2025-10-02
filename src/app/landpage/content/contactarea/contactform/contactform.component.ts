// src/app/landpage/content/contactarea/contactform/contactform.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss']
})
export class ContactFormComponent {
  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });

  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.successMessage = 'Formulário enviado com sucesso!';
      this.errorMessage = '';
      console.log(this.contactForm.value);
    } else {
      this.errorMessage = 'Preencha todos os campos corretamente.';
      this.successMessage = '';
    }
  }
}
