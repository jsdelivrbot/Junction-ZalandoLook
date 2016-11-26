import {inject} from 'aurelia-framework';
import {initialize} from 'aurelia-pal-browser';
import {LooksService} from './looksService';
import {parseArticle} from 'utilities';
initialize();

@inject(LooksService)
export class LooksHome {
  heading = "Welcome to ZalandoLooks";
  looks = [];

  constructor(looksService) {
    this.looksService = looksService;
  }

  activate() {
    this.looks = this.looksService.getLooks();
  }
}
