import { Volume } from './volume';
export interface SearchBooks {
  kind: string;
  items: Volume[];
  totalItems?: number;
  startIndex?: number;
  maxResults?: number;
}
