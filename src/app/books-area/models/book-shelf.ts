export interface BookShelf {
  kind?: string;
  id?: number;
  selfLink?: string;
  title?: string;
  access?: string;
  updated?: Date | string;
  created?: Date | string;
  volumeCount?: number;
  volumesLastUpdated?: Date | string;
}
