import { Component } from '@angular/core';
// import { ContactTextComponent } from './contact-text/contact-text.component';
import { ContactFormComponent } from './contactform/contactform.component';

@Component({
  selector: 'app-contactarea',
  standalone: true,
  imports: [ ContactFormComponent],
  templateUrl: './contactarea.component.html',
  styleUrls: ['./contactarea.component.scss']
})
export class ContactareaComponent {}
