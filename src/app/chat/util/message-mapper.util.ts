import { Message as TwilioMessage } from '@twilio/conversations';

export interface Message {
  id: string;
  content: string;
  timestamp: Date;
  sender: 'user' | 'support';
}

/**
 * Mapeia uma mensagem Twilio para o formato interno.
 */
export function mapTwilioMessage(twilioMessage: TwilioMessage): Message {
  return {
    id: twilioMessage.sid,
    content: twilioMessage.body || '',
    timestamp: twilioMessage.dateCreated || new Date(),
    sender: twilioMessage.author === 'support' ? 'support' : 'user',
  };
}
