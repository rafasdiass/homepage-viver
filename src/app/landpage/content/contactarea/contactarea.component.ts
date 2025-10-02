// src/app/landpage/content/contactarea/contactarea.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contactform/contactform.component';

@Component({
  selector: 'app-contactarea',
  standalone: true,
  imports: [CommonModule, ContactFormComponent],  // agora funciona
  templateUrl: './contactarea.component.html',
  styleUrls: ['./contactarea.component.scss']
})
export class ContactAreaComponent {}
