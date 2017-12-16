export interface AccessInfo {
  accessViewStatus?: string;
  country?: string;
  embeddable?: boolean;
  epub?: { acsTokenLink: string; isAvailable: boolean };
  pdf?: { isAvailable: boolean };
  publicDomain?: boolean;
  quoteSharingAllowed?: boolean;
  textToSpeechPermission?: string;
  viewability?: string;
  webReaderLink?: string;
}
