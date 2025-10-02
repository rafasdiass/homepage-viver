import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { Message } from '../model/message.model';
import { Chat } from '../model/chat.model';
import { ChatWindowComponent } from '../chat-window/chat-window.component';
import { ChatListComponent } from '../chat-list/chat-list.component';
import { ChatInputComponent } from '../chat-input/chat-input.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss'],
  standalone: true,
  imports: [
    ChatWindowComponent,
    ChatListComponent,
    ChatInputComponent,
    CommonModule,
    FormsModule,
  ],
})
export class ChatRoomComponent implements OnInit {
  isChatOpen: boolean = false;
  messages: Message[] = [];
  selectedChat: Chat | null = null;

  constructor(private chatService: ChatService) {}

  async ngOnInit(): Promise<void> {
    try {
      await this.chatService.initialize('user');
      this.chatService.messages$.subscribe(
        (messages) => (this.messages = messages)
      );
      console.log('ChatRoomComponent inicializado com sucesso.');
    } catch (error) {
      console.error('Erro ao inicializar o ChatRoomComponent:', error);
    }
  }

  toggleChat(): void {
    this.isChatOpen = !this.isChatOpen;
  }

  async onChatSelected(chat: Chat): Promise<void> {
    try {
      this.selectedChat = chat;
      await this.chatService.createOrJoinConversation(chat.name);
    } catch (error) {
      console.error('Erro ao selecionar o chat:', error);
    }
  }

  async onMessageSent(content: string): Promise<void> {
    if (!this.selectedChat) {
      console.error('Nenhum chat selecionado!');
      return;
    }
    try {
      await this.chatService.sendMessage(content);
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
    }
  }
}
