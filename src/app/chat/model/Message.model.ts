import { Message as TwilioMessage } from '@twilio/conversations';

export interface Message {
  id: string;
  content: string;
  timestamp: Date;
  sender: 'user' | 'support';
}

/**
 * Converte uma mensagem do Twilio para o formato interno.
 * @param twilioMessage Mensagem retornada pela API Twilio.
 * @returns Mensagem no formato interno.
 */
export function mapTwilioMessage(twilioMessage: TwilioMessage): Message {
  return {
    id: twilioMessage.sid,
    content: twilioMessage.body || '',
    timestamp: twilioMessage.dateCreated || new Date(),
    sender: twilioMessage.author === 'support' ? 'support' : 'user',
  };
}
