import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TwilioService } from '../services/twilio.service';

@Component({
  selector: 'app-chat-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss'],
})
export class ChatInputComponent {
  @Output() messageSent = new EventEmitter<string>();
  message: string = '';

  constructor(private twilioService: TwilioService) {}

  /**
   * Envia a mensagem usando o Twilio Service após validação.
   */
  sendMessage(): void {
    const trimmedMessage = this.message.trim();
    if (!trimmedMessage) {
      console.warn('Mensagem vazia ou inválida não será enviada.');
      return;
    }

    // Substitua `phoneNumber` pelo número de destino real
    const phoneNumber = '+5581999999999'; // Exemplo de número de destino

    this.twilioService.sendMessage(phoneNumber, trimmedMessage).subscribe({
      next: (response) => {
        console.log('Mensagem enviada com sucesso:', response);
        this.messageSent.emit(trimmedMessage); // Emite o evento para outros componentes, se necessário
        this.clearMessage();
      },
      error: (error) => {
        console.error('Erro ao enviar a mensagem:', error);
      },
    });
  }

  /**
   * Limpa o campo de entrada.
   */
  private clearMessage(): void {
    this.message = '';
  }
}
