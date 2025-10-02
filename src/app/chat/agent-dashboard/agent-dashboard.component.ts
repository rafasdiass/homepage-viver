import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { Message } from '../model/message.model';
import { Conversation } from '@twilio/conversations';
import { mapTwilioMessage } from '../util/message-mapper.util';

@Component({
  selector: 'app-agent-dashboard',
  templateUrl: './agent-dashboard.component.html',
  styleUrls: ['./agent-dashboard.component.scss'],
  standalone: true,
  imports: [],
})
export class AgentDashboardComponent implements OnInit {
  conversations: Conversation[] = [];
  selectedConversation: Conversation | null = null;
  messages: Message[] = [];
  newMessage: string = '';

  constructor(private chatService: ChatService) {}

  async ngOnInit(): Promise<void> {
    try {
      await this.chatService.initialize('agent');
      this.conversations = await this.chatService.getConversations();
    } catch (error) {
      console.error('Erro ao inicializar o agente:', error);
    }
  }

  async selectConversation(conversation: Conversation): Promise<void> {
    if (!conversation) return;

    this.selectedConversation = conversation;

    // Carregar mensagens
    const paginator = await conversation.getMessages();
    this.messages = paginator.items.map(mapTwilioMessage);

    // Escutar mensagens novas
    conversation.on('messageAdded', (twilioMessage) => {
      this.messages.push(mapTwilioMessage(twilioMessage));
    });
  }

  async sendMessage(): Promise<void> {
    if (!this.selectedConversation || !this.newMessage.trim()) return;

    try {
      await this.chatService.sendMessage(this.newMessage.trim());
      this.newMessage = '';
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
    }
  }
}
