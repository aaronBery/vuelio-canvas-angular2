import { Injectable } from '@angular/core';

@Injectable()
export class WindowService {
  public window = window;
  constructor() {}
  iframelyLoad(){
    this.load(this.window);
  }
  load(window: any) {
    window.iframely.load();
  }
}