import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Firestore, addDoc, collection, DocumentReference } from '@angular/fire/firestore';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss']
})
export class ContactFormComponent {
  contactForm = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    phone: new FormControl<string>('', [Validators.required, Validators.pattern('\\+?[0-9]{10,15}')]),
    message: new FormControl<string>('', Validators.required)
  });

  successMessage: string | null = null;
  errorMessage: string | null = null;
  documentId: string | null = null;

  constructor(private firestore: Firestore) {}

  async onSubmit(): Promise<void> {
    if (this.contactForm.valid) {
      const contactData: ContactFormData = this.contactForm.value as ContactFormData;

      try {
        const docRef: DocumentReference = await addDoc(collection(this.firestore, 'messages'), contactData);
        this.documentId = docRef.id;
        this.successMessage = 'Mensagem enviada com sucesso!';
        this.errorMessage = null;
        this.contactForm.reset();
      } catch (error) {
        console.error('Erro ao enviar a mensagem:', error);
        this.errorMessage = 'Erro ao enviar a mensagem. Tente novamente mais tarde.';
        this.successMessage = null;
      }
    }
  }
}
