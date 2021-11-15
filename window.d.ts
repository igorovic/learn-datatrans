export declare global {
  interface StartPaymentConfg {
    transactionId: string;
  }
  interface Window {
    Datatrans: {
      startPayment: (config: StartPaymentConfg) => void;
    };
  }
}
