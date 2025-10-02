import {
  Client as ConversationsClient,
  Conversation,
  Message as TwilioMessage,
} from '@twilio/conversations';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { mapTwilioMessage, Message } from '../model/message.model';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private client?: ConversationsClient;
  private identity: string = '';
  private activeConversation?: Conversation;

  // Observables para monitoramento de mensagens e erros
  public messages$ = new BehaviorSubject<Message[]>([]);
  public error$ = new BehaviorSubject<string | null>(null);

  /**
   * Inicializa o cliente Twilio Conversations.
   * @param identity Identidade do usuário.
   */
  async initialize(identity: string): Promise<void> {
    this.identity = identity;

    try {
      const token = await this.fetchToken(identity);
      this.client = await ConversationsClient.create(token);

      // Configurar eventos de reconexão e token
      this.setupEventListeners();
    } catch (error) {
      console.error('Erro ao inicializar o Twilio Client:', error);
      this.error$.next('Erro ao inicializar o cliente do Twilio.');
    }
  }

  /**
   * Recupera um token válido do backend.
   * @param identity Identidade do usuário.
   * @returns Token para autenticação no Twilio Conversations.
   */
  private async fetchToken(identity: string): Promise<string> {
    try {
      const response = await fetch(`http://localhost:3000/token`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identity }),
      });

      if (!response.ok) throw new Error('Erro na resposta do servidor.');

      const { token } = await response.json();
      return token;
    } catch (error) {
      console.error('Erro ao buscar token:', error);
      throw new Error('Falha ao buscar token do servidor.');
    }
  }

  /**
   * Configura os eventos do cliente Twilio.
   */
  private setupEventListeners(): void {
    if (!this.client) return;

    this.client.on('tokenAboutToExpire', async () => {
      try {
        const newToken = await this.fetchToken(this.identity);
        await this.client?.updateToken(newToken);
      } catch (error) {
        console.error('Erro ao atualizar o token:', error);
        this.error$.next('Falha ao atualizar o token.');
      }
    });

    this.client.on('tokenExpired', async () => {
      try {
        const newToken = await this.fetchToken(this.identity);
        await this.client?.updateToken(newToken);
      } catch (error) {
        console.error('Token expirado e falha ao renovar:', error);
        this.error$.next('Token expirado, por favor recarregue a página.');
      }
    });

    this.client.on('connectionError', (error) => {
      console.error('Erro de conexão com Twilio:', error);
      this.error$.next('Erro de conexão com Twilio.');
    });
  }

  /**
   * Retorna todas as conversas disponíveis para o usuário.
   * @returns Uma lista de conversas.
   */
  async getConversations(): Promise<Conversation[]> {
    if (!this.client) throw new Error('Cliente não inicializado.');

    const paginator = await this.client.getSubscribedConversations();
    return paginator.items;
  }

  /**
   * Cria ou entra em uma conversa específica.
   * @param uniqueName Nome único da conversa.
   */
  async createOrJoinConversation(uniqueName: string): Promise<void> {
    if (!this.client) throw new Error('Cliente não inicializado.');

    try {
      this.activeConversation = await this.client.getConversationByUniqueName(
        uniqueName
      );
    } catch {
      this.activeConversation = await this.client.createConversation({
        uniqueName,
        friendlyName: uniqueName,
      });
    }

    if (!this.activeConversation) throw new Error('Conversa não encontrada.');

    // Carregar mensagens existentes
    const messages: Message[] = [];
    const paginator = await this.activeConversation.getMessages();
    paginator.items.forEach((twilioMessage: TwilioMessage) => {
      messages.push(mapTwilioMessage(twilioMessage));
    });
    this.messages$.next(messages);

    // Escutar mensagens novas
    this.activeConversation.on(
      'messageAdded',
      (twilioMessage: TwilioMessage) => {
        const updatedMessages = [
          ...this.messages$.value,
          mapTwilioMessage(twilioMessage),
        ];
        this.messages$.next(updatedMessages);
      }
    );
  }

  /**
   * Envia uma mensagem na conversa ativa.
   * @param content Conteúdo da mensagem.
   */
  async sendMessage(content: string): Promise<void> {
    if (!this.activeConversation) throw new Error('Nenhuma conversa ativa.');
    try {
      await this.activeConversation.sendMessage(content);
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      this.error$.next('Erro ao enviar a mensagem.');
    }
  }
}
