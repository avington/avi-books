export interface SaleInfo {
  buyLink?: string;
  country?: string;
  isEbook?: boolean;
  listPrice?: { amount: number; currencyCode: string };
  offers?: [
    {
      finskyOfferType: number;
      giftable: boolean;
      listPrice: { amountInMicros: number; currencyCode: string };
      retailPrice: { amountInMicros: number; currencyCode: string };
    }
  ];
  retailPrice?: { amountInMicros: number; currencyCode: string };
  saleability?: string;
}
