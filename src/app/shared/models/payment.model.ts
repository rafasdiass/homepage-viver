// src/app/shared/models/payment.model.ts

export interface CreditCardPaymentData {
  cardNumber: string;
  cardHolderName: string;
  cardExpiry: string;
  cardCVC: string;
  amount: number; // Certifique-se de que esta propriedade está definida
}
export interface PixPaymentResponse {
  qrCode: string; // Imagem do QR Code em base64
  payload: string; // Código Pix copia e cola
}

export interface PixPaymentData {
  debtorIdentification: string; // CPF do cliente
  transactionIdentification: string;
  consentId: string;
  amount: number; // Valor da transação
  currency: string; // Moeda da transação, por exemplo, 'BRL'
  timestamp: Date; // Data e hora da transação
}
