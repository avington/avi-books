export interface SearchRequest {
  q: string;
  filter?: string;
  libraryRestrict?: boolean;
  showPreorders?: boolean;
  printType?: string;
  orderBy?: string;
  maxResults?: number;
  startIndex?: number;
}
