import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  AfterViewChecked,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Message } from '../model/message.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ChatWindowComponent implements OnChanges, AfterViewChecked {
  @Input() messages: Message[] = [];
  @Input() identity: string = '';

  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

  /**
   * Verifica mudanças nas mensagens para rolar a tela automaticamente.
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['messages'] && changes['messages'].currentValue) {
      this.scrollToBottom();
    }
  }

  /**
   * Garante que a rolagem está no final após a renderização.
   */
  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  /**
   * Rola o container de mensagens para o final.
   */
  private scrollToBottom(): void {
    if (!this.scrollContainer) return;

    try {
      this.scrollContainer.nativeElement.scrollTop =
        this.scrollContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.error('Erro ao rolar para o final:', err);
    }
  }
}
