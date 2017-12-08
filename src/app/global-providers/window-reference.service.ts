import {Injectable} from '@angular/core';

@Injectable()
export class WindowReferenceService {

  constructor() {
  }

  private getWindow = () => {
    return window;
  }

  get nativeWindow(): any {
    return this.getWindow();
  }

}
