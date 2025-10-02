import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatService } from '../services/chat.service';
import { Chat } from '../model/chat.model';
import { Conversation } from '@twilio/conversations';

@Component({
  selector: 'app-chat-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss'],
})
export class ChatListComponent implements OnInit {
  chats: Chat[] = [];
  @Output() chatSelected = new EventEmitter<Chat>();

  constructor(private chatService: ChatService) {}

  async ngOnInit(): Promise<void> {
    try {
      await this.loadChatsFromTwilio();
    } catch (error) {
      console.error('Erro ao carregar chats do Twilio:', error);
    }
  }

  /**
   * Carrega as conversas ativas do Twilio e as converte para o formato esperado.
   */
  private async loadChatsFromTwilio(): Promise<void> {
    try {
      const conversations: Conversation[] =
        await this.chatService.getConversations();
      this.chats = conversations.map((conversation) => ({
        id: conversation.sid,
        name:
          conversation.friendlyName || conversation.uniqueName || 'Conversa',
        phoneNumber: '', // O número de telefone pode não estar disponível diretamente
      }));
    } catch (error) {
      console.error('Erro ao buscar conversas:', error);
    }
  }

  /**
   * Emite o evento de seleção de conversa.
   * @param chat O chat escolhido pelo usuário.
   */
  selectChat(chat: Chat): void {
    this.chatSelected.emit(chat);
  }
}
