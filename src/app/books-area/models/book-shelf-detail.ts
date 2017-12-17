import { Volume } from './volume';
export interface BookShelfDetail {
  id?: any;
  kind?: string;
  totalItems?: number;
  items?: Volume[];
}
