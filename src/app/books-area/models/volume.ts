import { SaleInfo } from './sale-info';
import { AccessInfo } from './access-info';
export interface Volume {
  accessInfo?: AccessInfo;
  etag?: string;
  kind?: string;
  id?: string;
  layerInfo?: {
    layers: [{ layerId: number; volumeAnnotationsVersion: string }];
  };
  saleInfo?: SaleInfo;
  selfLink: string;
  userInfo: {
    acquisitionType: number;
    entitlementType: number;
    isInMyBooks: boolean;
    updated: string;
  };
}
